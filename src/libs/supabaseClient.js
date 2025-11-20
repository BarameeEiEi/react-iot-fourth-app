import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient('https://amqnzuluqtvvpaylslbm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcW56dWx1cXR2dnBheWxzbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMDU5MjAsImV4cCI6MjA3ODU4MTkyMH0.k1raDLkBDs3hhfLofpkBWGWCVKFykRUyhj2jJTVCyyw');
