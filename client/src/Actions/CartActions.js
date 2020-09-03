import { ADD_TO_CART, ADD_SHIPPING, SUB_SHIPPING, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from './type'
import axios from 'axios'

export const addToCart = (id) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        id 
    }) 
}
export const addShipping = (id) => dispatch => {
    dispatch({
        type: ADD_SHIPPING,
        id 
    }) 
}
export const substractShipping = (id) => dispatch => {
    dispatch({
        type: SUB_SHIPPING,
        id 
    }) 
}
export const removeItem = (id) => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        id 
    }) 
}
export const addQuantity = (id) => dispatch => {
    dispatch({
        type: ADD_QUANTITY,
        id 
    }) 
}
export const subQuantity = (id) => dispatch => {
    dispatch({
        type: SUB_QUANTITY,
        id 
    }) 
}