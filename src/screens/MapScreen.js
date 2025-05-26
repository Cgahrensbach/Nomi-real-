// 1) Henter React, så vi kan arbejde med JSX og komponenter
import React from 'react';

// 2) Henter View fra React Native som container
import { View, StyleSheet, Dimensions } from 'react-native';

// 3) Henter MapView og nødvendige helper-const fra react-native-maps
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// 4) Opretter en funktionel komponent, som vi senere kan tilføje til navigation eller rende­re direkte
export default function MapScreen() {
  return (
    // 5) <View> er en simpel container, vi bruger for at styre layout og undgå at kortet går ud over kanten
    <View style={styles.container}>
      {/* 6) Selve kort-komponenten */}
      <MapView
        // 7) Sørger for at bruge Google Maps SDK (især på iOS)
        provider={PROVIDER_GOOGLE}

        // 8) Style, så kortet fylder hele containeren
        style={styles.map}

        // 9) InitialRegion: startposition og zoom
        initialRegion={{
          latitude: 55.6761,      // Breddegrad (København)
          longitude: 12.5683,     // Længdegrad (København)
          latitudeDelta: 0.05,    // Hvor “tæt” kortet viser: lavere = tættere zoom
          longitudeDelta: 0.05,
        }}
      >
        {/* 10) Marker: en nål, der viser et punkt på kortet */}
        <Marker
          coordinate={{
            latitude: 55.6761,
            longitude: 12.5683,
          }}
          title="Her er jeg!"
          description="Centralt i København"
        />
      </MapView>
    </View>
  );
}

// 11) StyleSheet definerer styling uden inline-styles for bedre ydeevne
const styles = StyleSheet.create({
  container: {
    flex: 1,                            // Fylder hele tilgængelige plads
    justifyContent: 'center',          // Centrerer vertikalt (for en pæn effekt)
    alignItems: 'center',              // Centrerer horisontalt
  },
  map: {
    width: Dimensions.get('window').width,   // Sætter kort-bredde = skærmbredde
    height: Dimensions.get('window').height, // Sætter kort-højde = skærmhøjde
  },
});
