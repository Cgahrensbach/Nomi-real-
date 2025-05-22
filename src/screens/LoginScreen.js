// Import React so we can define a functional component
// Import useState so we can track and update values like email and password as the user types
import React, { useState } from 'react';

// Import core UI components from React Native
// - View is used to wrap and position other elements
// - TextInput is the default input field for text (like email and password)
// - Button is a pressable button
// - Alert is used to show popup messages (errors or success)
// - StyleSheet helps define styles in a reusable way
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';


// Import your configured Supabase client to interact with the backend (login, register, etc.)
import { supabase } from '../lib/supabase';

// Define and export your login screen component
// This is the screen that will let users log in using their Supabase credentials
export default function LoginScreen({ navigation }) {
  // Create a state variable to store the user's email input
  // `setEmail` is the function used to update that value when the user types
  const [email, setEmail] = useState('');

  // Create a state variable to store the user's password input
  // `setPassword` will be called each time the user types into the password field
  const [password, setPassword] = useState('');

  // Define a function to handle what happens when the user presses the login button
  const handleLogin = async () => {
    console.log('Login button pressed');
    // This function sends a login request to Supabase using the email and password entered by the user
     // 🔐 Validering: Tjek om felterne er udfyldt
    if (!email || !password ) {
      Alert.alert('Fejl', 'Udfyld både email og password');
      return; // Stop login-forsøget
     }

  // 🔐 Validering: Sørg for at felterne er udfyldt
  if (!email || !password) {
    Alert.alert('Fejl', 'Udfyld både email og password');
    return;
  }

  try {
    // 🔑 Forsøg at logge brugeren ind med Supabase
     const { user, session, error } = await supabase.auth.signIn({
  email,
  password,
});

    // 📟 Udskriv resultatet i konsollen for at se hvad Supabase returnerer
    console.log('Supabase login result:', { user, session, error }); // ✅ nu logger vi det rigtige




    if (error) {
      // ❌ Supabase afviser login (forkert kode, bruger ikke bekræftet osv.)
      Alert.alert('Login failed', error.message);
      return;
    }

    // ✅ Alt gik godt – send brugeren videre
    Alert.alert('Login successful');
    if (error) {
  Alert.alert('Login failed', error.message);
  return;
}

Alert.alert('Login successful');

  } catch (err) {
    // 🧱 Der skete en uventet fejl (fx netværk)
    console.error('Login error:', err);
    Alert.alert('Unexpected error', 'Something went wrong during login');
  }
};
  // Return the layout/UI for this screen
  return (
    <View style={styles.container}>
      {/* First input field for email */}
      {/* `placeholder` is the light gray hint text inside the field */}
      {/* `value` is what’s currently typed into the field (linked to the email state) */}
      {/* `onChangeText` runs every time the user types, and updates the state */}
      {/* `autoCapitalize="none"` disables automatic capital letters (which we don’t want in email fields) */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      {/* Second input field for password */}
      {/* Everything works the same as the email field, but we also use `secureTextEntry` to hide the text (dots instead of characters) */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* Login button */}
      {/* When pressed, it calls the `handleLogin` function defined above */}
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="No account? Register"
        onPress={() => navigation.navigate('Register')}
        />
      </View>
    );
  }

// Define styles used in this screen
// These are applied by passing them to the `style` prop of components above
const styles = StyleSheet.create({
  container: {
    padding: 20,     // Adds space inside the container so content isn’t touching the edges
    marginTop: 60,   // Pushes the whole form down a bit so it's not stuck to the top of the screen
  },
  input: {
    borderWidth: 1,         // Adds a border so the input field is clearly visible
    borderColor: '#ccc',    // Sets the border color to a soft gray
    padding: 10,            // Adds space inside the input field
    marginBottom: 12,       // Adds space below each input to avoid overlap
    borderRadius: 4,        // Slightly rounds the corners of the input field
  },
});
