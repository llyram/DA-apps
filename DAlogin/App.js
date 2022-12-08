/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Pressable,
  Modal,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/LoginScreen';
import Dashboard from './src/Dashboard';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();      
    }, 5000);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Dashboard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
