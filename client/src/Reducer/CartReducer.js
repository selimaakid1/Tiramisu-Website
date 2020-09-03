import { v4 as uuid } from 'uuid'
import {ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, ADD_SHIPPING, SUB_QUANTITY, SUB_SHIPPING} from '../Actions/type'

const initState = {
    items: [
        {
            id: uuid(),
            img: 'https://www.mascherpatiramisu.com/wp-content/uploads/2020/04/Tiramisu-piccolo-300x300.png',
            name: 'Tiramisù | Small',
            smallname: 'Monoportion',
            price: 5.000
    
        },
        {
        id: uuid(),
        img: 'https://www.mascherpatiramisu.com/wp-content/uploads/2020/04/Tiramisu-piccolo-300x300.png',
        name: 'Tiramisù | Medium',
        smallname: 'Monoportion',
        price: 6.000

    },
    {
        id: uuid(),
        img: 'https://www.mascherpatiramisu.com/wp-content/uploads/2020/04/Tiramisu-medio-300x300.png',
        name: 'Tiramisù | Large',
        price: 12.000
    },
    {
        id: uuid(),
        img: 'https://www.mascherpatiramisu.com/wp-content/uploads/2020/04/Tiramisu-grande1-300x300.png',
        name: 'Tiramisù | XL',
        price: 25.000
    }
    ], 
    addedItems: [],
    total: 0
}

const CartReducer = (state= initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
        }
        let newTotal = state.total + addedItem.price

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 7
        }
    }
    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 7
        }
    }
    else {
        return state;
    }
}
export default CartReducer