import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <View>
                <Text>Hello, my name is {this.props.name}!</Text>
            </View>
        );
    }
}