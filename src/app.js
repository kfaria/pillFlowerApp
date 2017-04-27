import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Sound from 'react-native-sound';
import { Header, Button, SoundPanel } from './components/';
import file from './Lany.mp3';

Sound.setCategory('Playback');
const lany = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + lany.getDuration() + 'number of channels: ' + lany.getNumberOfChannels());
});

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Test' />
        <SoundPanel>
          <Button>
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
