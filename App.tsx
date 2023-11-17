/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import GetData from './src/RestApi/GetData'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,

  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Product from './src/Redux/Product';
import Header from './src/Redux/Header';
import BottomBar from './src/components/BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shopping from './src/screens/Shopping';
import Home from './src/screens/Home';
import CameraFeature from './Features/CameraFeature';
import FileManager from './Features/FileManager';
import ContactList from './Features/ContactList';
import BTask from './Features/BTask';
import Sharing from './Features/Sharing';
import FlexScreen from './src/screens/FlexScreen';
import Landing from './src/screens/Landing';
import PassingData from './src/components/PassingData';
import CatchData from './src/components/CatchData';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  const screenOptions = {
    headerShown: false
}

  return (
    
    
        
         
          <NavigationContainer>
              <Stack.Navigator>
              <Stack.Screen name="Landing" component={Landing} options={screenOptions}/>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Shop" component={Shopping} options={screenOptions} />
              <Stack.Screen name="Camera" component={CameraFeature} options={screenOptions} />
              <Stack.Screen name="Fmanager" component={FileManager} options={screenOptions} />
              <Stack.Screen name="ContactList" component={ContactList} />
              <Stack.Screen name="Task" component={BTask}  />
              <Stack.Screen name="Share" component={Sharing} />
              <Stack.Screen name="Flex" component={FlexScreen}/>
              <Stack.Screen name="PassData" component={PassingData}/>
              <Stack.Screen name="CatchData" component={CatchData}/>
              </Stack.Navigator>
          </NavigationContainer>
  );
}


export default App;
