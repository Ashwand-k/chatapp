import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatWindow from './App/screens/ChatWindow';
import ScreenListOfChat from './App/screens/ScreenListOfChat';
import WelcomeScreen from './App/screens/WelcomeScreen';

import RegisterScreen from './App/screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen1 from './App/screens/LoginScreen';
import Chat from './App/screens/ScreenListOfChat';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
<Stack.Navigator initialRouteName="WelcomeScreen">
<Stack.Screen name="WelcomeScreen" component={WelcomeScreen}></Stack.Screen>

<Stack.Screen name="LoginScreen" component={LoginScreen1}></Stack.Screen>

<Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
<Stack.Screen name="ScreenListOfChat" component={Chat}></Stack.Screen>
</Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
