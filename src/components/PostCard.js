// 1) Importér React og useState-hook, så vi kan holde styr på om modal'en er åben
import React, { useState } from 'react';

// 2) Importér de React Native-komponenter, vi skal bruge
//    - View: som en <div> til at gruppere elementer
//    - Text: til at vise tekst
//    - Image: til billeder
//    - TouchableOpacity: klikbare elementer med visuel feedback
//    - Modal: til at lægge kortet oven på UI’et
//    - StyleSheet, Dimensions: styling og skærm-mål
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';

// 3) Importér ikoner fra Expo — Ionicons til kort-ikonet, FontAwesome til stjernerne
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// 4) Importér MapView og Marker fra react-native-maps til selve kortet
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// 5) Importér dine eksisterende styles for selve kort-kortet (PostCard)
import styles from '../styles/PostCardStyles';

// 6) Definer komponenten og modtag props inkl. de nye latitude/longitude
export default function PostCard({
  title,        // Titel på posten (f.eks. "Ramen Heaven")
  description,  // Kort beskrivelse (f.eks. "Authentic Japanese Ramen")
  image,        // URL til billedet
  price,        // Prisniveau (f.eks. "$$")
  rating,       // Rating (f.eks. 4.5)
  latitude,     // Breddegrad for pin
  longitude     // Længdegrad for pin
}) {
  // 7) Lokalt state: holder styr på om kort-modal er synlig
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // 8) Overordnet container med design fra PostCardStyles
    <View style={styles.card}>

      {/* ===== ACCOUNT BAR ===== */}
      <View style={styles.accountBar}>
        {/* 9) Profilbillede, statisk placeholder */}
        <Image
          source={{
            uri: 'https://…placeholder.png'
          }}
          style={styles.profileImage}
        />
        {/* 10) Brugernavn */}
        <Text style={styles.username}>Nomi User</Text>
        {/* 11) Follow-knap */}
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* ===== HOVEDBILLEDE ===== */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* ===== TITEL & PRIS ===== */}
      <Text style={styles.title}>
        {title} · {price}
      </Text>

      {/* ===== BESKRIVELSE ===== */}
      <Text style={styles.description}>
        {description}
      </Text>

      {/* ===== FOOTER: RATING + HANDLINGER ===== */}
      <View style={styles.footer}>
        {/* 12) Stjerner dynamsk udfyldt efter rating */}
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

        {/* 13) Handlinger inkl. map-ikon til at åbne modal */}
        <View style={styles.actions}>
          {/* Kort-ikon: åbn modal når det trykkes */}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="map-outline" size={20} color="#333" />
          </TouchableOpacity>
          {/* Øvrige sociale ikoner */}
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== MODAL MED KORT ===== */}
      <Modal
        visible={modalVisible}                   // 14) Synlighed styret af state
        transparent={true}                        // 15) Semitransparent baggrund
        animationType="slide"                     // 16) Slide-op-animation
        onRequestClose={() => setModalVisible(false)} // 17) Android back-knap lukker modal
      >
        {/* 18) Halvtransparent overlay */}
        <View style={modalStyles.modalContainer}>
          {/* 19) Hvid boks med kortet */}
          <View style={modalStyles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}         // 20) Brug Google Maps SDK
              style={modalStyles.map}            // 21) Fyld boksen ud
              initialRegion={{                   // 22) Centrer kortet på valgt lokation
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              {/* 23) Pin på din valgte position */}
              <Marker
                coordinate={{ latitude, longitude }}
                title={title}                    // 24) Titel vises ved pin
                description={description}        // 25) Beskrivelse også
              />
            </MapView>
            {/* 26) Luk-knap øverst til højre */}
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

// 27) Ekstra styles til modal-delen
const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',  // mørk overlay
    justifyContent: 'center',            // centrer vertikalt
    alignItems: 'center'                 // centrer horisontalt
  },
  mapContainer: {
    width: Dimensions.get('window').width * 0.9,  // 90% af bredden
    height: Dimensions.get('window').height * 0.7,// 70% af højden
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden'
  },
  map: {
    flex: 1                                 // fylder hele boksen
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',     // semitransparent sort
    padding: 8,
    borderRadius: 20
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
