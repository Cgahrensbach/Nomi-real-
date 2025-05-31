// src/styles/ProfileScreenStyles.js

import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  // Root-container: fylder hele skærmen, hvid baggrund
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Profil-sektion: avatar og infoWrapper (navn + counts)
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FAFAFA',
    // Fjernet borderBottom for at undgå streg over bio
  },

  // Avatar (80×80 cirkel)
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 12,
  },

  // Wrapper til navn + countSection
  infoWrapper: {
    flex: 1,
    marginTop: 0,
  },

  // Brugernavn
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },

  // Count-sektion (Post/Followers/Following) – øget spacing
  countSection: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },

  // Hvert count-block (antal + label) – øget marginRight
  countBlock: {
    marginRight: 24,
    alignItems: 'center',
    paddingTop: 10,
  },

  // Antal (tal)
  countNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  // Label (Posts/Followers/Following)
  countLabel: {
    fontSize: 12,
    color: '#666666',
  },

  // Container til bio (nyt afsnit under avatar-sektionen)
  bioContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#FAFAFA',
  },

  // Bio-tekst
  bioText: {
    fontSize: 14,
    color: '#666666',
    flexWrap: 'wrap',
  },

  // Knappesektion (under bio)
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    backgroundColor: colors.background,
  },

  // Enkelt knap
  button: {
    flex: 1,
    marginHorizontal: 11,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 6,
    alignItems: 'center',
  },

  // Tekst i knap
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Tom liste (hvis ingen posts)
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  // Tekst i tom liste
  emptyText: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
  },

  // Genbrug evt. feed-padding fra LandingScreen
  feed: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});
