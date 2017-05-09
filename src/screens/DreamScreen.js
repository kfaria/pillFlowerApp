import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Sound from 'react-native-sound';
import { Button, SoundPanel, OverlappingFade } from '../components/';
import file from '../Lany.mp3';

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

class DreamScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden style={{ flex: 0 }} />
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
            }}
          />
          <Button
            onPress={() => {
              if (playPause % 2 === 0) {
                lany.pause();
              }
              if (playPause % 2 === 1) {
                lany.play();
              }
              playPause += 1;
            }}
          />
          <Button
            onPress={() => {
              if (playPause % 2 === 0) {
                lany.pause();
              }
              if (playPause % 2 === 1) {
                lany.play();
              }
              playPause += 1;
            }}
          />
        </SoundPanel>
        <OverlappingFade />
        <SoundPanel>
          <Button
            onPress={() => {
              if (playPause2 % 2 === 0) {
                lany2.pause();
              }
              if (playPause2 % 2 === 1) {
                lany2.play();
              }
              playPause2 += 1;
            }
          }
          />
          <Button
            onPress={() => {
              if (playPause2 % 2 === 0) {
                lany2.pause();
              }
              if (playPause2 % 2 === 1) {
                lany2.play();
              }
              playPause2 += 1;
            }
            }
          />
          <Button
            onPress={() => {
              if (playPause2 % 2 === 0) {
                lany2.pause();
              }
              if (playPause2 % 2 === 1) {
                lany2.play();
              }
              playPause2 += 1;
            }
            }
          />
        </SoundPanel>
      </View>
    );
  }
}

export default DreamScreen;
