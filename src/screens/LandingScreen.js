import React from 'react';
import { View, FlatList } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import PostCard from '../components/PostCard';
import styles from '../styles/LandingScreenStyles';


const dummyPosts = [
  {
    id: '1',
    title: 'Ramen Heaven',
    description: 'Authentic Japanese Ramen',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/ramen%20noodle%20photo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcmFtZW4gbm9vZGxlIHBob3RvLmpwZyIsImlhdCI6MTc1MDEwMTYyNiwiZXhwIjo0OTAzNzAxNjI2fQ.ETX8qZc0_qDbGKpzjden38Wb-kPD1gN_NjkcHl55IIg',
    price: '$$',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Pizza Napoli',
    description: 'Thin and crunchy pizza bottom with a deep tomatosauce directly from Italy',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/pizza%20napoli.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcGl6emEgbmFwb2xpLnBuZyIsImlhdCI6MTc1MDEwMTU5NSwiZXhwIjo0OTAzNzAxNTk1fQ.NAN5F0sNnfahS1LjSb_rQOCwQHSfroOtIowqXfQoVv4',
    price: '$',
    rating: 5,
  },
  {
    id: '3',
    title: 'Tacos El Diablo',
    description: 'Corn Tortilla with spicy meat and coriander',
    image: 'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Tacos.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvVGFjb3MuanBnIiwiaWF0IjoxNzUwMTAxNjY3LCJleHAiOjQ5MDM3MDE2Njd9.p1MSfGTli1_eThxBAhxVlswKQEWfBpXBFdOk4F3b0eE',
    price: '$',
    rating: 4,
  },
];


export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader />

      <FlatList
        data={dummyPosts} 
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
        keyExtractor={(item) => item.id} 
        contentContainerStyle={styles.feed}
      />
    </View>
  );
}
