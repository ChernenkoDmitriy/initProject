/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
console.disableYellowBox = true; // disable all yellow warnings

AppRegistry.registerComponent(appName, () => App);
