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
