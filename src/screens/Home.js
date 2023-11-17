import {View,Text, Button,TouchableOpacity} from 'react-native'
import Shopping from './Shopping'
const Home = ({navigation}) => {
    return(
        
             <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
                
                onPress={() => navigation.navigate('Shop')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Shop</Text></TouchableOpacity>
           
           <TouchableOpacity
                
                onPress={() => navigation.navigate('Camera')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Camera</Text></TouchableOpacity>
           
           <TouchableOpacity
                
                onPress={() => navigation.navigate('Fmanager')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>File Manager</Text></TouchableOpacity>

            <TouchableOpacity
                
                onPress={() => navigation.navigate('ContactList')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Contacts</Text></TouchableOpacity>

            
            <TouchableOpacity
                
                onPress={() => navigation.navigate('Task')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Background Task</Text></TouchableOpacity>

            <TouchableOpacity
                
                onPress={() => navigation.navigate('Share')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Share An Message</Text></TouchableOpacity>
         
         <TouchableOpacity
                
                onPress={() => navigation.navigate('Flex')} style={{alignItems:'start',borderWidth:0.5}}
            ><Text style={{color:'black',fontSize:24, marginLeft:5}}>Flex</Text></TouchableOpacity>

    </View>
        
        
    )
}

export default Home