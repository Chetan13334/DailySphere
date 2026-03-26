require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function test() {
  const userId = '997eb1b4-a542-4b6c-9de7-359fed743b34'; // Use the user's ID
  
  console.log('Testing real update with new Date()...');
  const details = { job_title: 'Test Job' };
  
  try {
    const { error } = await supabase
      .from('UserDetails')
      .update({ ...details, updated_at: new Date() })
      .eq('user_id', userId);
    
    if (error) {
       console.error('Update with new Date() Failed:', error.message);
    } else {
       console.log('Update with new Date() Passed!');
    }

    const { error: errorIso } = await supabase
      .from('UserDetails')
      .update({ ...details, updated_at: new Date().toISOString() })
      .eq('user_id', userId);
    
    if (errorIso) {
       console.error('Update with ISO String Failed:', errorIso.message);
    } else {
       console.log('Update with ISO String Passed!');
    }

  } catch (err) {
    console.error('Catch error:', err.message);
  }
}

test();
