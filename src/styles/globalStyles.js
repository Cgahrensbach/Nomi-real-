import { StyleSheet } from 'react-native';

// 🎨 Definér farver ét sted så du kan genbruge dem
const colors = {
  background: '#FF4C4C',  // ← baggrundsfarve
  text: '#F9F9F9',        // ← tekstfarve
  primary: '#FF7A00',     // ← primær knap
  secondary: '#5C2D91',   // ← sekundær knap
  danger: '#FF4C4C',      // ← log ud knap
  white: '#FFFFFF',
};

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
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
    paddingVertical: 12, 
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

