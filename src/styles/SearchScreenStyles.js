import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 25,  // Luft fra siderne
    marginTop: 25,         // Luft oppefra
    color: colors.text,
  },
  inputPlaceholderColor: colors.text,
  text: {
    color: colors.text,
    fontSize: 16,
    marginHorizontal: 25,  // Matcher input's venstre og højre margin
    marginTop: 25,         // Luft nedad fra inputfeltet
  },
  textInput: {
    margin: 2,
  },
});

