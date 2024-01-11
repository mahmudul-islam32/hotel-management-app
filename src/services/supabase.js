import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ncaydkathwbvhykoohly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jYXlka2F0aHdidmh5a29vaGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MDcxNDYsImV4cCI6MjAxNjA4MzE0Nn0.dt-rUmmVY5MyFor5hPOPg6WPs6QvVIK9mByKzPb7dCU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
