import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';

export default function runSafe() {
    return (
        <App />
    );
}

AppRegistry.registerComponent('runSafe', () => runSafe);
