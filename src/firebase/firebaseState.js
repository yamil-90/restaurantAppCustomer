import React, {useReducer} from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from '../firebaseConnect';

import {sortBy} from 'lodash'

import { GET_PRODUCTS_SUCCESS } from '../types'

const FirebaseState = props =>{
// we create the initial state

const initialState = {
    menu: []
}
const [state, dispatch] = useReducer(FirebaseReducer, initialState)

//create a function to get the products
const getProducts =  ()=>{
    
    // we make arequest to firebase

     firebase.db
    .collection('products')
    .where('available', '==', true)
     //we only get the available dishes
    .onSnapshot(handleSnapshot)
    
     function  handleSnapshot (snapshot){
        // we use map to get a new array with the dishes
        let dishes =  snapshot.docs.map(doc =>{
            return{
                id:doc.id,
                ...doc.data()
            }
        });
        // order by category using lodash
        dishes = sortBy(dishes, 'category')

        
     
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: dishes
        });

    }
}

    // we return the component with the context so that the props are available all over the app
    return (
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase,
            getProducts
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;