import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNav from './BottomTabsNav'; 

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabsNav} />
    </Stack.Navigator>
  );
}

//Dette er alle de sider som brugeren har mulighed for at navigere rundt i efter at have logget ind. 
//Det vil sige at sessionen er styret af brugerens login status og derfor kan disse sider vises med det samme så brugeren ikke behøver at logge ind hver gang