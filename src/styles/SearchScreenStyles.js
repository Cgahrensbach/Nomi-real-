import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,                            // Fylder hele skærmen
    backgroundColor: colors.background, // Baggrundsfarve defineret globalt                        // Afstand hele vejen rundt
  },
  input: {
    borderWidth: 1,                      // Giver feltet en kant
    borderColor: colors.text,            // Bruger tekstfarven som kantfarve
    padding: 10,                         // Indvendig afstand i inputfeltet
    borderRadius: 8,                    // Afrunder kanterne
    marginBottom: 12,                   // Lidt luft under input
    color: colors.text,                 // Gør teksten inde i feltet synlig
  },
  inputPlaceholderColor: colors.text,   // Brugt til placeholder-farve i komponent
  text: {
    color: colors.text,                 // Tekstfarve
    fontSize: 16,                       // Standard brødtekst-størrelse
  },
  textInput: {
    margin: 15,
  },
});
