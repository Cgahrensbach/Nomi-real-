// Importér nødvendige moduler fra React og React Native
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Importér GooglePlacesAutocomplete-komponenten fra biblioteket
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Importér farver fra din eksisterende stilfil
import colors from '../styles/colors';

// Funktionel komponent til adresse-søgning via Google Places API
export default function GooglePlaceAutocomplete({ onPlaceSelected }) {
  return (
    <View style={styles.wrapper}>
      <GooglePlacesAutocomplete
        placeholder="Search for location" // Tekst der vises i input-feltet
        fetchDetails={true} // Angiver at vi ønsker detaljeret info, inkl. lat/lng
        onPress={(data, details = null) => {
          // Når brugeren vælger en placering, kaldes denne funktion
          if (onPlaceSelected) {
            onPlaceSelected(data, details);
          }
        }}
        query={{
          key: 'YOUR_GOOGLE_API_KEY', // ← Udskift med din Google API nøgle
          language: 'en',
        }}
        enablePoweredByContainer={false} // Fjerner “Powered by Google”-label
        styles={{
          // Overordnet container
          container: {
            flex: 0, // Undgå at Google-komponenten strækker sig vertikalt
          },
          // Container for selve input-feltet
          textInputContainer: {
            marginHorizontal: 12,
            marginBottom: 15,
            padding: 0,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          // Selve input-feltet
          textInput: {
            borderWidth: 1,
            borderColor: colors.text,      // Brug samme farve som dine andre inputs
            padding: 10,
            borderRadius: 10,
            color: colors.text,            // Match tekstfarve
            fontSize: 15,
            backgroundColor: colors.background, // Fjern grå baggrund
            height: 40,
          },
          // Forslagsliste som vises ved søgning
          listView: {
            marginHorizontal: 20,
            borderRadius: 10,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.text,
            zIndex: 100, // Sørger for at den ligger ovenpå andet
          },
        }}
      />
    </View>
  );
}

// Simpel wrapper-style, kan tilføje marginTop hvis nødvendigt
const styles = StyleSheet.create({
  wrapper: {
    // Ingen margin eller padding for nu
  },
});
