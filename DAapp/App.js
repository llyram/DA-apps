/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 
 //import type {Node} from 'react';
 import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
 
 import {MainBottomTabs} from './src/tabs/MainBottomTabs';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
       <NavigationContainer>
         <MainBottomTabs />
       </NavigationContainer>
   );
 };
 
 export default App;