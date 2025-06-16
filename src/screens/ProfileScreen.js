import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import PostCard from '../components/PostCard';
import styles from '../styles/ProfileScreenStyles';

export default function ProfileScreen() {
  const user = {
    name: 'Nomi User',
    avatar_url:
      'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Profile%20image%20placeholder.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZmMxYTM2YS1iYTk0LTRhNjMtODQ5Zi0zNjE3OTg4MjY1MTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvUHJvZmlsZSBpbWFnZSBwbGFjZWhvbGRlci5wbmciLCJpYXQiOjE3NTAxMDE3MjEsImV4cCI6NDkwMzcwMTcyMX0.m7yPYgaVjJnffwWWisYEvbGl6j5esqk9LxaZsWmMq-U',
    bio: 'Jeg elsker at dele gode madoplevelser og vise byens bedste spots. Følg med for flere anbefalinger!',
    postCount: 3,
    followersCount: 120,
    followingCount: 80,
  };

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

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.profileSection}>
        <Image
          source={{ uri: user.avatar_url }}
          style={styles.avatar}
        />

        <View style={styles.infoWrapper}>
          <Text style={styles.nameText}>{user.name}</Text>

          <View style={styles.countSection}>
            <View style={styles.countBlock}>
              <Text style={styles.countNumber}>{user.postCount}</Text>
              <Text style={styles.countLabel}>Posts</Text>
            </View>
            <View style={styles.countBlock}>
              <Text style={styles.countNumber}>{user.followersCount}</Text>
              <Text style={styles.countLabel}>Followers</Text>
            </View>
            <View style={styles.countBlock}>
              <Text style={styles.countNumber}>{user.followingCount}</Text>
              <Text style={styles.countLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{user.bio}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Liste af dummyPosts */}
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Ingen opslag at vise.</Text>
          </View>
        )}
        contentContainerStyle={styles.feed}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
