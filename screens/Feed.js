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
  FlatList,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

import { RFValue } from 'react-native-responsive-fontsize';

import firebase from "firebase";

import db from "../config";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      contact: "",
      address: "",
      email: this.props.route.params.email,
      trades: [],
    };
  }

  componentDidUpdate() {
    if (this.props.route.params.cityFromCreateTrade !== undefined
      && this.state.city !== this.props.route.params.cityFromCreateTrade) {
      this.setState({
        city: this.props.route.params.cityFromCreateTrade,
      });
    }

    if (this.props.route.params.contactFromCreateTrade !== undefined
      && this.state.contact !== this.props.route.params.contactFromCreateTrade) {
      this.setState({
        contact: this.props.route.params.contactFromCreateTrade,
      });
    }

    if (this.props.route.params.addressFromCreateTrade !== undefined
      && this.state.address !== this.props.route.params.addressFromCreateTrade) {
      this.setState({
        address: this.props.route.params.addressFromCreateTrade,
      });
    }

    this.fetchStories();
  }

  fetchStories = () => {
    firebase
      .database()
      .ref('/trades/')
      .on(
        'value',
        (snapshot) => {
          let trades = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              stories.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ trades: trades });
        },
        function (errorObject) {
          console.log('A leitura Falhou' + errorObject.code);
        }
      );
  };

  renderItem = ({ item: trade }) => {
    return <TradeCard trade={trade} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitleAndLogoContainer}>
            <Image
              style={styles.appIcon}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.appTitleText}>Trocando</Text>

            {/*<Text style={{ fontSize: RFValue(35) }}>::{this.state.address}</Text>*/}

            <Text style={[{ marginLeft: "24%", marginRight: 6, width: "75%", textAlign: "center" },
            styles.appTitleText]}>{this.state.email}</Text>

            <TouchableOpacity style={[{ marginRight: 6 }, styles.logOutButton]}
              onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.logOutButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>

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
              Feed
            </Text>
            </View>*/}

          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.trades}
              renderItem={this.renderItem}
            />
          </View>

        </View>

        <AnimateBtn
          style={styles.createTradeButton}
          useNativeDriver
          animation="bounceInUp"
          duration={1500}
          onPress={() => this.props.navigation.navigate("CreateTrade", {
            city: this.state.city,
            contact: this.state.contact,
            address: this.state.address,
          })}>
          <Ionicons name="ios-add" size={35} color="#B0E0E6" />
        </AnimateBtn>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABDEEF',
  },
  container2: {
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
    alignItems: "center",
  },
  createTradeButton: {
    position: "absolute",
    backgroundColor: 'blue',
    borderRadius: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    right: 25,
    bottom: 25,
    shadowOpacity: 0.2,
    zIndex: 9,
    shadowColor: "yellow",
  },
  logOutButton: {
    backgroundColor: 'red',
    width: '10%',
    height: '56px',
    borderRadius: RFValue(15),
    marginTop: RFValue(6),
    marginBottom: RFValue(6),
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  logOutButtonText: {
    color: "white",
    fontSize: RFValue(20),
    fontFamily: "cursive",
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 0.85
  }
});
