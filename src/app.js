import React, { Component } from 'react';
import { View, Text, Image, PanResponder, Animated } from 'react-native';
import Sound from 'react-native-sound';
import ImageZoom from 'react-native-image-pan-zoom';
import { Header, Button, SoundPanel, OverlappingFade, Toggle, PillButton, PanZoom } from './components/';
import file from './Lany.mp3';

Sound.setCategory('Playback');

// First song
const lany = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + lany.getDuration() + 'number of channels: ' + lany.getNumberOfChannels());
});
let playPause = 1;

// Second Song
const lany2 = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + lany2.getDuration() + 'number of channels: ' + lany2.getNumberOfChannels());
});
let playPause2 = 1;

class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <SoundPanel>
          <Button
            onPress={() => {
              if (playPause % 2 === 0) {
                lany.pause();
              }
              if (playPause % 2 === 1) {
                lany.play();
              }
              playPause += 1;
            }}>
          </Button>
          <Button>
          </Button>
          <Button>
          </Button>
        </SoundPanel>
          <PanZoom>
            <View>
              <Text style={{color: 'red', fontSize: 25}}>Hi</Text>
            </View>
          </PanZoom>

        <SoundPanel>
         <Button onPress={() => {
            if (playPause2 % 2 === 0) {
              lany2.pause();
            }
            if (playPause2 % 2 === 1) {
              lany2.play();
            }
            playPause2 = playPause2 + 1;
          }
          }>
          </Button>
          <Button>
          </Button>
          <Button>
            
          </Button>
          <Toggle />
        </SoundPanel>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(0,0,0)',
    marginTop: 20,
    justifyContent: 'space-between',
    flex: 1,
    // marginTop: 20,
  },
};

export default App;
