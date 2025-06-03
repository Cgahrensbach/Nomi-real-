import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default function MapScreen() {
  return (
   
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 55.6761,      
          longitude: 12.5683,    
          latitudeDelta: 0.05,    
          longitudeDelta: 0.05,
        }}
      >
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


const styles = StyleSheet.create({
  container: {
    flex: 1,                            
    justifyContent: 'center',          
    alignItems: 'center',              
  },
  map: {
    width: Dimensions.get('window').width,   
    height: Dimensions.get('window').height, 
  },
});
