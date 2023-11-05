import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import { List } from 'react-native-paper';
const CList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch all contacts
    Contacts.getAll()
      .then(allContacts => {
        setContacts(allContacts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View>
           <List.Item style={{backgroundColor:'lightblue'}}
    title={item.displayName}
   
    
  />
  
  {item.phoneNumbers.map((phoneNumber, index) => (
              <List.Item key={index} title= {phoneNumber.number}style={{marginBottom:2}}  />
            ))}
           
          </View>
        )}
      />
    </View>
  );
};

export default CList;
