import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Sound } from 'react-native-simple-sound';
import { Header, Button, SoundPanel } from './components/';


class App extends Component {

  
  render() {
    return (
      <View>
        <Header headerText='Test' />
        <SoundPanel>
          <Button onPress={ () => console.log('hi') } >
            Play Song 1
          </Button>
          <Button>
            Play Song 2
          </Button>
          <Button>
            Play Song 3
          </Button>
        </SoundPanel>
      </View>
    );
  }
}

export default App;
