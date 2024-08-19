import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormScreen from '../screens/form-screen';
import HomeScreen from '../screens/home-screen';

const Stack = createNativeStackNavigator();

const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
