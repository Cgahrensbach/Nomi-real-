import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import styles from '../styles/ProfileScreenStyles';

// Skærm som viser brugerens profil – kan udvides med info, logout osv.
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader/>
      {/* Midlertidig tekst */}
      <Text style={styles.text}>Dette er din profils side</Text>
    </View>
  );
}
