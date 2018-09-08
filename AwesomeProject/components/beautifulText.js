import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BeautifulText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Text style={this.props.newStyle.h2}>by prop</Text>
                <Text style={[this.props.newStyle.h2, styles.red]}>by prop, then red</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    bigblue: {
        color: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
    },
});