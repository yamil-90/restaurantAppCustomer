import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {
    Box,
    Heading,
    HStack,
    Image,
    NativeBaseProvider,
    VStack,
    Pressable,
    FormControl,
    Stack,
    Input

} from 'native-base'

import globalStyles from '../styles/global';
import OrdersContext from '../context/orders/ordersContext';
import noImage from '../../assets/img/no-image.png'
import { useNavigation } from '@react-navigation/native';

const DishForm = () => {
    return (
        <NativeBaseProvider>
            <FormControl>
                <HStack>
                    <VStack>
                    <FormControl.Label>
                        Amount
                    </FormControl.Label>
                    <Input />
                    <FormControl.HelperText>
                        Select the number of units to order
                    </FormControl.HelperText>
                    </VStack>
                    <Text>botones</Text>
                </HStack>
            </FormControl>
        </NativeBaseProvider>
    )
}

export default DishForm

const styles = StyleSheet.create({})
