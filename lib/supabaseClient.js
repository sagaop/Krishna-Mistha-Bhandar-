// lib/supabaseClient.js
// Single shared Supabase client used by both the storefront and the admin GUI.
// Requires the @supabase/supabase-js package:
//   npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly in dev so you notice a missing .env.local right away.
  console.warn(
    'Supabase env vars are missing. Did you create .env.local from .env.local.example?'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
