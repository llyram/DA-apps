/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const StarRating = ({stars}) => {
  return (
    <View style={{flexDirection: "row"}}>
      {[...Array(5)].map((star, index) => {
        return index < stars ? <Text style={{color:"#ffbe02"}} className="star">&#9733;</Text> : <Text style={{color:"#ffbe02"}}>&#9734;</Text>;
      })}
    </View>
  );
};

export default StarRating;
