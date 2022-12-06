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

import Header from './src/header';
import ReviewCard from './src/reviewCard';

const reviews = [
  {
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    username: 'Cameron Williamson',
    stars: 4,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, nammolestiae! Quibusdam, nostrum temporibus quaerat unde eaque ex, laboreblanditiis',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    username: 'Theresa Webb',
    stars: 5,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, nammolestiae! Quibusdam, nostrum temporibus quaerat unde eaque ex, laboreblanditiis',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'Marvin McKinney',
    stars: 3,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, nammolestiae! Quibusdam, nostrum temporibus quaerat unde eaque ex, laboreblanditiis',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.reviews}>
        {reviews.map((review, index) => {
          return (
            <View key={index}>
              <ReviewCard
                userimage={review.image}
                username={review.username}
                stars={review.stars}
                review={review.review}
               />
              <View
                style={{
                  height: 3,
                  backgroundColor: '#efede6',
                  marginHorizontal: 20,
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#efede6',
    height: '100%',
    fontFamily: 'NotoSans',
  },
  reviews: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white',
  },
});

export default App;
