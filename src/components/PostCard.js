// 1) Importér React og useState-hook, så vi kan holde styr på om modal'en er åben
import React, { useState } from 'react';

// 2) Importér nødvendige komponenter fra React Native
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';

// 3) Importér ikoner fra Expo — Ionicons til kort-ikonet, FontAwesome til stjerner
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// 4) Importér MapView og Marker fra react-native-maps til kortet
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// 5) Importér de styles, der er defineret til PostCard-komponenten
import styles from '../styles/PostCardStyles';

// 6) Definér PostCard-komponenten og modtag alle nødvendige props
export default function PostCard({
  title,        // Titel på posten (f.eks. "Ramen Heaven")
  description,  // Beskrivelsen af madoplevelsen
  image,        // Billede-URL til posten
  price,        // Prisniveau (f.eks. "$$")
  rating,       // Rating ud af 5 (f.eks. 4.5)
  latitude,     // Breddegrad til pin på kortet
  longitude     // Længdegrad til pin på kortet
}) {
  // 7) Brug useState til at holde styr på om kort-modal'en er synlig
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // 8) Hoved-container for hele postkortet
    <View style={styles.card}>

      {/* ===== ACCOUNT BAR ===== */}
      <View style={styles.accountBar}>
        {/* 9) Profilbillede — placeholder-ikon for nu */}
        <Image
          source={{
            uri: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Profile%20image%20placeholder.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvUHJvZmlsZSBpbWFnZSBwbGFjZWhvbGRlci5wbmciLCJpYXQiOjE3NTAxMDE3MjEsImV4cCI6NDkwMzcwMTcyMX0.m7yPYgaVjJnffwWWisYEvbGl6j5esqk9LxaZsWmMq-U'
          }}
          style={styles.profileImage}
        />
        {/* 10) Brugernavn (statisk for nu) */}
        <Text style={styles.username}>Nomi User</Text>
        {/* 11) Follow-knap i højre side */}
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* ===== BILLEDE ===== */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* ===== TITEL + PRIS + MAP-IKON ===== */}
      {/* Titel og pris vises i én linje til venstre, map-ikon til højre */}
      <View style={styles.titleRow}>
        {/* Titel og pris skrevet i samme tekstlinje */}
        <Text style={styles.title}>
          {title} · {price}
        </Text>

        {/* Kort-ikon som åbner modal med kort */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="map-outline" size={24} color="#5C2D91" />
        </TouchableOpacity>
      </View>

      {/* ===== BESKRIVELSE ===== */}
      <Text style={styles.description}>
        {description}
      </Text>

      {/* ===== FOOTER: STJERNER OG HANDLINGER ===== */}
      <View style={styles.footer}>
        {/* 12) Dynamisk visning af rating som stjerner */}
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

        {/* 13) Sociale ikoner: like, kommentar, gem */}
        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="send-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== MODAL: KORT VISNING ===== */}
      <Modal
        visible={modalVisible} // Modal vises hvis state er true
        transparent={true} // Gør baggrunden mørk
        animationType="slide" // Modal glider op fra bunden
        onRequestClose={() => setModalVisible(false)} // Android-back-knap lukker modal
      >
        {/* Mørk overlay baggrund */}
        <View style={modalStyles.modalContainer}>
          {/* Selve hvid boks med kortet */}
          <View style={modalStyles.mapContainer}>
            {/* Kortet vises med initial position sat ud fra props */}
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
              {/* Marker/pin på kortet baseret på position */}
              <Marker
                coordinate={{ latitude, longitude }}
                title={title}
                description={description}
              />
            </MapView>

            {/* Luk-knap øverst til højre i kortet */}
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

// 14) Ekstra styles specifikt til kort-modal'en
const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semitransparent mørk baggrund
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapContainer: {
    width: Dimensions.get('window').width * 0.9, // 90% bredde af skærmen
    height: Dimensions.get('window').height * 0.7, // 70% højde af skærmen
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden'
  },
  map: {
    flex: 1 // Fylder hele containeren
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Sort baggrund med transparens
    padding: 8,
    borderRadius: 20
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
