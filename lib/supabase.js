import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://quiafeednqnwdjrfmhcj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aWFmZWVkbnFud2RqcmZtaGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NzU1ODgsImV4cCI6MjEwMjU1MTU4OH0.9Tz6cgAtYgZVhawL6u_8uy0rQQIJIcNb-P1aePWcWZs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
