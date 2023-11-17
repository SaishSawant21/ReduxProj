import React from 'react';
import {StyleSheet, View,Button} from 'react-native';
import {useState} from 'react'

const FlexScreen = () => {

    const [count,setCount] = useState(1);

    const ViewBlock =   <View style={{flex:1,backgroundColor:'white',padding:10,margin:10}} />;

    const ChangBcolor = () =>{
        if(count===4){
            setCount(1)
        }
        if(count>3){
            setCount(1);
        }else{
            setCount(count+1);
        }
    }
    return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red',flexDirection:'row'}} >
      {
        count ===4 ? setCount(1) : ''
      }
      {
       count===1 ? ViewBlock : <View style={{flex:1,backgroundColor:'gray',padding:10,margin:10}}/>

      }
      {
        count===2 ? ViewBlock : <View style={{flex:1,backgroundColor:'blue',padding:10,margin:10}} />
      }

      {
        count===3 ? ViewBlock : <View style={{flex:1,backgroundColor:'yellow',padding:10,margin:10}} />
      }
       
        
        </View>
      <View style={{flex: 1, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
      <Button title='click' onPress={ChangBcolor}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FlexScreen;