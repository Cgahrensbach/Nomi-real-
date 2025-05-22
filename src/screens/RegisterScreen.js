// Importer nødvendige moduler og hooks
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase'; // Din Supabase-klient

export default function RegisterScreen({ navigation }) {
  // 🎯 State til at gemme email, password og bekræftet password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ✅ Funktion der kører når brugeren trykker på "Register"
  const handleRegister = async () => {
    // 🔐 Tjek at alle felter er udfyldt
    if (!email || !password || !confirmPassword) {
      Alert.alert('Missing fields', 'Please fill out all fields');
      return;
    }

    // 🔐 Tjek at password og confirmPassword matcher
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match');
      return;
    }

    // 🔐 Tjek at passwordet er langt nok
    if (password.length < 6) {
      Alert.alert('Weak password', 'Password must be at least 6 characters');
      return;
    }

    try {
      // 📤 Send registreringsforespørgsel til Supabase
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      // 📟 Log svar i devtools
      console.log('Supabase register result:', { user, session, error });

      if (error) {
        // ❌ Hvis Supabase returnerer fejl
        Alert.alert('Registration failed', error.message);
        return;
      }

      if (!session) {
        // ✅ Konto oprettet, men email skal bekræftes
        Alert.alert(
          'Almost there',
          'Check your email to confirm your account.'
        );
        navigation.replace('Login'); // Navigér tilbage til login
      } else {
        // ✅ Konto oprettet og logget ind automatisk (afhænger af Supabase settings)
        Alert.alert('Welcome!', 'Your account has been created.');
        navigation.replace('LandingScreen'); // Gå direkte til appen
      }
    } catch (err) {
      // 🧱 Hvis noget andet går galt (fx netværksfejl)
      console.error('Registration error:', err);
      Alert.alert('Unexpected error', 'Something went wrong during signup.');
    }
  };

  // 📱 Layout til formularen
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

// 🎨 Styling til registreringsformular
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
});
