import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[this.props.newStyle, { alignSelf: 'center', fontWeight: 'bold' }]}>Check out this FlatList!</Text>
                <FlatList
                    data={[
                        { key: 'Damon' },
                        { key: 'Damona' },
                        { key: 'Damonss' },
                        { key: 'Damonw' },
                        { key: 'Damonq' },
                        { key: 'Damone' },
                        { key: 'Damonr' },
                        { key: 'Damont' },
                        { key: 'Damono' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})