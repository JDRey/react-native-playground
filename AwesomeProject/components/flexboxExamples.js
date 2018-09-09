import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class FlexboxExamples extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={this.props.newStyle.text}>flexDirection example - determines primary axis of layout - organized horizontaly/row or vertically/column?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>
                <Text style={this.props.newStyle.text}>justifyContent example - determines distribution of children along primary axis - distribute start, center, end, around, between, or evenly?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>
                <Text style={this.props.newStyle.text}>alignItems example - determines alignment of children along secondary axis - if row, then column is secondary - align start, center, end, or stretch/without fixed dimension?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>
            </View>
        );
    }
};