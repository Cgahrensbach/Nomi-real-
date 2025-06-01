import { StyleSheet } from 'react-native';


// 📦 Eksportér dine globale styles
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
  header1: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
  header2: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '600',
  },
  header3: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '500',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
