import React, { useEffect, useState } from 'react'; // React hooks
import { NavigationContainer } from '@react-navigation/native'; // Navigation
import { supabase } from './lib/supabase'; // Supabase client
import AuthStack from './navigation/AuthStack'; // Login/Register
import AppStack from './navigation/AppStack'; // Logget-ind sider

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading

  useEffect(() => {
    // Hent session første gang appen åbner
    const session = supabase.auth.session();
    setIsLoggedIn(!!session); // true hvis session findes, ellers false

    // Lyt til login/logout events
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session); // Opdater isLoggedIn hver gang session ændrer sig
    });

    // Ryd op når komponent unmountes
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Vent med at vise noget hvis vi stadig tjekker login-status
  if (isLoggedIn === null) {
    return null; // Du kan vise en <Loader /> her hvis du vil
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}





