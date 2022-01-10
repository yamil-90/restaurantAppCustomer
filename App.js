import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/navigation'
import { createStackNavigator } from '@react-navigation/native-stack'

import DeliveryAbstract from './src/screens/DeliveryAbstract';
import Menu from './src/screens/Menu';
import DishForm from './src/screens/DishForm';
import DishDetail from './src/screens/DishDetail';
import NewOrder from './src/screens/NewOrder';
import DeliveryProgress from './src/screens/DeliveryProgress';

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#ffda00'
          },
          headerTitleStyle:{
            fontWeight: 'bold'
          }
        }}
        >
          <Stack.Screen 
          name='neworder'
          component={NewOrder}
          options={{
            title: 'New Order'
          }}
          />
           <Stack.Screen 
          name='deliveryabstract'
          component={DeliveryAbstract}
          options={{
            title: 'Delivery Abstract'
          }}
          />
           <Stack.Screen 
          name='menu'
          component={Menu}
          options={{
            title: 'Menu'
          }}
          />
           <Stack.Screen 
          name='dishForm'
          component={DishForm}
          options={{
            title: 'Form'
          }}
          />
           <Stack.Screen 
          name='dishdetail'
          component={DishDetail}
          options={{
            title: 'Detail'
          }}
          />
           <Stack.Screen 
          name='deliveryprogress'
          component={DeliveryProgress}
          options={{
            title: 'Progress'
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
