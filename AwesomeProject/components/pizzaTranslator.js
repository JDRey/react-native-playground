import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{ alignSelf: 'stretch', padding: 10 }}>
                <TextInput
                    style={this.props.newStyle}
                    placeholder='Type here to translate!'
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 10, fontSize: 35 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}