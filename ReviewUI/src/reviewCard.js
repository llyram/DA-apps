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
  Image,
} from 'react-native';
import StarRating from './starRating';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const ReviewCard = ({userimage, username, stars, review}) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewHeader}>
        <Image
          style={styles.logo}
          source={{uri: userimage}}></Image>
        <View style={styles.nameContainer}>
          <Text style={styles.username}>{username}</Text>
          <StarRating stars={stars} />
        </View>
      </View>
      <Text style={styles.reviewText}>
        {review}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  nameContainer: {
    paddingHorizontal: 10,
  },
  reviewHeader: {flexDirection: 'row', marginBottom: 20},
  reviewText: {

  }
});

export default ReviewCard;
