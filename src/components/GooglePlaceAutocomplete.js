
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import colors from '../styles/colors';


export default function GooglePlaceAutocomplete({ onPlaceSelected }) {
  return (
    <View style={styles.wrapper}>
      <GooglePlacesAutocomplete
        placeholder="Search for location" 
        fetchDetails={true} 
        onPress={(data, details = null) => {
         
          if (onPlaceSelected) {
            onPlaceSelected(data, details);
          }
        }}
        query={{
          key: 'AIzaSyAQkgjEcD1J2Gq1FQf28zMrzuNpg3jG7E8', 
          language: 'en',
        }}
        enablePoweredByContainer={false} 
        styles={{
          
          container: {
            flex: 0, 
          },
         
          textInputContainer: {
            marginHorizontal: 12,
            marginBottom: 12,
            padding: 0,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          
          textInput: {
            borderWidth: 1,
            borderColor: colors.text,      
            padding: 10,
            borderRadius: 10,
            color: colors.text,           
            fontSize: 14,
            backgroundColor: colors.background, 
            height: 40,
          },
          
          listView: {
            marginHorizontal: 20,
            borderRadius: 10,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.text,
            zIndex: 100, 
          },
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {

  },
});
