const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { get_user_list } = require("./Action");



const User_List =() => {
    const dispatch = useDispatch();
    //const User_List =useSelector (())
}


useEffect(()=>{
    dispatch(get_user_list)
},)