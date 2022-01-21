import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Divider, NativeBaseProvider, Box, HStack, VStack, Avatar, Spacer, Image } from 'native-base';

import FirebaseContext from '../context/firebase/firebaseContext';
import OrdersContext from '../context/orders/ordersContext';

import globalStyles from '../styles/global'

import noImage from '../../assets/img/no-image.png'


const Menu = () => {

    //we use the firebase context
    const { getProducts, menu } = useContext(FirebaseContext)


    const { selectDish } = useContext(OrdersContext)

    useEffect(() => {
        getProducts()
    }, [])

    // redirection hoock

    const navigation = useNavigation();

    const showHeadings = (category, i) => {
        if (i > 0) {
            const previousCategory = menu[i - 1].category;
            if (previousCategory !== category) {
                return (
                    <>
                        <Divider my="0" />
                        <Text style={styles.text}>{category}</Text>
                        <Divider my='0' />
                    </>
                )
            }

        } else {
            return (
                <>
                    <Divider my="0" />
                    <Text style={styles.text}>{category}</Text>
                    <Divider my='0' />
                </>
            )

        }

    }

    return (
        <NativeBaseProvider
            styles={globalStyles.container}
        >
            <FlatList
                data={menu}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const { price, image, description, name, category, id } = item;

                    return (
                        <>
                            {showHeadings(category, index)}
                            <Pressable
                                onPress={() => {
                                    //  here we can remove some properties of the item (dish) to save on storage space
                                    const { available, ...dish } = item
                                    selectDish(dish)
                                    navigation.navigate('dishdetail')
                                }
                                }
                            >


                                <Box

                                    backgroundColor='white'
                                    key={id}
                                    borderBottomWidth="1"
                                    _dark={{
                                        borderColor: "gray.600",
                                    }}
                                    borderColor="coolGray.200"
                                    pl="1"
                                    pr="3"
                                    py="3"
                                >
                                    <HStack space={3} justifyContent="space-between">
                                        <Image
                                            alt='not found'
                                            size="50px"
                                            source={image ? {
                                                uri: image
                                            } : noImage}
                                        />
                                        <VStack>
                                            <Text
                                                _dark={{
                                                    color: "warmGray.50",
                                                }}
                                                color="coolGray.800"
                                                bold
                                            >
                                                {name}
                                            </Text>
                                            <Text
                                                color="coolGray.600"
                                                _dark={{
                                                    color: "warmGray.200",
                                                }}
                                                numberOfLines={2}
                                            >
                                                {description}
                                            </Text>
                                            <Text>
                                                price: ${price}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                    </HStack>
                                </Box>
                            </Pressable>
                        </>
                    )
                }}
            />

        </NativeBaseProvider>
    )
}

export default Menu

const styles = StyleSheet.create({
    text: {
        padding: 4,
        marginLeft: 6,
        textTransform: 'uppercase',
        fontWeight: '700'
    }
})
