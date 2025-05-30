import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import GooglePlaceAutocomplete from '../components/GooglePlaceAutocomplete'; // Importér custom komponent
import CustomHeader from '../components/CustomHeader';
import styles from '../styles/UploadScreenStyles';

export default function UploadScreen() {
  const [images, setImages] = useState([]);           // Valgte billeder
  const [description, setDescription] = useState(''); // Beskrivelse
  const [rating, setRating] = useState(0);            // Stjerner
  const [locationData, setLocationData] = useState(null); // Lat/Lng fra Google

  useEffect(() => {
    // Hent tilladelser ved mount
    (async () => {
      await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  // Vælg billede fra galleri
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0]]);
    }
  };

  // Tag billede med kamera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({ quality: 0.7 });

    if (!result.canceled) {
      setImages([...images, result.assets[0]]);
    }
  };

  // Fjern billede
  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header øverst */}
          <CustomHeader />

          {/* Billedvisning */}
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

          {/* Knapper til at vælge billeder */}
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

          {/* Lokationssøgning – NU placeret korrekt efter tags */}
          <Text style={styles.label}>Location</Text>
          <GooglePlaceAutocomplete
            onPlaceSelected={(data, details) => {
              console.log('Data:', data);
              console.log('Lat/Lng:', details?.geometry?.location);
              setLocationData(details?.geometry?.location);
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

          {/* Post og Archive knapper */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.archiveButton}>
              <Text style={styles.buttonText}>Archive</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
