import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,                            // Fylder hele skærmen
    backgroundColor: colors.background, // Samme baggrund som resten af appen                       // Luft omkring alt indhold
  },
  text: {
    color: colors.text,                 // Samme tekstfarve som resten af appen
    fontSize: 18,                       // Klar størrelse til overskrift
  },
});
