/**
 *
 * @author
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//import logo from '../assets/logo.png';

//import api from '../service/api';

export default ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('id').then(id => {
      if (id) {
        navigation.navigate('Main', {id});
      }
    });
  });

  async function handleLogin() {
    console.log(user);
    console.log(password);
    //const response = await api.post('/devs', {
    //  username: user,
    //});
    //const {_id} = response.data.data;
    //await AsyncStorage.setItem('id', _id);
    navigation.navigate('Main', {user: user});
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <Text style={styles.headerText}>Sinpro</Text>
      <>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuario"
          value={user}
          onChangeText={setUser}
          style={styles.textInput}
          placeholderTextColor="#cccccc"
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          placeholderTextColor="#cccccc"
          secureTextEntry={true}
        />
      </>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  textInput: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#000',
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4623',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  headerText: {
    color: '#df4623',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
