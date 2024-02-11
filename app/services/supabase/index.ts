import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabase: SupabaseClient;

function getSupabase() {
  if (!supabase) {
    const supabaseUrl = "https://zjfqzbauxtwxgaseajuf.supabase.co";
    const supabaseKey = process.env.SUPABASE_KEY;
    supabase = createClient(supabaseUrl, supabaseKey!);
  }

  return supabase;
}

export { getSupabase };
