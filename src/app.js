import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';

export default class App extends PureComponent {
    state = {
        name: 'Brendan',
        latitude: '',
        longitude: '',
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        }, {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 1000,
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    takePicture = async () => {
        try {
            let { path } = await this.camera.capture();
            let base64 = await RNFetchBlob.fs.readFile(path, 'base64');

            console.log('sending image...', this.state)
            // send mail to google cloud function here...
            axios.post('https://us-central1-run-safe.cloudfunctions.net/sendEmail', {
                name: this.state.name,
                base64,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            })
        } catch(error) {
            console.log("error", error);
        }
    }

    render() {
        console.log('rendering the app...')
        return (
            <View style={styles.container}>
                <Camera
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    ref={cam => this.camera = cam}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}
                    >
                        [CAPTURE]
                    </Text>
                </Camera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

