import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class HomeScreen extends PureComponent {
    static navigationOptions = {
        title: 'runSafe'
    }

    onButtonPress = () => this.props.navigation.navigate('camera')

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexRow}>
                    <Text>Hi</Text>
                    <Text>Brendan</Text>
                </View>

                <View style={styles.flexRow}>
                    <Text>Your emergency email contact:</Text>
                    <Text>brendan@gmail.com</Text>
                </View>
                <Text>This will be sent in an email and SMS message</Text>

                <View style={styles.flexRow}>
                    <Text>Your emergency phone contact:</Text>
                    <Text>15163187361</Text>
                    <Text>Brendan</Text>
                </View>
                <Text>This will be sent in an email and SMS message</Text>

                <View style={styles.flexRow}>
                    <Text>Your current position:</Text>
                </View>
                <Text>This will be sent in an email and SMS message</Text>

                <TouchableHighlight onPress={this.onButtonPress}>
                    <Text>Open Camera</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: 'blue',
    },
    flexRow: {
        flexDirection: 'row',
        marginTop: 20,
    },
});
