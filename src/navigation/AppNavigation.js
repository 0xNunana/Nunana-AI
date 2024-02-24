import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'


const Stack = createNativeStackNavigator()
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Welcome'
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation