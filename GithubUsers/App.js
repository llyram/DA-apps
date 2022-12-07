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
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

const User = ({login, avatar_url}) => (
  <View style={styles.users}>
    <Image style={styles.image} source={{uri: avatar_url}} />
    <Text style={styles.username}>{login}</Text>
  </View>
);

const App = () => {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <Button onPress={getUsers} title="Get Users" />
      <Button onPress={() => {setData(); setLoading(true)}} color="red" title="Reset" />
      {isloading ? (
        <Text>Click on get users to get started</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <User login={item.login} avatar_url={item.avatar_url} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  users: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  image: {
    height: 50, 
    width: 50, 
    borderRadius: 50
  },
  username: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
