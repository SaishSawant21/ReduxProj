import { ADD_TO_CART,REMOVE_FROM_CART } from "./Constant";

export function add_to_cart(product){
    return {
        type: ADD_TO_CART,
        data:product
    }
}

export function remove_from_cart(product){
    return {
        type: REMOVE_FROM_CART,
        data:product
    }
}