import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Greeting from './components/greeting';
import BlinkText from './components/blinkText';
import BeautifulText from './components/beautifulText';

export default class App extends Component {
  render() {
    const bananaPicUrl = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Button
          title='Test Button'
          color='#3279ad'
          accessibilityLabel='Learn more about this blue button'
        />
        <Text style={styles.h2}>Hello, World!</Text>
        <Text style={styles.text}>To start things off, here is a picture of some bananas:</Text>
        <Image source={bananaPicUrl} style={styles.image} />
        <Text style={styles.text}>... and here are some people who love them:</Text>
        <Greeting name='Plam' />
        <Greeting name='Plob' />
        <Greeting name='Pleb' />
        <Greeting name='Plake' />
        <Text style={styles.text}>Next are some timed state changes:</Text>
        <BlinkText text='I love to blink!' />
        <BlinkText text='I love to blink, too!' />
        <BlinkText text='Dont leave me out of this!!' />
        <BlinkText text='Hey, what about me?' />
        <Text style={styles.text}>...and some styled text!</Text>
        <BeautifulText newStyle={styles}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#febebc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#19405e',
    fontSize: 20,
  },
  h2: {
    fontSize: 30
  },
  image: {
    width: 200,
    height: 120,
  }
});
