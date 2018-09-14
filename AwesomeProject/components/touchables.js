import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
    //onPress method to pop an alert message when called
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    //onLongPressButton method to pop an alert when called after long-pressing button
    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    render() {
        return (
            <View style={[styles.container, { alignSelf: 'stretch' }]}>
                <Text style={[this.props.newStyle, { alignSelf: 'center', fontWeight: 'bold' }]}>Test these Touchables out!</Text>
                {/* TODO: the underlay color is extending past buttonBottom, maybe the marginBottom affecting it and parent View >.< */}
                <TouchableHighlight onPress={this._onPressButton} underlayColor='#febebc'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ?
                        TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton}
                    underlayColor='#febebc'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight tap and long</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        margin: 20,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})