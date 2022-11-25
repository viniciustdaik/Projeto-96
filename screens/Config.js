import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contact: '',
      city: '',
      address: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitleAndLogoContainer}>
          <Image
            style={styles.appIcon}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.appTitleText}>Trocando</Text>
        </View>

        {/*<View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: "center", 
          marginTop: "50%", 
        }}>
        <Text style={{fontSize: RFValue(50), color: "purple", fontFamily: "cursive"}}>Config</Text>
      </View>*/}

        <Text style={styles.loggedInAs}>Cadastrado como: {this.state.email}</Text>

        <TextInput
          style={styles.textInput}
          placeholder={'Contato'}
          placeholderTextColor={'gray'}
          keyboardType="phone-pad"></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder={'Cidade'}
          placeholderTextColor={'gray'}></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder={'Endereço'}
          placeholderTextColor={'gray'}></TextInput>

        <TouchableOpacity style={styles.logOutButton}>
          <Text style={styles.logOutButtonText}>Sair</Text>
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
    fontSize: Platform.OS !== "web" ? RFValue(45) : RFValue(18),
    fontWeight: 'bold',
    fontFamily: 'cursive',
    backgroundColor: 'yellow',
    borderRadius: RFValue(20),
    height: '56px',
    marginTop: RFValue(6),
    marginBottom: RFValue(6),
  },
  appIcon: {
    backgroundColor: 'white',
    borderRadius: RFValue(35),
    margin: RFValue(6),
    width: 55,
    height: 55,
  },
  appTitleAndLogoContainer: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    width: '100%',
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
    fontSize: RFValue(28),
  },
  logOutButton: {
    backgroundColor: 'red',
    width: '80%',
    height: RFValue(25),
    borderRadius: RFValue(15),
    marginTop: RFValue(15),
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
  },
  logOutButtonText: {
    color: "white",
    fontSize: RFValue(20),
    fontFamily: "cursive",
  },
  loggedInAs: {
    color: "white",
    fontSize: RFValue(20),
    fontFamily: "cursive",
    backgroundColor: "blue",
    borderRadius: RFValue(3),
    marginTop: RFValue(5),
  },
});
