import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/CustomHeaderStyles'; // Stylefil med mobilvenligt layout

export default function CustomHeader() {
  const [navOpen, setNavOpen] = useState(false); // Styrer om menuen vises

  const toggleMenu = () => {
    setNavOpen(!navOpen); // Skifter mellem åben/lukket menu
  };

  return (
    <View style={styles.headerContainer}>
      {/* Øverste række: Logo + burgerikon */}
      <View style={styles.headerTop}>
        <Image
          source={{
            uri: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Nomi_logo_tight_cropped.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvTm9taV9sb2dvX3RpZ2h0X2Nyb3BwZWQucG5nIiwiaWF0IjoxNzQ3OTI5NTQyLCJleHAiOjQ5MDE1Mjk1NDJ9._QLd9Z0qiOd0MxYmcuAjKtYDH89bpBWwsHWG8Z3kVwk',
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
          <Text style={styles.menuItem}>Home</Text>
          <Text style={styles.menuItem}>About</Text>
          <Text style={styles.menuItem}>Projects</Text>

          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

