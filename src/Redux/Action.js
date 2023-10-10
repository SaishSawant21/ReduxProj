import { ADD_TO_CART } from "./Constant";

export function add_to_cart(product){
    return {
        type: ADD_TO_CART,
        data:product
    }
}