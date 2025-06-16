import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';
import styles from '../styles/CustomHeaderStyles'; 
import colors from '../styles/colors';

export default function CustomHeader() {
  const [navOpen, setNavOpen] = useState(false); 

  const toggleMenu = () => {
    setNavOpen(!navOpen); 
  };

  const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();  
    if (error) {
      console.error('Logout error:', error.message);
      return;
    }
    navigation.replace('LoginScreen');  
  } catch (err) {
    console.error('Unexpected logout error:', err);
  }
};
  return (
    <View style={styles.headerContainer}>
      {/* Øverste række: Logo + burgerikon */}
      <View style={styles.headerTop}>
        <Image
          source={{
            uri: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Nomi_logo_tight_cropped.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTm9taV9sb2dvX3RpZ2h0X2Nyb3BwZWQucG5nIiwiaWF0IjoxNzUwMTAyMDg0LCJleHAiOjQ5MDM3MDIwODR9.EOVLDd4T48XK12xy-9F0WEnLJ1mRrBRvhrKg9FElXK0',
          }}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity onPress={toggleMenu} style={styles.iconWrapper}>
          <Ionicons
            name={navOpen ? 'close' : 'menu'}
            size={32}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown-menu vises kun hvis navOpen er true */}
      {navOpen && (
        <View style={styles.menu}>
        
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.logoutText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

