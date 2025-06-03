import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FAFAFA',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 12,
  },
  infoWrapper: {
    flex: 1,
    marginTop: 0,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  countSection: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },
  countBlock: {
    marginRight: 24,
    alignItems: 'center',
    paddingTop: 10,
  },
  countNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  countLabel: {
    fontSize: 12,
    color: '#666666',
  },
  bioContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.background,
  },
  bioText: {
    fontSize: 14,
    color: colors.grayText,
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    backgroundColor: colors.background,
  },
  button: {
    flex: 1,
    marginHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: colors.Primary2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
  feed: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
