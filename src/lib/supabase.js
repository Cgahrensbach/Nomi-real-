import { AppState } from 'react-native'; // To detect if app is active/inactive
import 'react-native-url-polyfill/auto'; // Required for Supabase to work in React Native
import AsyncStorage from '@react-native-async-storage/async-storage'; // For session persistence
import { createClient } from '@supabase/supabase-js'; // Main Supabase client tools

// Replace with your actual Supabase credentials
const SUPABASE_URL = 'https://kalmqrdskgtwoiroqnez.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbG1xcmRza2d0d29pcm9xbmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NDcyODYsImV4cCI6MjA2MzIyMzI4Nn0.5rpFEurZux4nu2JLN7l2eFBlH2mTcnnFTorFyRNbtZU';

// Til debug: udskriv hvilken URL og key du faktisk bruger i appen
console.log('Supabase config:');
console.log('URL:', SUPABASE_URL);
console.log('KEY (short):', SUPABASE_ANON_KEY.slice(0, 15)); // Vis kun første del af keyen
// Create and export the Supabase client instance
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    storage: AsyncStorage,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

