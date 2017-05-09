import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Sound from 'react-native-sound';
import { Button, SoundPanel, OverlappingFade } from '../components/';
import Angie23File from '../music/Angie23.mp3';
import ChristallineFile from '../music/Christalline.mp3';
import GoatsFile from '../music/Goats.mp3';
import LifeFile from '../music/Life.mp3';
import LondonBluesFile from '../music/LondonBlues.mp3';
import TheWindowFile from '../music/TheWindow.mp3';
import WinterIsOverFile from '../music/WinterIsOver.mp3';

const styles = {
  viewStyle: {
    backgroundColor: '#000',
    marginTop: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
};

Sound.setCategory('Playback');

// First song
const Angie23 = new Sound(Angie23File, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause = 1;

// Second song
const Christalline = new Sound(ChristallineFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause2 = 1;

// Third song
const Goats = new Sound(GoatsFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause3 = 1;

// Fourth song
const Life = new Sound(LifeFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause4 = 1;

// Fifth song
const LondonBlues = new Sound(LondonBluesFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause5 = 1;

// Sixth song
const TheWindow = new Sound(TheWindowFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});
let playPause6 = 1;

// // Second Song
// const lany2 = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   console.log('duration in seconds: ' + lany2.getDuration() + 'number of channels: ' + lany2.getNumberOfChannels());
// });
// let playPause2 = 1;

class DreamScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden style={{ flex: 0 }} />
        <SoundPanel>
          <Button
            onPress={() => {
              if (playPause % 2 === 0) {
                Angie23.pause();
              }
              if (playPause % 2 === 1) {
                Angie23.play();
              }
              playPause += 1;
            }}
          />
          <Button
            onPress={() => {
              if (playPause2 % 2 === 0) {
                Christalline.pause();
              }
              if (playPause2 % 2 === 1) {
                Christalline.play();
              }
              playPause2 += 1;
            }}
          />
          <Button
            onPress={() => {
              if (playPause3 % 2 === 0) {
                Goats.pause();
              }
              if (playPause3 % 2 === 1) {
                Goats.play();
              }
              playPause3 += 1;
            }}
          />
        </SoundPanel>
        <OverlappingFade />
        <SoundPanel>
          <Button
            onPress={() => {
              if (playPause4 % 2 === 0) {
                Life.pause();
              }
              if (playPause4 % 2 === 1) {
                Life.play();
              }
              playPause4 += 1;
            }
          }
          />
          <Button
            onPress={() => {
              if (playPause5 % 2 === 0) {
                LondonBlues.pause();
              }
              if (playPause5 % 2 === 1) {
                LondonBlues.play();
              }
              playPause5 += 1;
            }
            }
          />
          <Button
            onPress={() => {
              if (playPause6 % 2 === 0) {
                TheWindow.pause();
              }
              if (playPause6 % 2 === 1) {
                TheWindow.play();
              }
              playPause6 += 1;
            }
            }
          />
        </SoundPanel>
      </View>
    );
  }
}

export default DreamScreen;
