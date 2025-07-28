import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wmctvlwmvxxzucowayga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtY3R2bHdtdnh4enVjb3dheWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzU5NzksImV4cCI6MjA2OTExMTk3OX0.dgY7Bk8d2_GsVsVcjucuRtVCo7GJSLgPfq8o3z7ARXs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
