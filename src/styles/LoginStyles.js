// src/styles/LoginStyles.js

import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  // Root-container: centrer alt lodret og horisontalt, men starten rykkes mere ned
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 150,  // Øget fra 60 til 100 for at rykke ned
    alignItems: 'center',
  },

  // Logo-styling: centreret og passende størrelse
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  // Fælles styling for inputfelter
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: colors.grayDark,
  },

  // Primær knap-styling (colors.primary baggrund)
  primaryButton: {
    width: '100%',
    backgroundColor: colors.green,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Sekundær knap-styling (outline med colors.primary)
  secondaryButton: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
