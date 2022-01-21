import React, { useReducer } from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

import { SELECT_PRODUCT } from '../../types'

const OrdersState = props => {
    // we create the initial state

    const initialState = {
        orders: [],
        dish: null
    }
    const [state, dispatch] = useReducer(OrdersReducer, initialState)

    //select the product that the user wants to order
    const selectDish = (dish) => {
        dispatch( {
            type: SELECT_PRODUCT,
            payload: dish
        })
    }

    // we return the component with the context so that the props are available all over the app
    return (
        <OrdersContext.Provider
            value={{
                orders: state.orders,
                dish: state.dish,
                selectDish
            }}
        >
            {props.children}
        </OrdersContext.Provider>
    )
}
export default OrdersState;