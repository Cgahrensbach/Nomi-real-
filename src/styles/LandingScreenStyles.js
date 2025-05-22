// src/styles/LandingScreenStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors'; // 👈 korrekt import

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // 🎯 virker nu
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontSize: 18,
  },
});