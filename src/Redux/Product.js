import {View,Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from './Action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { Avatar, Card} from 'react-native-paper';

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

    <Card style={{backgroundColor:'orange', margin:20}} >
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <Card.Title title={product.name}  subtitle="Amazing Product"    />
    </View>
    
    <Card.Cover source={{ uri: product.pic }} style={{margin:10}} />
    <Card.Content>
      
      <Text>{product.id}  </Text>
           
            <Text  variant="bodyMedium" > {product.category}</Text>
            <Text  variant="bodyMedium">{product.price}</Text>
      
    </Card.Content>
    
    <Card.Actions>
    {
                itemCart?
                <Button color="black" title='Remove from Cart' onPress={()=>actionRemoveCart(product)}  style={{marginBottom:10}}/>
                :
                <Button color="black" title='Add to Cart' onPress={()=>actionAddCart(product)} />
            }
    </Card.Actions>
  </Card>
    </View>
    )

}

export default Product;