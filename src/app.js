import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Sound from 'react-native-sound';
import { Header, Button, SoundPanel, PillFlower } from './components/';
import file from './Lany.mp3';

Sound.setCategory('Playback');
const lany = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + lany.getDuration() + 'number of channels: ' + lany.getNumberOfChannels());
});

let playPause = 1;

class App extends Component {
  render() {
    return (
      <View>

        <Header headerText='Test' />
        <SoundPanel>
          <Button onPress={() => { 
            if(playPause%2 == 0){
              lany.pause();
            }
            if(playPause%2 == 1){
              lany.play();
            }
            playPause = playPause + 1;
            }
          }>
            Play Song 1
          </Button>
          <Button>
            Play Song 2
          </Button>
          <Button>
            Play Song 3
          </Button>
        </SoundPanel>
        <PillFlower />
      </View>
    );
  }
}

export default App;
