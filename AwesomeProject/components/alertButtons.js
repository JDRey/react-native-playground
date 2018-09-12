import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';

export default class AlertButtons extends Component {
    //onPress method to pop alert on page
    _onPressButton() {
        Alert.alert('You tapped the Button!');
    }

    render() {
        return (
            <View style={[styles.container, { alignSelf: 'stretch' }]}>
                <Text style={[this.props.newStyle, { alignSelf: 'center', fontWeight: 'bold' }]}>Test these buttons out!</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title='Press Me'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title='Press Me'
                        color='#841584'
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title='This looks great!'
                    />
                    <Button
                        onPress={this._onPressButton}
                        title='OK!'
                        color='#878833'
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})