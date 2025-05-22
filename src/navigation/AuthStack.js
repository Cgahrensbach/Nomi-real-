// navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

//dette er session styret og kan derfor gemme på brugerens login status. Hvis brugeren logger ind igennem Auth
//Så har brugeren mulighed for at starte op på LandingScreen når de åbner appen igen. Dette er med til at give en bedre brugeroplevelse
