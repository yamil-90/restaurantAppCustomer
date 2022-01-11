import React, {useReducer} from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from '../firebaseConnect'

const FirebaseState = props =>{
// we create the initial state

const initialState = {
    menu: []
}
const [state, dispatch] = useReducer(FirebaseReducer, initialState)


    // we return the component with the context so that the props are available all over the app
    return (
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;