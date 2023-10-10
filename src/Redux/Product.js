import {View,Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { add_to_cart } from './Action';

const Product = (props) => {
    const product= props.product;

   const dispatch =useDispatch();
    actionAddCart=(product)=>{
        dispatch(add_to_cart(product))
    }
    return(
        <View>
            <Text>{product.id}  </Text>
            <Text>{product.name}</Text>
            <Text> {product.category}</Text>
            <Text>{product.price}</Text>
            <Button color="black" title='Add to Cart' onPress={()=>add_to_cart(product)} />
        </View>
    )
}

export default Product;