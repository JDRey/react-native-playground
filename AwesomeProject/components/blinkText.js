import React, { Component } from 'react';
import {View,  Text } from 'react-native';

export default class BlinkText extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: false };


        //toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }
    render() {
        const display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <View>
                <Text>{display}</Text>
            </View>
        );
    }
}