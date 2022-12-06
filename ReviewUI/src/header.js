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

 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */

 const Header = () => {
   return (
        <Text style={styles.header}>
            Reviews
        </Text>
   );
 };
 
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginTop: 20,
    padding: 20,
    fontWeight: "bold",
  }
})
 
 export default Header;
 