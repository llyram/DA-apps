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

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState();

  const validateLogin = () => {
    if (username === '' || password === '') {
      setError('username/password cannot be empty');
    } else if (username == 'test@gmail.com' && password == 'pass1234') {
      navigation.navigate('Dashboard');
      setError('');
    } else {
      setModalVisible(true);
      setError('');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wrong Username or Password</Text>
            <Pressable
              style={[styles.modalbutton, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Retry</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require('./assets/images/logo_full.png')}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={username => {
          setUsername(username);
        }}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={password => {
          setPassword(password);
        }}
      />
      <Text style={styles.label}>Password</Text>
      <Text style={styles.error}>{error}</Text>
      <Pressable style={styles.button} onPress={validateLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#438AB6',
    height: '1000%',
    top: -800,
  },
  headerContainer: {
    backgroundColor: 'white',
    width: 1000,
    height: 1000,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80,
  },
  image: {
    resizeMode: 'contain',
    width: 300,
    // width: "100%",
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  error: {
    color: 'red',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbutton: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },
});

export default LoginScreen;
