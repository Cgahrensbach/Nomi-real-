import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from '../styles/PostCardStyles';

export default function PostCard({
  title,
  description,
  image,
  price,
  rating,
  latitude,
  longitude
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>

      {/* ===== ACCOUNT BAR ===== */}
      <View style={styles.accountBar}>
        <Image
          source={{
            uri: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Profile%20image%20placeholder.png?...'
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Nomi User</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* ===== HOVEDBILLEDE ===== */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* ===== TITEL & PRIS + KORTIKON ===== */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          {title} · {price}
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="map-outline" size={24} color="#5C2D91" />
        </TouchableOpacity>
      </View>

      {/* ===== BESKRIVELSE ===== */}
      <Text style={styles.description}>{description}</Text>

      {/* ===== FOOTER: RATING + HANDLINGER ===== */}
      <View style={styles.footer}>
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name={i < Math.round(rating) ? 'star' : 'star-o'}
              size={16}
              color="#FFD700"
            />
          ))}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== MODAL MED KORT ===== */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={modalStyles.map}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{ latitude, longitude }}
                title={title}
                description={description}
              />
            </MapView>
            <TouchableOpacity
              style={modalStyles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={modalStyles.closeButtonText}>Luk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden'
  },
  map: {
    flex: 1
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 8,
    borderRadius: 20
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
