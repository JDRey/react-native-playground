import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

import Greeting from './components/greeting';
import BlinkText from './components/blinkText';
import BeautifulText from './components/beautifulText';
import FlexboxExamples from './components/flexboxExamples';
import PizzaTranslator from './components/pizzaTranslator';
import AlertButtons from './components/alertButtons';
import Touchables from './components/touchables';
import FlatListBasics from './components/flatList';
import SectionListBasics from './components/sectionList';

export default class App extends Component {
  render() {
    const bananaPicUrl = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <View style={styles.container}>
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
          <BeautifulText newStyle={styles} />
          <Text style={styles.h2}>Below are a few examples of using layout using flexbox</Text>
          <FlexboxExamples newStyle={styles} />
          {/* TODO: refactor <Text/> components into their respective component files to later use react-native-router to go to diff pages */}
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Translate Text to Pizza!</Text>
          <PizzaTranslator newStyle={styles.inputField} />
          <AlertButtons newStyle={styles.text} />
          <Touchables newStyle={styles.text} />
          <FlatListBasics newStyle={styles.text} />
          <SectionListBasics newStyle={styles.text} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#febebc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
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
  },
  inputField: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
});
