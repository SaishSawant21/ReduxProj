import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import { useSelector } from 'react-redux';
const Header = () =>{
    const cartItem = useSelector((state)=>state.reducer)
     console.log(cartItem)
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setCount(cartItem.length)
    },[cartItem])
    
    return (

    <View style={{backgroundColor:'black'}}>
        <IconBadge style={{alignItems:'center'}}
            MainElement={
         <Icon name='cart' style={{fontSize:12,textAlign:'right',color:'white', fontSize:50}} />
            }
            BadgeElement={
            <Text style={{color:'#FFFFFF'}}>{count}</Text>
            }
            IconBadgeStyle={
            {width:30,
            height:30,
            backgroundColor: '#FF00EE'}
            }
            Hidden={count==0}
            /> 
            <Text style={{color:'white', textAlign:'right'}}>{count}</Text>
</View>
    )
}

export default Header;