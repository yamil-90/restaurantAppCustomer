import React, {useReducer} from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

const OrdersState = props =>{
// we create the initial state

const initialState = {
    orders:[]
}
const [state, dispatch] = useReducer(OrdersReducer, initialState)


    // we return the component with the context so that the props are available all over the app
    return (
        <OrdersContext.Provider
        value={{
            orders: state.orders
        }}
        >
            {props.children}
        </OrdersContext.Provider>
    )
}
export default OrdersState;