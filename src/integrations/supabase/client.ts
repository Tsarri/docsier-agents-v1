import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tekrigdsgtgooycddkbc.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRla3JpZ2RzZ3Rnb295Y2Rka2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NDU2MzMsImV4cCI6MjA3OTMyMTYzM30.1Hbur4si39hJizLKmCBgcwIjB27n_I-Ml6B_tNwUHSM';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
