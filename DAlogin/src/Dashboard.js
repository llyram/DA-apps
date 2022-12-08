/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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

const Dashboard: () => Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#438AB6',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default Dashboard;
