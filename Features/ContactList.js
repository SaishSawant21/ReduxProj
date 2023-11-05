import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import { List } from 'react-native-paper';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      if (Platform.OS === 'android') {
        const status = await check(PERMISSIONS.ANDROID.READ_CONTACTS);

        if (status !== 'granted') {
          const permissionStatus = await request(PERMISSIONS.ANDROID.READ_CONTACTS);
          if (permissionStatus !== 'granted') {
            console.error('Permission to access contacts denied');
            return;
          }
        }
      }

      try {
        const allContacts = await Contacts.getAll();
        setContacts(allContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View>
            <List.Item style={{ backgroundColor: 'lightblue' }} title={item.displayName} />

            {item.phoneNumbers.map((phoneNumber, index) => (
              <List.Item key={index} title={phoneNumber.number} style={{ marginBottom: 2 }} />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default ContactList;