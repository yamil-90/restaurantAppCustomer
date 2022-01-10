import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/navigation'
import { createStackNavigator } from '@react-navigation/native-stack'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen />
          <Stack.Screen />
          <Stack.Screen />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
