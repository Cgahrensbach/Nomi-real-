// Importerer React for at kunne oprette funktionelle komponenter
import React from 'react';

// Importerer View, Text og TextInput til layout og inputfelter
import { View, Text, TextInput } from 'react-native';
import CustomHeader from '../components/CustomHeader';
// Importerer stylesheetet specifikt til denne skærm
import styles from '../styles/SearchScreenStyles';

// Komponent til søgeskærmen hvor brugeren kan søge efter opslag eller profiler
export default function SearchScreen() {
  return (
    // Wrapper-view for hele skærmens layout
    <View style={styles.container}>
      <CustomHeader/>
      {/* Søgefelt hvor brugeren kan skrive */}
      <TextInput
        placeholder="Søg efter oplevelser eller profiler" // Hjælpetekst i inputfelt
        placeholderTextColor={styles.inputPlaceholderColor} // Farve til hjælpetekst
        style={styles.input} // Bruger stil fra stylesheet
      />

      {/* Midlertidig tekst for at vise hvor søgeresultater kommer */}
      <Text style={styles.text}>Search results will be shown here...</Text>
    </View>
  );
}
