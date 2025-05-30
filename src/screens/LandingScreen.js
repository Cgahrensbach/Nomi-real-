import React from 'react';
import { View, FlatList } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import PostCard from '../components/PostCard';
import styles from '../styles/LandingScreenStyles';

// Dummy-data til visning i feedet
const dummyPosts = [
  {
    id: '1',
    title: 'Ramen Heaven',
    description: 'Authentic Japanese Ramen',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/ramen%20noodle%20photo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvcmFtZW4gbm9vZGxlIHBob3RvLmpwZyIsImlhdCI6MTc0ODAxODAzOCwiZXhwIjo0OTAxNjE4MDM4fQ.91yVEglJ0b17sgH9SyYNXXF0WfYFJD1cIV2R9ARseZU',
    price: '$$',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Pizza Napoli',
    description: 'Sprød bund og kraftig tomatsovs, direkte fra Italien.',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/pizza%20napoli.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvcGl6emEgbmFwb2xpLnBuZyIsImlhdCI6MTc0ODAxODA4MCwiZXhwIjo0OTAxNjE4MDgwfQ.SKZey0rz8tT0ZW-6Uo2wfaURcZh29nQa6fW-szPfLWk',
    price: '$',
    rating: 5,
  },
  {
    id: '3',
    title: 'Tacos El Diablo',
    description: 'Majstortillas med stærkt kød og koriander.',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Tacos.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvVGFjb3MuanBnIiwiaWF0IjoxNzQ4MDE4MTE1LCJleHAiOjQ5MDE2MTgxMTV9.Hc3x25ISVSaoVBDqXpOlTMHFXxYlcyp1BDcL_sc-FlM',
    price: '$',
    rating: 4,
  },
];

// LandingScreen: hovedfeed-skærmen i appen
export default function LandingScreen() {
  return (
    <View style={styles.container}>
      {/* Øverste header vises fast */}
      <CustomHeader />

      {/* FlatList viser alle postkort (PostCards) baseret på dummyPosts-array */}
      <FlatList
        data={dummyPosts} // Bruger dummy-posts
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            latitude={item.latitude}
            longtitude={item.longitude}
          />
        )}
        keyExtractor={(item) => item.id} // Nødvendigt for performance
        contentContainerStyle={styles.feed}
      />
    </View>
  );
}
