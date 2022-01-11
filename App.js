import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DeliveryAbstract from './src/screens/DeliveryAbstract';
import Menu from './src/screens/Menu';
import DishForm from './src/screens/DishForm';
import DishDetail from './src/screens/DishDetail';
import NewOrder from './src/screens/NewOrder';
import DeliveryProgress from './src/screens/DeliveryProgress';

const Stack = createNativeStackNavigator()


// here we import the state from context
import FirebaseState from './src/firebase/firebaseState';
import OrdersState from './src/orders/ordersState';

const App = () => {
  return (
    <>
      <FirebaseState>
        <OrdersState>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='menu'
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#ffda00'
                },
                headerTitleStyle: {
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
        </OrdersState>
      </FirebaseState>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
