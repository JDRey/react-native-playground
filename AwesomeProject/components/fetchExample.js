import React, { Component } from 'react';
import { FlatList, Image, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        const URL = 'https://facebook.github.io/react-native/movies.json';
        return fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                });
            })
            .catch((error) => {
                console.log((error) => {
                    console.log(error);
                })
            })
    }

    render() {
        if (this.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({ id }, index) => id}
                />
                {/* TODO: below snippet for rn challenge */}
                {/* <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <View>
                        <Image style={{ width: 66, height: 58 }}
                            source={{ uri: item.fields.image_url.stringValue }} />
                        <Text>{item.fields.name.stringValue}</Text>
                    </View>}
                    keyExtractor={({ name }, index) => name}
                /> */}
            </View>
        );
    }
}