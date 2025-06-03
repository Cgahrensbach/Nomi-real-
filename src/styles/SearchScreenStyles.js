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
    marginHorizontal: 25,  
    marginTop: 25,         
    color: colors.text,
  },
  inputPlaceholderColor: colors.text,
  text: {
    color: colors.text,
    fontSize: 14,
    marginHorizontal: 25,  
    marginTop: 25,         
  },
  textInput: {
    margin: 2,
  },
});

