import {View,Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from './Action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Product = (props) => {
    const product= props.product;
    const [itemCart,setItemCart] = useState(false)
    const cartItem = useSelector((state)=>state.reducer)
    
    useEffect(()=>{
        //works like forEach
        let items = cartItem.filter((electronic)=>{
            return electronic.id === product.id
        })
        if(items.length){
            setItemCart(true)
        }else{
            setItemCart(false)
        }
    },[cartItem])
   const dispatch =useDispatch();

    actionAddCart=(product)=>{
        dispatch(add_to_cart(product))
    }

    actionRemoveCart=(product)=>{
        dispatch(remove_from_cart(product.id))
    }
    return(
        <View>
            <Text>{product.id}  </Text>
            <Text>{product.name}</Text>
            <Text> {product.category}</Text>
            <Text>{product.price}</Text>
            {
                itemCart?
                <Button color="black" title='Remove from Cart' onPress={()=>actionRemoveCart(product)}  />
                :
                <Button color="black" title='Add to Cart' onPress={()=>actionAddCart(product)} />
            }
        </View>
    )
}

export default Product;