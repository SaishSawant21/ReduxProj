import {View,Text,Button} from 'react-native'

const PassingData = ({navigation}) => {

    const datal = {
        itemId: 86,
        otherParam: 'anything you want here',
      };
     return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('CatchData',datal );
        }}
      />
    </View>
     )
}

export default PassingData