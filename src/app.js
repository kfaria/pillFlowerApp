import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import PillFlower from './components/PillFlower';

class App extends Component {
  render() {
    return (
      <View>
        {/*<Header headerText='Test' />*/}
        <Text>An App</Text>
        <PillFlower testText={'this is a test it better fuckin work'} />
      </View>
    );
  }
}

export default App;
