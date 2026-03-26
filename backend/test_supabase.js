require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function test() {
  console.log('Testing Supabase connection...');
  console.log('URL:', process.env.SUPABASE_URL);
  
  try {
    const { data, error } = await supabase.from('Users').select('*').limit(1);
    if (error) {
      console.error('Error fetching from Users table:', error);
    } else {
      console.log('Success! Data:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

test();
