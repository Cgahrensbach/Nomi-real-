import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background, 
    flexGrow: 1,
  },

  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginHorizontal: 20, 
    marginTop: 20,         
    marginBottom: 10,
  },

  previewImage: {
    width: Dimensions.get('window').width / 3 - 30,
    height: 100,
    borderRadius: 8,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.text,
    padding: 10,
    borderRadius: 10,
    color: colors.text,
    marginHorizontal: 20,
    marginBottom: 12,
  },

  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    marginHorizontal: 20,
  },

  ratingRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  star: {
    marginRight: 5,
  },

  postButton: {
    backgroundColor: colors.Primary2,
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },

  archiveButton: {
    backgroundColor: colors.settings,
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  imageWrapper: {
  position: 'relative',
  marginRight: 12,
  marginBottom: 12,
},

deleteButton: {
  position: 'absolute',
  top: 4,
  right: 4,
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderRadius: 20,
  padding: 2,
},

placeholderBox: {
  height: 100,
  width: '100%',
  borderWidth: 1,
  borderColor: colors.settings,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 15,
},

placeholderText: {
  color: colors.settings,
  fontStyle: 'italic',
},

});
