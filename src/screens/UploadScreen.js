import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import styles from '../styles/UploadScreenStyles';

// Skærm til at uploade nye madoplevelser – her vil en formular komme senere
export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader/>
      {/* Midlertidig tekst */}
      <Text style={styles.text}>Her kan du uploade et nyt opslag</Text>
    </View>
  );
}
