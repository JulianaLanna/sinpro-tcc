/**
 *
 * @author
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Modal,
  Button,
  Alert,
} from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import itsamatch from '../assets/itsamatch.png';

export default ({navigation}) => {
  const user = navigation.getParam('user');
  const [modalVisible, setModalVisible] = useState(false);

  function ModalVisible() {
    setModalVisible(!modalVisible);
  }

  async function handlerLogout() {
    navigation.navigate('Login');
  }

  const datas = [
    {
      id: '1',
      title: 'First Item',
    },
  ];

  async function handleLike() {}

  async function handleDislike() {}

  // eslint-disable-next-line no-undef
  renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlerLogout} style={styles.content}>
        <Text style={styles.headerText}>Bem vindo </Text>
        <Text style={styles.headerUser}>{user}</Text>
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {datas.length === 0 ? (
          <Text style={styles.empty}>Acabou a lista :C</Text>
        ) : (
          <FlatList
            style={{marginTop: 30}}
            contentContainerStyle={styles.list}
            data={datas}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ModalVisible}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text>This is content inside of modal component</Text>
            <Button onPress={() => ModalVisible()} title="Close modal" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  content: {
    flexDirection: 'row',
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    alignContent: 'space-between',
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
    borderRadius: 12,
  },

  headerText: {
    fontSize: 22,
    color: '#df4623',
  },

  headerUser: {
    fontSize: 22,
    color: '#df4623',
    fontWeight: 'bold',
  },

  logo: {
    marginTop: 30,
  },

  empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 525,
  },

  card: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  avatar: {
    flex: 1,
    height: 300,
  },

  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  bio: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
    color: '#999',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
  },

  button: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  buttonText: {
    fontSize: 15,
  },

  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  matchImage: {
    height: 60,
    resizeMode: 'contain',
  },

  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#fff',
    marginVertical: 30,
  },

  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },

  matchBio: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
    color: 'rgba(255,255,255,0.8)',
  },

  matchClose: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },

  item: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },

  title: {
    fontSize: 32,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
