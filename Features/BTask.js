import React, { useEffect, useState } from "react";
import { PermissionsAndroid, ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from "react-native-paper";
import BackgroundService from 'react-native-background-actions';



const BTask = () => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'App Notification permission',
          message: 'For Background Access',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Success');
      } else {
        console.log('Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

  const veryIntensiveTask = async (taskDataArguments) => {
    const { delay } = taskDataArguments;
    const numberOfPokemons = 200; // You can change this number as needed
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemons}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const pokemons = data.results;
  
      for (let i = 0; BackgroundService.isRunning() && i < pokemons.length; i++) {
        const pokemonName = pokemons[i].name;
        await BackgroundService.updateNotification({ taskDesc: `Pokemon Name: ${pokemonName}` });
        setIsRunning(true);
        await sleep(delay);
      }
    } catch (error) {
      console.error('Error fetching Pokemon data', error);
    }
  };
  const options = {
    taskName: 'RNP Task',
    taskTitle: 'Background Task',
    taskDesc: 'To run in background',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
      package: 'com.reduxproj',
    },
    color: '#0047AB',
    linkingURI: 'yourSchemeHere://chat/saish',
    parameters: {
      delay: 1000,
    },
  };

  useEffect(() => {
      if (BackgroundService.isRunning()) {
        setIsRunning(true);
      }else{
        setIsRunning(false);
      }
  }, []);

  const startBackgroundTask = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' });
  }

  const stopBackgroundTask = async () => {
    setIsRunning(false);
    await BackgroundService.stop();
  }

  return (
    <SafeAreaView>
      
      <ScrollView>
        <View>
          {!isRunning ? <View>
            <Button mode="contained" onPress={startBackgroundTask} style={{margin:10}}>
            Start Background Task
          </Button>
            
          </View> : <View>
          <Button mode="contained"  onPress={stopBackgroundTask} style={{margin:10}}>
            Stop Background Task
          </Button>
            
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default BTask;