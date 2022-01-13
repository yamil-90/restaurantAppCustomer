import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import { Divider, NativeBaseProvider, Box, HStack, VStack, Avatar, Spacer, Image } from 'native-base';

import FirebaseContext from '../firebase/firebaseContext';
import globalStyles from '../styles/global'


const Menu = () => {

    //we use the firebase context
    const { getProducts, menu } = useContext(FirebaseContext)

    useEffect(() => {
        getProducts()
    }, [])

    const showHeadings = (category, i) => {
        if (i > 0) {
            const previousCategory = menu[i - 1].category;
            if (previousCategory !== category) {
                return (
                    <>
                        <Divider my="0" />
                        <Text style={{padding:3}}>{category}</Text>
                        <Divider my='0' />
                    </>
                )
            }

        } else {
            return (
                <>
                    <Divider my="0" />
                    <Text style={{padding:3}}>{category}</Text>
                    <Divider my='0' />
                </>
            )

        }

    }

    return (
        <NativeBaseProvider
            styles={globalStyles.container}
        >

            <Text>menu</Text>
            {console.log(menu)}

            <FlatList
                data={menu}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const { price, image, description, name, category, id } = item;

                    return (
                        <>
                            {showHeadings(category, index)}
                            <Box
                            backgroundColor='white'
                                key={id}
                                borderBottomWidth="1"
                                _dark={{
                                    borderColor: "gray.600",
                                }}
                                borderColor="coolGray.200"
                                pl="1"
                                pr="1"
                                py="1"
                            >
                                <HStack space={3} justifyContent="space-between">
                                    <Image
                                        alt='not found'
                                        size="50px"
                                        source={image ? {
                                            uri: image
                                        } : 'not found'}
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
                                    </VStack>
                                    <Spacer />
                                    <Text>
                                        price: ${price}
                                    </Text>
                                </HStack>
                            </Box>

                        </>
                    )
                }}
            />

        </NativeBaseProvider>
    )
}

export default Menu

const styles = StyleSheet.create({})
