// src/styles/LandingScreenStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors'; 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  feed: {
    padding: 10,
  }
});