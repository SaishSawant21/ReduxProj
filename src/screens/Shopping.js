import Product from "../Redux/Product"
import Header from "../Redux/Header"
import { ScrollView, Button } from "react-native"
import BottomBar from "../components/BottomBar"
const Shopping = ({navigation}) =>{
    
  const products=[
    {
        id:1,
        name:'iPhone 15',
        price:100000,
        category:'mobile',
        pic:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692923781972'
    },
    {
      id:2,
      name:'Nikon Camera',
      price:10000,
      category:'Camera',
      pic:'https://imgeng.jagran.com/images/2023/sep/best%20nikon%20cameras%20for%20photography%20ci1694172900406.jpg'
  },
  {
    id:3,
    name:'Panasonic LED Down Lights',
    price:600,
    category:'Electronics',
    pic:'https://5.imimg.com/data5/JS/XA/WK/SELLER-26349945/5w-panasonic-led-down-lights.jpg'
}
]
    return(
        <ScrollView >
        <Header/>
        {
          products.map(
            (product)=><Product product={product}/>
          )
        }

        <Button title="Go back" onPress={() => navigation.goBack()} />
        <BottomBar/>
      </ScrollView>
    
    )

}

export default Shopping