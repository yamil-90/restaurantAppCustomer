import React, {useContext, useEffect} from 'react'
import {StyleSheet, Text, View } from 'react-native'

import FirebaseContext from '../firebase/firebaseContext'


const Menu = () => {
    
    //we use the firebase context
    const { getProducts, menu } = useContext(FirebaseContext)
    
    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <View>
            <Text>menu</Text>
            
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})
