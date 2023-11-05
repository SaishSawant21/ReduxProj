import { GET_USERS_LIST_ERROR, GET_USERS_LIST_SUCCESS } from "./Constant";

const defaultValue = {
          users : [],
          usersError : {}
};

const userReducer = (state = defaultValue, action) => {
          switch (action.type) {
                    case GET_USERS_LIST_SUCCESS:
                              return{
                                        ...state,
                                        users : action.payload
                              } 
                    case GET_USERS_LIST_ERROR:
                              return {
                                        ...state,
                                        userError : action.payload
                              } 
                    default:
                              return state;
          }
}

export default userReducer