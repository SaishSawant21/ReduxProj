import { useEffect } from 'react';
import {View,Text} from 'react-native';

const  Landing = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home')
        },3000)
    },[])
    
    return(
        <View>
            <Text style={{textAlign:'center',marginTop:200,fontWeight:'bold',fontSize:18}}>
                Welcome to the app
            </Text>
        </View>
    )
}

export default Landing;