require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 5000;

// Supabase configuration
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

// Middleware to authenticate user
const authenticate = (req, res, next) => {
  const token = req.cookies.auth_token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.userEmail = decoded.email;
    req.userFullName = decoded.full_name;
    next();
  } catch (err) {
    console.error('Auth Error:', err.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/', (req, res) => {
  res.send('DailySphere Backend is running!');
});

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  const { full_name, email, password } = req.body;

  if (!full_name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const { data: existingUser } = await supabase
      .from('Users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('Users')
      .insert([{ full_name, email, password: hashedPassword }])
      .select()
      .single();

    if (error) throw error;

    // Create default UserDetails
    await supabase.from('UserDetails').insert([{ user_id: data.id }]);

    res.status(201).json({ message: 'User registered successfully', user: { id: data.id, full_name, email } });
  } catch (err) {
    console.error('Registration Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: user, error } = await supabase
      .from('Users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, full_name: user.full_name }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    res.cookie('auth_token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400000 
    });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, full_name: user.full_name, email: user.email }
    });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('auth_token');
  res.json({ message: 'Logged out' });
});

app.get('/api/auth/session', async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) return res.json({ authenticated: false });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ 
      authenticated: true, 
      user: { 
        id: decoded.userId, 
        email: decoded.email, 
        full_name: decoded.full_name 
      } 
    });
  } catch (err) {
    res.json({ authenticated: false });
  }
});

app.get('/api/auth/profile', authenticate, async (req, res) => {
  try {
    const { data: user, error: userError } = await supabase
      .from('Users')
      .select('id, full_name, email')
      .eq('id', req.userId)
      .maybeSingle();

    if (userError) throw userError;
    if (!user) return res.status(404).json({ error: 'User not found' });

    let { data: details, error: detailsError } = await supabase
      .from('UserDetails')
      .select('*')
      .eq('user_id', req.userId)
      .maybeSingle();

    if (!details) {
      const { data: newDetails, error: createError } = await supabase
        .from('UserDetails')
        .insert([{ user_id: req.userId }])
        .select()
        .single();
      
      if (createError) {
        console.error('Error creating UserDetails:', createError.message);
      } else {
        details = newDetails;
      }
    }

    res.json({
      ...user,
      details: details || {}
    });
  } catch (err) {
    console.error('Profile Fetch Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to update user profile and details
app.put('/api/auth/profile', authenticate, async (req, res) => {
  const { full_name, details } = req.body;
  const now = new Date().toISOString();

  try {
    // 1. Update basic user info if provided
    if (full_name) {
      const { error: userError } = await supabase
        .from('Users')
        .update({ full_name, updated_at: now })
        .eq('id', req.userId);
      
      if (userError) {
        console.error('User Update Error:', userError.message);
        return res.status(500).json({ error: userError.message });
      }
    }

    // 2. Update user details
    if (details) {
      const { error: detailsError } = await supabase
        .from('UserDetails')
        .update({ ...details, updated_at: now })
        .eq('user_id', req.userId);

      if (detailsError) {
        console.error('Details Update Error:', detailsError.message);
        return res.status(500).json({ error: detailsError.message });
      }
    }

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Profile Update Unexpected Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
