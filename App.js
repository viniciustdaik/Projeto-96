import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CreateTrade from './screens/CreateTrade';

import BottomTabNavigator from './navigation/BottomTabNavigator';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import firebase from 'firebase';
import { firebaseConfig } from './config';
import Feed from './screens/Feed';

///if (!firebase.apps.length) {
///  firebase.initializeApp(firebaseConfig);
//} else {
////  firebase.app();
//}

/* 
export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/*<Stack.Screen name="Dashboard" component={DashboardScreen} />*/}
        <Stack.Screen name="Início" component={Feed} />
        <Stack.Screen name="CreateTrade" component={CreateTrade} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Dashboard: {
      screen: BottomTabNavigator,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);*/
