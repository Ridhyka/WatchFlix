import { createClient } from "@supabase/supabase-js";

// Your Supabase credentials
const supabaseUrl = "https://curpgfxykfjlqcovsnny.supabase.co"; // Replace with your actual Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo"; // Replace with your actual Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
