import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bsyftdeqsvzzxgzqdzwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzeWZ0ZGVxc3Z6enhnenFkendyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyODQwMDEsImV4cCI6MjAwMjg2MDAwMX0.TF9yQGklQ9tEx48ZL5tuAEHp3J3OBGpdZRYcfWTKqws";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
