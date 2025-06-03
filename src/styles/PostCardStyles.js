import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  description: {
    fontSize: 14,
    color: colors.grayText,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  accountBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  followButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: colors.Primary2,
  },
  followText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 6,
  },
});
