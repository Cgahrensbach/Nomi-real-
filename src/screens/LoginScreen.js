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


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both e-mail and password');
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
      Alert.alert('Unexpected error', 'Something went wrong. Try again!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo øverst */}
      <Image
        source={{
          uri:
            'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Nomi_logo_tight_cropped.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTm9taV9sb2dvX3RpZ2h0X2Nyb3BwZWQucG5nIiwiaWF0IjoxNzUwMTAxODM4LCJleHAiOjQ5MDM3MDE4Mzh9.kEZmUHI8Y5MnIhu2CkM4Prs4yJUKxnnv3XXT_UAcI9g',
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
        style={[styles.secondaryButton, { borderColor: colors.Primary1 }]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={[styles.secondaryButtonText, { color: colors.Primary1 }]}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
