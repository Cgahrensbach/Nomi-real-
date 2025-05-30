import { StyleSheet, Platform, StatusBar } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: colors.green,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 12 : 48, // 🔽 Skub hele headeren under statusbar
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 70,     // 🔼 Større logo
    height: 40,
  },
  iconWrapper: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  menu: {
    marginTop: 12,
    backgroundColor: colors.green,
    padding: 12,
    borderRadius: 8,
  },
  menuItem: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
  },
  contactButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  contactText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: colors.danger,
    borderRadius: 10,

  },
  logoutText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  settingsButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: colors.settings,
    borderRadius: 10,

  },
});

export default styles;
