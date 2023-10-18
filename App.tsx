/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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

function App(): JSX.Element {
  
  const products=[
    {
        id:1,
        name:'iPhone 15',
        price:100000,
        category:'mobile'
    },
    {
      id:2,
      name:'Nikon Camera',
      price:10000,
      category:'Camera'
  },
  {
    id:3,
    name:'Panasonic Tubelight',
    price:600,
    category:'Electronics'
}
]
  return (
    
    
        <ScrollView >
          <Header/>
          {
            products.map(
              (product)=><Product product={product}/>
            )
          }

        </ScrollView>
      
      
 
  );
}


export default App;
