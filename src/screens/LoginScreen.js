// src/screens/LoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { supabase } from '../lib/supabase';
import colors from '../styles/colors';
// Importér de opdelt styles
import styles from '../styles/LoginStyles';

/**
 * LoginScreen
 *
 * • Viser et logo (fra Supabase‐bucket) centreret øverst.
 * • Under logoet vises to inputfelter (Email, Password).
 * • Til sidst to knapper i colors.primary:
 *     - Login
 *     - “Go to Register” (navigerer til RegisterScreen)
 */
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Fejl', 'Udfyld både email og password');
      return;
    }

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      console.log('Supabase login:', { user, session, error });

      if (error) {
        Alert.alert('Login failed', error.message);
        return;
      }

      navigation.replace('LandingScreen');
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Unexpected error', 'Noget gik galt under login. Prøv igen.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo øverst */}
      <Image
        source={{
          uri:
            'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Nomi_logo_tight_cropped.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvTm9taV9sb2dvX3RpZ2h0X2Nyb3BwZWQucG5nIiwiaWF0IjoxNzQ4NzI1Njk3LCJleHAiOjQ5MDIzMjU2OTd9.-dBSZWvwePUkez4R3rZ516ycbm_3LxsEm8JUaPW356s',
        }}
        style={styles.logo}
      />

      {/* Email input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor={colors.textGray}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Password input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.textGray}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Login knap */}
      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Go to Register knap */}
      <TouchableOpacity
        style={[styles.secondaryButton, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={[styles.secondaryButtonText, { color: colors.primary }]}>
          Go to Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
