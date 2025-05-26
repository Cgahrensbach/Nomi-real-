// Importér React for at kunne oprette en funktionel komponent
import React from 'react';

// Importér nødvendige komponenter fra React Native
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Importér ikoner fra Expo's Ionicons- og FontAwesome-bibliotek
// Ionicons bruges til social-ikoner (like, kommentar, send, gem)
// FontAwesome bruges til at vise stjerner (rating)
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Importér stilarket til PostCard-komponenten
import styles from '../styles/PostCardStyles';

// Funktionel komponent der repræsenterer et enkelt opslag/post i feedet
// Props som title, description osv. gør komponenten genanvendelig med forskellige data
export default function PostCard({ title, description, image, price, rating }) {
  return (
    // Overordnet container for hele post-kortet
    <View style={styles.card}>

      {/* --------------------------- ACCOUNT BAR --------------------------- */}
      {/* Øverste sektion: viser brugerkonto-info som profilbillede, brugernavn og follow-knap */}
      <View style={styles.accountBar}>
        {/* Cirkulært profilbillede til venstre */}
        <Image
          source={{ uri: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Profile%20image%20placeholder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvUHJvZmlsZSBpbWFnZSBwbGFjZWhvbGRlci5wbmciLCJpYXQiOjE3NDgwMTg5ODksImV4cCI6NDkwMTYxODk4OX0.MkjIJySFZ5NLIlOsAmS9xQ2QdmOwWxJCrTPqadMJ5Qg' }} // Dummy profilbillede
          style={styles.profileImage}
        />

        {/* Brugernavn ved siden af billedet */}
        <Text style={styles.username}>Nomi User</Text>

        {/* Follow-knap placeret til højre i linjen */}
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* --------------------------- BILLEDE --------------------------- */}
      {/* Midtersektion: billede der viser madoplevelsen */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* --------------------------- TITEL OG BESKRIVELSE --------------------------- */}
      {/* Titel og prisniveau i én linje */}
      <Text style={styles.title}>{title} · {price}</Text>

      {/* Kort beskrivelse under titlen */}
      <Text style={styles.description}>{description}</Text>

      {/* --------------------------- FOOTER: STJERNER OG HANDLINGER --------------------------- */}
      <View style={styles.footer}>
        {/* Venstre side: stjerner der viser vurdering (rating) */}
        <View style={styles.stars}>
          {/* Generér 5 stjerner og udfyld afhængigt af rating */}
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i} // Unik nøgle for hver stjerne
              name={i < Math.round(rating) ? 'star' : 'star-o'} // Fyldt eller tom stjerne
              size={16}
              color="#FFD700" // Guld-farve til stjerner
            />
          ))}
        </View>

        {/* Højre side: social-ikoner (like, kommentar, send, gem) */}
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
    </View>
  );
}
