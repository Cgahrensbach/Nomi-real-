import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,                            // Fylder hele skærmen
    backgroundColor: colors.background, // Baggrundsfarve fra global farvefil
  },
  text: {
    color: colors.text,                 // Bruger global tekstfarve
    fontSize: 18,                       // Let forstørret tekst for tydelighed
  },
});
