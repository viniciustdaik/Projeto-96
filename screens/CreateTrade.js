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
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons'; //chevron-back

import firebase from "firebase";

import db from "../config";

export default class CreateTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: '',
      description: '',
      image: '',
      city: this.props.route.params.city,
      contact: this.props.route.params.contact,
      address: this.props.route.params.address,
      cityEditable: false,
      addressEditable: false,
      contactEditable: false,
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

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.navigate('Início', {
            cityFromCreateTrade: this.state.city,
            contactFromCreateTrade: this.state.contact,
            addressFromCreateTrade: this.state.address,
          })}>
          <Ionicons name="arrow-undo" size={Platform.OS !== "web" ? 30 : RFValue(30)} color="black" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        {/*<View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            marginTop: '50%',
          }}>
          <Text
            style={{
              fontSize: RFValue(50),
              color: 'purple',
              fontFamily: 'cursive',
            }}>
            Criar Troca
          </Text>
        </View>*/}

        <TextInput
          style={[{ marginTop: RFValue(15), borderWidth: RFValue(3.5), width: '80%', }, styles.textInput]}
          placeholder={'Objeto'}
          placeholderTextColor={'gray'}
          onChangeText={(text) => this.setState({ object: text })}></TextInput>

        <TextInput
          style={[{ marginTop: RFValue(15), borderWidth: RFValue(3.5), width: '80%', }, styles.textInput]}
          placeholder={'Descrição'}
          placeholderTextColor={'gray'}
          onChangeText={(text) => this.setState({ description: text })}></TextInput>

        <View style={styles.textView}>
          {/*<Text style={[{ color: "gray" }, styles.textStyle]}>Contato: {this.state.contact}</Text>*/}
          <TextInput
            style={[{ width: '100%', }, this.state.contactEditable ? {
              borderWidth: RFValue(3.5)
            } : "", styles.textInput]}
            placeholder={'Contato'}
            placeholderTextColor={'gray'}
            value={this.state.contact}
            editable={this.state.contactEditable}
            onChangeText={(text) => this.setState({ contact: text })}></TextInput>

          <TouchableOpacity style={styles.modifyButton} onPress={() =>
            this.setState({ contactEditable: !this.state.contactEditable })}>
            <Ionicons name="pencil" size={RFValue(25)} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          {/*<Text style={[{ color: "gray" }, styles.textStyle]}>Cidade: {this.state.city}</Text>*/}
          <TextInput
            style={[{ width: '100%', }, this.state.cityEditable ? {
              borderWidth: RFValue(3.5)
            } : "", styles.textInput]}
            placeholder={'Cidade'}
            placeholderTextColor={'gray'}
            value={this.state.city}
            editable={this.state.cityEditable}
            onChangeText={(text) => this.setState({ city: text })}></TextInput>

          <TouchableOpacity style={styles.modifyButton} onPress={() =>
            this.setState({ cityEditable: !this.state.cityEditable })}>
            <Ionicons name="pencil" size={RFValue(25)} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          {/*<Text style={[{ color: "gray" }, styles.textStyle]}>Endereço: {this.state.address}</Text>*/}
          <TextInput
            style={[{ width: '100%', }, this.state.addressEditable ? {
              borderWidth: RFValue(3.5)
            } : "", styles.textInput]}
            placeholder={'Endereço'}
            placeholderTextColor={'gray'}
            value={this.state.address}
            editable={this.state.addressEditable}
            onChangeText={(text) => this.setState({ address: text })}></TextInput>

          <TouchableOpacity style={styles.modifyButton} onPress={() =>
            this.setState({ addressEditable: !this.state.addressEditable })}>
            <Ionicons name="pencil" size={RFValue(25)} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Cadastrar Troca</Text>
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
    height: RFValue(45),
    backgroundColor: '#ABE', //"#ABEDBE" //"#ABE"
    borderRadius: RFValue(5),
    borderColor: 'darkgreen',
    fontFamily: 'cursive',
    fontSize: RFValue(28),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: RFValue(30),
    fontFamily: "cursive",
  },
  backButton: {
    justifyContent: 'left',
    alignItems: 'left',
    alignSelf: 'center',
    width: '100%',
    height: RFValue(35),
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  backButtonText: {
    //marginLeft: 4,
    fontSize: RFValue(23),
    color: "white",
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: RFValue(15),
    height: RFValue(35),
    borderRadius: RFValue(5),
    backgroundColor: 'green',
  },
  submitButtonText: {
    fontSize: RFValue(23),
    color: "white",
  },
  textView: {
    flexDirection: "row",
    //justifyContent: "center",
    //alignItems: "center",
    alignSelf: "center",
    width: '80%',
    height: RFValue(45),
    backgroundColor: '#ABE',
    fontSize: RFValue(30),
    borderRadius: RFValue(5),
    marginTop: RFValue(15),
    fontFamily: "cursive",
  },
  modifyButton: {
    borderRadius: RFValue(5),
    backgroundColor: "gray",
    width: "6.5%",
    height: "75%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: RFValue(3),
    marginRight: RFValue(3),
  },
});
