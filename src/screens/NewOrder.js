import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

const NewOrder = () => {

    const navigation = useNavigation()

    return (
        <NativeBaseProvider>
        <View style={globalStyles.container}>
            <View style={[globalStyles.content, styles.content]} >
                <Button
                    style={globalStyles.btn}
                    width='100%'
                    height={50}
                    rounded='md'
                    onPress={() => navigation.navigate('menu')}
                >
                    <Text style={globalStyles.btnText}>new order</Text>

                </Button>
            </View>
        </View>
        </NativeBaseProvider>
    )
}

export default NewOrder

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
