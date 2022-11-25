import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      /*city: '',
      contact: '',
      address: '',*/
    };
  }

  handleLogin = (email, password) => {
    if (
      this.state.email !== '' &&
      this.state.password !== ''
    ) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate('Início', {
            /*city: this.state.city,
            contact: this.state.contact,
            address: this.state.address*/
            email: this.state.email,
          });

          /*firebase
            .database()
            .ref('/users/' + this.state.email)
            .set({
              city: this.state.city,
              contact: this.state.contact,
              current_theme: 'dark',
            })
            .then(function (snapshot) { });*/
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appIconContainer}>
          <Image
            style={styles.appIcon}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.appTitleText}>Trocando</Text>
        </View>

        {/*<TextInput
          style={styles.textInput}
          placeholder={'Cidade'}
          placeholderTextColor={'orange'}
          onChangeText={(text) => this.setState({ city: text })}></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder={'Contato'}
          placeholderTextColor={'red'}
    onChangeText={(text) => this.setState({ contact: text })}></TextInput>*/}

        <TextInput
          style={styles.textInput}
          placeholder={'example@gmail.com'}
          placeholderTextColor={'blue'}
          onChangeText={(text) => this.setState({ email: text })}></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder={'Senha'}
          placeholderTextColor={'blue'}
          onChangeText={(text) =>
            this.setState({ password: text })
          }></TextInput>

        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => this.handleLogin(email, password)}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABDEEF',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS !== 'web'
        ? Platform.OS === 'android'
          ? StatusBar.currentHeight
          : RFValue(35)
        : '',
  },
  appTitleText: {
    color: 'purple',
    fontSize: RFValue(45),
    fontWeight: 'bold',
    fontFamily: 'cursive',
    backgroundColor: 'yellow',
    borderRadius: RFValue(20),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
  },
  appIcon: {
    backgroundColor: 'violet',
    borderRadius: RFValue(35),
    marginTop: Platform.OS === 'web' ? RFValue(15) : 0,
  },
  textInput: {
    width: '80%',
    height: RFValue(45),
    backgroundColor: '#ABE', //"#ABEDBE" //"#ABE"
    borderRadius: RFValue(5),
    borderWidth: RFValue(3.5),
    borderColor: 'darkgreen',
    fontFamily: 'cursive',
    marginTop: RFValue(15),
    fontSize: RFValue(30),
  },
  appIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'lightyellow',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    height: RFValue(45),
    backgroundColor: 'lightgreen', //"#ABEDBE" //"#ABE"
    borderRadius: RFValue(25),
    borderWidth: RFValue(3.5),
    borderColor: 'darkgreen',
    marginTop: RFValue(15),
  },
  buttonText: {
    fontSize: RFValue(30),
    fontFamily: 'cursive',
  },
});
