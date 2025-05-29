import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'; // Hentes for sikkerhedens skyld
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; // Google search
import CustomHeader from '../components/CustomHeader';
import styles from '../styles/UploadScreenStyles';

export default function UploadScreen() {
  const [images, setImages] = useState([]);              // Valgte billeder
  const [description, setDescription] = useState('');     // Beskrivelse
  const [rating, setRating] = useState(0);                // Valgt rating

  // useEffect henter tilladelse til kamera og bibliotek
  useEffect(() => {
    (async () => {
      await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  // Funktion: vælg billede fra galleri
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0]]);
    }
  };

  // Funktion: tag billede med kamera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0]]);
    }
  };

  // Funktion: fjern billede ved klik
  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader />

      {/* Billedsektion */}
      <View style={styles.imagePreviewContainer}>
        {images.length === 0 ? (
          <View style={styles.placeholderBox}>
            <Text style={styles.placeholderText}>No images selected</Text>
          </View>
        ) : (
          images.map((img, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: img.uri }} style={styles.previewImage} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeImage(index)}
              >
                <Ionicons name="close-circle" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      {/* Billed-knapper */}
      <View style={styles.buttonRow}>
        <Button title="Pick Image" onPress={pickImage} />
        <Button title="Take Photo" onPress={takePhoto} />
      </View>

      {/* Beskrivelse */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Write a description"
        style={styles.input}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      {/* Tags – placeholder */}
      <Text style={styles.label}>Tags (coming soon)</Text>
      <TextInput placeholder="Food Tags" style={styles.input} />

      {/* Adresse søgning via Google Places */}
      <Text style={styles.label}>Location</Text>
      <GooglePlacesAutocomplete
        placeholder="Search for location"
        onPress={(data, details = null) => {
          console.log(data, details); // Her får du bl.a. lat/lng
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyDzPfFVZG0To-aXeaemDIeisx8IcVyq0JQ', // ← skift denne ud
          language: 'en',
        }}
        styles={{
          textInput: styles.input,
          container: { marginHorizontal: 20, marginBottom: 15 },
        }}
      />

      {/* Rating */}
      <Text style={styles.label}>Rating:</Text>
      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity key={num} onPress={() => setRating(num)}>
            <FontAwesome
              name={num <= rating ? 'star' : 'star-o'}
              size={30}
              color="#FFD700"
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Post & Archive knapper */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.archiveButton}>
          <Text style={styles.buttonText}>Archive</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
