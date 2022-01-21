import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {
    Box,
    Heading,
    HStack,
    Image,
    NativeBaseProvider,
    VStack,
    Pressable

} from 'native-base'

import globalStyles from '../styles/global';
import OrdersContext from '../context/orders/ordersContext';
import noImage from '../../assets/img/no-image.png'
import { useNavigation } from '@react-navigation/native';

const DishDetail = () => {

    const { dish } = useContext(OrdersContext);
    const { name, image, description, price } = dish;

    const navigation = useNavigation()

    return (
        <NativeBaseProvider
            styles={globalStyles.container}
        >
            <View style={globalStyles.content}>
                <Box >
                    <VStack alignItems='center' my={6}>
                        <Heading >
                            {name}
                        </Heading>
                        <Box style={styles.contentBox}>
                            <Image
                                alt='not found'
                                width={'100%'}
                                height={200}
                                source={image ? {
                                    uri: image
                                } : noImage}
                            />
                            <Text style={{ marginTop: 20 }}>
                                {description}
                            </Text>
                            <Text style={globalStyles.amount}>
                                Price: ${price}
                            </Text>
                        </Box>
                    </VStack>
                </Box>
                            
            </View>
            <HStack safeAreaBottom  bg="#e9e9e9" alignItems="center">
                                <Pressable py="3" flex={1} style={styles.btn} onPress={()=>navigation.navigate('dishForm')}>
                                    <Text style={styles.btn_text}>
                                        Ordenar
                                    </Text>
                                </Pressable>
                            </HStack>
        </NativeBaseProvider>
    )
}

export default DishDetail

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'red',
        height:10
    },
    contentBox: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        padding: 10,
        width: '100%',
        alignItems: 'flex-start'
    },
    btn:{
        flex:1,
        backgroundColor: "#FFDA00",
        alignSelf:'center',
        alignItems:'center'
    },
    btn_text:{
        textAlign:'center'
    }
})
