// src/navigation/RootNavigator.js

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; // Din Supabase-klient
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { ActivityIndicator, View } from 'react-native';

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);       // Viser loading, mens vi henter session
  const [session, setSession] = useState(null);           // Gemmer session

  useEffect(() => {
    // 🔁 Når app starter, henter vi evt. gemt session
    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setSession(data?.session ?? null);
      setIsLoading(false);
    };

    loadSession();

    // 📡 Lyt til login/logout events fra Supabase
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession); // Opdater state
    });

    // 🧹 Ryd op når komponent unmountes
    return () => {
      listener.subscription?.unsubscribe();
    };
  }, []);

  // ⏳ Vent mens vi tjekker om der er en session
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🔀 Returner den relevante stack
  return session ? <AppStack /> : <AuthStack />;
}
