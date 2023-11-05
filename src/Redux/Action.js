import { ADD_TO_CART,REMOVE_FROM_CART, GET_USERS_LIST_CALLED } from "./Constant";

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

export function getUsersList(){
    return {
              type: GET_USERS_LIST_CALLED,
    }
}




export function get_user_list(){
    return{
        type: USER_LIST
    }
}