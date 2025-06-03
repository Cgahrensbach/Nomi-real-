
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomHeader from '../components/CustomHeader';



import styles from '../styles/SearchScreenStyles';


export default function SearchScreen() {
  return (
   
    <View style={styles.container}>
      <CustomHeader/>
     
      <TextInput
        placeholder="Søg efter oplevelser eller profiler" 
        placeholderTextColor={styles.inputPlaceholderColor} 
        style={styles.input} 
      />

      <Text style={styles.text}>Search results will be shown here...</Text>
    </View>
  );
}
