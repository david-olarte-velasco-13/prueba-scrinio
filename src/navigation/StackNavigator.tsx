import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileIsDoneScreen from '../screens/ProfileIsDoneScreen';
import RegisterScreen1 from '../screens/RegisterScreen1';
import RegisterScreen2 from '../screens/RegisterScreen2';
import RegisterScreen3 from '../screens/RegisterScreen3';
import RegisterScreen4 from '../screens/RegisterScreen4';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name='Welcome' component={ WelcomeScreen }/>
      <Stack.Screen name='Login' component={ LoginScreen }/>
      <Stack.Screen name='Home' component={ HomeScreen }/>
      <Stack.Screen name='IsDone' component={ ProfileIsDoneScreen }/>
      <Stack.Screen name='Register1' component={ RegisterScreen1 }/>
      <Stack.Screen name='Register2' component={ RegisterScreen2 }/>
      <Stack.Screen name='Register3' component={ RegisterScreen3 }/>
      <Stack.Screen name='Register4' component={ RegisterScreen4 }/>
    </Stack.Navigator>
  )
}

export default StackNavigator

