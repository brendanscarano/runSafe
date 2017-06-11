import React, { PureComponent } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import CameraScreen from './screens/Camera';

export default class App extends PureComponent {
    state = {
        name: 'Brendan',
        latitude: '',
        longitude: '',
    }

    componentDidMount() {
        // this.watchId = navigator.geolocation.watchPosition(position => {
        //     this.setState({
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //     })
        // }, {
        //     enableHighAccuracy: true,
        //     timeout: 2000,
        //     maximumAge: 1000,
        // })
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        const MainNavigator = TabNavigator({
            welcome: {
                screen: WelcomeScreen
            },
            main: {
                screen: StackNavigator({
                    home: { screen: HomeScreen },
                    camera: { screen: CameraScreen },
                })
            }
        }, {
            lazy: true,
            tabBarPosition: 'bottom',
            initialRouteName: 'main',
            navigationOptions: {
                tabBarVisible: false,
            },
        });

        return (
            <MainNavigator />
        )
    }
}
