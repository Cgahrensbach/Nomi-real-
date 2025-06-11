// Importér React for at kunne bruge JSX og funktionelle komponenter
import React from 'react';

// Importér createBottomTabNavigator, som vi bruger til at lave en tab-baseret navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importér Ionicons – et ikonbibliotek fra Expo der indeholder mange mobilvenlige ikoner
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';
// Importér de screens som skal vises i hver tab (du skal selv oprette disse filer)
import LandingScreen from '../screens/LandingScreen';     // Hovedfeedet
import SearchScreen from '../screens/SearchScreen';       // Søgefunktion
import UploadScreen from '../screens/UploadScreen';       // Opret nyt opslag
import ProfileScreen from '../screens/ProfileScreen';     // Brugerens profil

// Opret selve tab navigatoren – dette objekt bruges til at definere struktur og indhold i bundmenuen
const Tab = createBottomTabNavigator();

// Exportér standard-komponenten der render tab-navigationen
export default function BottomTabsNav() {
  return (
    // Hovedkomponenten: Tab.Navigator indeholder alle "ruter" i bunden
    <Tab.Navigator
      // screenOptions tillader os at style og styre udseendet og funktion for hver tab
      screenOptions={({ route }) => ({
        headerShown: false,               // Vi skjuler standard header for at bruge vores egen eller holde layout rent
        tabBarShowLabel: false,          // Vi viser ikke tekst under ikonerne – kun ikoner
        tabBarStyle: {
          backgroundColor: colors.white,       // Baggrundsfarve på selve bottom-tabbaren
          height: 60,                    // Gør tab-baren lidt højere for at give plads til ikoner
          borderTopWidth: 0.2,           // En tynd linje øverst på tab-baren for visuel adskillelse
          borderTopColor: '#ccc',
        },
        tabBarIcon: ({ focused, color, size }) => {
          // Her definerer vi hvilket ikon der skal vises, afhængigt af hvilken tab vi er på
          let iconName;

          // Hvis vi er på Feed-tabben
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline'; // Udfyldt ikon når aktiv, ellers outline
          }

          // Hvis vi er på Search-tabben
          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          // Hvis vi er på Upload-tabben (midterknappen)
          if (route.name === 'Upload') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
                  // Gør upload-ikonet større for at fremhæve det i midten        // Grøn farve for at indikere action/handling
          }

          // Hvis vi er på Profile-tabben
          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Returner et Ionicon-komponent med valgt ikon, størrelse og farve
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.Primary1,  // Grøn farve når en tab er aktiv
        tabBarInactiveTintColor: colors.settings,   // Grå farve for inaktive tabs
      })}
    >
      {/* Her definerer vi hvad hver "tab" skal vise – skærm og navn skal matche */}
      <Tab.Screen name="Feed" component={LandingScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
