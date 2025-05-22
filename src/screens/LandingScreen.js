import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import styles from '../styles/LandingScreenStyles'; // 👈 importerede styles korrekt

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.text}>Hejsa</Text>
    </View>
  );
}