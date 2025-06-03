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
      'https://kalmqrdskgtwoiroqnez.supabase.co/storage/v1/object/sign/images/Profile%20image%20placeholder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2MxNWEyZTJjLTM1ZWYtNGE3YS05ZGM1LTBiZDc2OGViMDZiYSJ9.eyJ1cmwiOiJpbWFnZXMvUHJvZmlsZSBpbWFnZSBwbGFjZWhvbGRlci5wbmciLCJpYXQiOjE3NDg3MjI3MjIsImV4cCI6NDkwMjMyMjcyMn0.Z9oOWOHY0ppALKyOO5hvOtQhzRWXJUJnCIqVSrULQO4',
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
