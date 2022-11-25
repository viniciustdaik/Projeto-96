import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import Config from '../screens/Config';
import CreateTrade from '../screens/CreateTrade';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = focused ? 'book' : 'book-outline';
              return (
                <Ionicons name={iconName} size={Platform.OS !== "web" ? RFValue(29) : RFValue(13)}
                  color={color} />
              );
            } else if (route.name === 'Criar Troca') {
              return (
                <Image
                  source={require('../assets/createTradeIcon.png')}
                  style={{ width: RFValue(47), height: RFValue(27) }}
                  color={color}
                />
              );
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'cog' : 'cog-outline';
              return (
                <Ionicons name={iconName} size={Platform.OS !== "web" ?
                  RFValue(29) : RFValue(13)} color={color} />
              );
            }
          },
        })}
        barStyle={styles.bottomTabNavigator}
        activeColor={'orange'}
        inactiveColor={'#AEB'} //"gray"
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: '#AEB', //'gray
        }}>
        <Tab.Screen
          name="Início"
          component={Feed}
          options={{
            unmountOnBlur: true,
          }}
        />

        {/*<Tab.Screen
          name="Criar Troca"
          component={CreateTrade}
          options={{
            unmountOnBlur: true,
          }}
        />*/}

        <Tab.Screen
          name="Configurações"
          component={Config}
          options={{
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabNavigator: {
    backgroundColor: 'blue',
  },
});
