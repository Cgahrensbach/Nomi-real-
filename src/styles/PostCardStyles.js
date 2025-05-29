// Importér StyleSheet fra React Native og globale farver
import { StyleSheet } from 'react-native';
import colors from './colors'; // Importér farvefil med ensartet design

export default StyleSheet.create({
  // Overordnet kort – vises som post i feedet
  card: {
    backgroundColor: '#fff', // Hvid baggrund på kortet
    borderRadius: 8, // Afrundede hjørner
    marginBottom: 16, // Luft under hvert kort
    overflow: 'hidden', // Skjul indhold der går udenfor kanten (især billede)
    elevation: 2, // Skyggeeffekt (Android)
  },
  // Post-billede
  image: {
    width: '100%', // Fylder hele kortets bredde
    height: 160, // Fast højde på billedet
  },
  // Titel og pris (øverste tekstdel)
  title: {
    fontSize: 18,
    fontWeight: '600', // Halvfed skrift
    color: colors.text, // Farve defineret i farvefilen
  },
  // Beskrivelse af posten
  description: {
    fontSize: 14,
    color: '#666', // Lidt lysere grå for kontrast
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  // Nederste sektion med stjerner og ikoner
  footer: {
    flexDirection: 'row', // Horisontalt layout
    justifyContent: 'space-between', // Placerer stjerner til venstre og ikoner til højre
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 12,
  },
  // Container til stjerner
  stars: {
    flexDirection: 'row', // Horisontalt layout af stjerner
  },
  // Container til interaktionsikoner
  actions: {
    flexDirection: 'row',
    gap: 12, // Tilføjer mellemrum mellem ikoner (kræver nyere version af React Native)
  },
   // ------------------------ ACCOUNT BAR ------------------------

  // Øverste linje med profil og follow-knap
  accountBar: {
    flexDirection: 'row',            // Vandret layout
    alignItems: 'center',            // Centrer lodret
    justifyContent: 'space-between', // Sørger for at follow-knappen ligger helt til højre
    padding: 8,
  },

  // Profilbillede – skal vises som cirkel
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18, // Halvdelen af width/height = perfekt cirkel
    marginRight: 8,
  },

  // Brugernavn
  username: {
    fontSize: 16,
    color: '#333',
    flex: 1, // Gør feltet fleksibelt så follow-knappen skubbes mod højre
  },

  // "Follow"-knap container
  followButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: colors.secondary, // Grøn farve for visuel handling
  },

  // Tekst inde i "Follow"-knap
  followText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
titleRow: {
  flexDirection: 'row',           // Sætter tekst og ikon på samme linje
  justifyContent: 'space-between',// Skubber dem ud i hver ende
  alignItems: 'center',           // Sørger for vertikal alignment
  marginTop: 8,
  paddingHorizontal: 8,
}


});
