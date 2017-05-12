import React, { Component } from 'react';
import { View, Animated, StatusBar } from 'react-native';
import Sound from 'react-native-sound';
import { Button, SoundPanel, OverlappingFade } from '../components/';
import Angie23File from '../music/Angie23.mp3';
import ChristallineFile from '../music/Christalline.mp3';
import GoatsFile from '../music/Goats.mp3';
import LifeFile from '../music/Life.mp3';
import LondonBluesFile from '../music/LondonBlues.mp3';
import TheWindowFile from '../music/TheWindow.mp3';

const styles = {
  viewStyle: {
    backgroundColor: '#000',
    marginTop: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
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

// Second song
const Christalline = new Sound(ChristallineFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// Third song
const Goats = new Sound(GoatsFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// Fourth song
const Life = new Sound(LifeFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// Fifth song
const LondonBlues = new Sound(LondonBluesFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// Sixth song
const TheWindow = new Sound(TheWindowFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// const WinterIsOver = new Sound(WinterIsOverFile, Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   console.log('should be working');
// });

class DreamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0, // The current track being played, 0 means null
      buttonToPulse: null,
      opacityButtonOne: new Animated.Value(1),
      opacityButtonTwo: new Animated.Value(1),
      opacityButtonThree: new Animated.Value(1),
      opacityButtonFour: new Animated.Value(1),
      opacityButtonFive: new Animated.Value(1),
      opacityButtonSix: new Animated.Value(1),
    };
    setInterval(() => {
      switch (this.state.currentTrack) {
        case 1:
          if (this.state.opacityButtonOne._value === 1) {
            Animated.timing(
              this.state.opacityButtonOne,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonOne,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
          break;
        case 2:
          this.setState({ buttonToPulse: this.state.opacityButtonTwo });
          if (this.state.opacityButtonTwo._value === 1) {
            Animated.timing(
              this.state.opacityButtonTwo,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonTwo,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonOne: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
          break;
        case 3:
          this.setState({ buttonToPulse: this.state.opacityButtonThree });
          this.setState({ buttonToPulse: this.state.opacityButtonThree });
          if (this.state.opacityButtonThree._value === 1) {
            Animated.timing(
              this.state.opacityButtonThree,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonThree,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
          break;
        case 4:
          this.setState({ buttonToPulse: this.state.opacityButtonFour });
          if (this.state.opacityButtonFour._value === 1) {
            Animated.timing(
              this.state.opacityButtonFour,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonFour,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
          break;
        case 5:
          this.setState({ buttonToPulse: this.state.opacityButtonFive });
          if (this.state.opacityButtonFive._value === 1) {
            Animated.timing(
              this.state.opacityButtonFive,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonFive,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
          break;
        case 6:
          this.setState({ buttonToPulse: this.state.opacityButtonOne });
          if (this.state.opacityButtonSix._value === 1) {
            Animated.timing(
              this.state.opacityButtonSix,
              {
                toValue: 0.3,
                duration: 450,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonSix,
              {
                toValue: 1,
                duration: 450,
              },
            ).start();
          }
          this.setState({
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
          });
          break;
        default:
          this.setState({
            buttonToPulse: null,
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });

      }
    }, 500);
  }
  // If a track other than the selected button is pressed, stop it and play the new one
  // Called each time a music button is pressed
  musicToggle(musicToBePlayed, trackNumberToBePlayed) {
    if ((this.state.currentTrack !== 0) && (this.state.currentTrack !== trackNumberToBePlayed)) {
      // Music on and next track is a different track, turn off old, turn on next
      Angie23.stop();
      Christalline.stop();
      Goats.stop();
      LondonBlues.stop();
      Life.stop();
      TheWindow.stop();
      musicToBePlayed.play();
      this.setState({ currentTrack: trackNumberToBePlayed });
    } else if ((this.state.currentTrack !== 0) && (this.state.currentTrack === trackNumberToBePlayed)) {
      // Music on and pressed same button, turn off current song
      musicToBePlayed.stop();
      this.setState({ currentTrack: 0 });
    } else if (this.state.currentTrack === 0) {
      // Music is off, turn on selected song
      musicToBePlayed.play();
      this.setState({ currentTrack: trackNumberToBePlayed });
    } else {
      console.log('somethings fucky');
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden style={{ flex: 0 }} />
        <SoundPanel>
          <Animated.View style={{ opacity: this.state.opacityButtonOne }}>
            <Button
              onPress={() => this.musicToggle(Angie23, 1)}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonTwo }}>
            <Button
              onPress={() => this.musicToggle(Christalline, 2)}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonThree }}>
            <Button
              onPress={() => this.musicToggle(Goats, 3)}
            />
          </Animated.View>
        </SoundPanel>
        <OverlappingFade />
        <SoundPanel>
          <Animated.View style={{ opacity: this.state.opacityButtonFour }}>
            <Button
              onPress={() => this.musicToggle(Life, 4)}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonFive }}>
            <Button
              onPress={() => this.musicToggle(LondonBlues, 5)}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonSix }}>
            <Button
              onPress={() => this.musicToggle(TheWindow, 6)}
            />
          </Animated.View>
        </SoundPanel>
      </View>
    );
  }
}

export default DreamScreen;
