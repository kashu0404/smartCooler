import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import TempScreen from './screens/TempScreen';
import CoolingScreen from './screens/CoolingScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome to SmartCooler' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
         <Stack.Screen
          name="Temp"
          component={TempScreen}
          options={{ title: 'Temperature Screen' }}
        />
        { <Stack.Screen
          name="Cool"
          component={CoolingScreen}
          options={{ title: 'Cooling Screen' }}
        /> }
         { <Stack.Screen
          name="Setting"
          component={SettingsScreen}
          options={{ title: 'Settings Screen' }}
        /> }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
