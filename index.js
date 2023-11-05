/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

const AppRedux = ()=>(
    <Provider store={store}>
        <PaperProvider>
        <App/>
      </PaperProvider>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);