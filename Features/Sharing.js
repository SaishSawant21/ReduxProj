import React, { useState } from 'react';
import { View } from 'react-native';
import Share from 'react-native-share';
import {Button,TextInput} from 'react-native-paper';

const Sharing = () => {
  const [message, setMessage] = useState('');

  const shareTypedMessage = async () => {
    try {
      const shareOptions = {
        title: 'Share via',
        message: message,
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={(text) => setMessage(text)} style={{marginTop:10}}
      />
      
      <Button  icon='share' mode="contained" onPress={shareTypedMessage}  style={{margin:10}}>Share Message</Button>
    </View>
  );
};

export default Sharing;
