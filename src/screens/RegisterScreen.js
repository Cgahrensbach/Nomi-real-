// src/screens/RegisterScreen.js

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { supabase } from '../lib/supabase';
import colors from '../styles/colors';
// Importér de opdelt styles
import styles from '../styles/registerStyles';

/**
 * RegisterScreen
 *
 * • Viser et logo (fra Supabase-bucket) centreret øverst.
 * • Under logoet vises tre inputfelter (Email, Password, Confirm Password).
 * • To knapper i colors.primary:
 *     - Register
 *     - “Back to Login” (navigerer til LoginScreen)
 */
export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Fejl', 'Udfyld alle felter');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Fejl', 'Password og confirm password matcher ikke');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Fejl', 'Password skal være mindst 6 karakterer');
      return;
    }

    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log('Supabase register:', { user, session, error });

      if (error) {
        Alert.alert('Registration failed', error.message);
        return;
      }

      if (!session) {
        Alert.alert(
          'Tjek din email',
          'Vi har sendt en bekræftelsesmail. Bekræft din konto for at logge ind.'
        );
        navigation.replace('Login');
      } else {
        Alert.alert('Velkommen!', 'Din konto er oprettet.');
        navigation.replace('LandingScreen');
      }
    } catch (err) {
      console.error('Registration error:', err);
      Alert.alert('Uventet fejl', 'Noget gik galt under registrering.');
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

      {/* Confirm Password input */}
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={colors.textGray}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Register knap */}
      <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
        <Text style={styles.primaryButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Back to Login knap */}
      <TouchableOpacity
        style={[styles.secondaryButton, { borderColor: colors.Primary1 }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={[styles.secondaryButtonText, { color: colors.Primary1 }]}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
