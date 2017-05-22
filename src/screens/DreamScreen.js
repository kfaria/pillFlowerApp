import React, { Component } from 'react';
import { View, Animated, StatusBar } from 'react-native';
import Sound from 'react-native-sound';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Button, SoundPanel, OverlappingFade } from '../components/';
import ArabellaFile from '../music/Arabella.mp3';
import ChristallineFile from '../music/Christalline.mp3';
import BellaFile from '../music/Bella.mp3';
import DarkBarkFile from '../music/DarkBark.mp3';
import LondonBluesFile from '../music/LondonBlues.mp3';
import DarksideFile from '../music/Darkside.mp3';

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
const Arabella = new Sound(ArabellaFile, Sound.MAIN_BUNDLE, (error) => {
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
const Bella = new Sound(BellaFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

// Fourth song
const DarkBark = new Sound(DarkBarkFile, Sound.MAIN_BUNDLE, (error) => {
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
const Darkside = new Sound(DarksideFile, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

class DreamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0, // The current track being played, 0 means null
      opacityButtonOne: new Animated.Value(1),
      opacityButtonTwo: new Animated.Value(1),
      opacityButtonThree: new Animated.Value(1),
      opacityButtonFour: new Animated.Value(1),
      opacityButtonFive: new Animated.Value(1),
      opacityButtonSix: new Animated.Value(1),
    };
    setInterval(() => {
      console.log(this.props.navigation)
      switch (this.state.currentTrack) {
        case 1:
          if (this.state.opacityButtonOne._value === 1) {
            Animated.timing(
              this.state.opacityButtonOne,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonOne,
              {
                toValue: 1,
                duration: 550,
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
          if (this.state.opacityButtonTwo._value === 1) {
            Animated.timing(
              this.state.opacityButtonTwo,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonTwo,
              {
                toValue: 1,
                duration: 550,
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
          if (this.state.opacityButtonThree._value === 1) {
            Animated.timing(
              this.state.opacityButtonThree,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonThree,
              {
                toValue: 1,
                duration: 550,
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
          if (this.state.opacityButtonFour._value === 1) {
            Animated.timing(
              this.state.opacityButtonFour,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonFour,
              {
                toValue: 1,
                duration: 550,
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
          if (this.state.opacityButtonFive._value === 1) {
            Animated.timing(
              this.state.opacityButtonFive,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonFive,
              {
                toValue: 1,
                duration: 550,
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
          if (this.state.opacityButtonSix._value === 1) {
            Animated.timing(
              this.state.opacityButtonSix,
              {
                toValue: 0.3,
                duration: 550,
              },
            ).start();
          } else {
            Animated.timing(
              this.state.opacityButtonSix,
              {
                toValue: 1,
                duration: 550,
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
            opacityButtonOne: new Animated.Value(1),
            opacityButtonTwo: new Animated.Value(1),
            opacityButtonThree: new Animated.Value(1),
            opacityButtonFour: new Animated.Value(1),
            opacityButtonFive: new Animated.Value(1),
            opacityButtonSix: new Animated.Value(1),
          });
      }
    }, 570);
  }
  // onScreenChange() {
  //   Arabella.stop();
  //   Christalline.stop();
  //   Bella.stop();
  //   LondonBlues.stop();
  //   DarkBark.stop();
  //   Darkside.stop();
  // }
  // If a track other than the selected button is pressed, stop it and play the new one
  // Called each time a music button is pressed
  musicToggle(musicToBePlayed, trackNumberToBePlayed, nameOfSong) {
    if ((this.state.currentTrack !== 0) && (this.state.currentTrack !== trackNumberToBePlayed)) {
      // Music on and next track is a different track, turn off old, turn on next
      Arabella.stop();
      Christalline.stop();
      Bella.stop();
      LondonBlues.stop();
      DarkBark.stop();
      Darkside.stop();
      musicToBePlayed.play();
      this.setState({ currentTrack: trackNumberToBePlayed });
      this.refs.toast.show(nameOfSong, DURATION.LENGTH_LONG);
    } else if ((this.state.currentTrack !== 0) && (this.state.currentTrack === trackNumberToBePlayed)) {
      // Music on and pressed same button, turn off current song
      musicToBePlayed.stop();
      this.setState({ currentTrack: 0 });
    } else if (this.state.currentTrack === 0) {
      this.refs.toast.show(nameOfSong, DURATION.LENGTH_LONG);
      // Music is off, turn on selected song
      musicToBePlayed.play();
      this.setState({ currentTrack: trackNumberToBePlayed });
    } else {
      console.log('somethings wrong');
    }
  }
  renderToast() {
    switch (this.state.currentTrack) {
      case 1:
        return (
          <Toast
            ref="toast"
            position="top"
            positionValue={60}
          />
        );
      case 2:
        return (
          <Toast
            ref="toast"
            position="top"
            positionValue={120}
          />
        );
      case 3:
        return (
          <Toast
            ref="toast"
            position="top"
            positionValue={180}
          />
        );
      case 4:
        return (
          <Toast
            ref="toast"
            position="bottom"
            positionValue={60}
          />
        );
      case 5:
        return (
          <Toast
            ref="toast"
            position="bottom"
            positionValue={120}
          />
        );
      case 6:
        return (
          <Toast
            ref="toast"
            position="bottom"
            positionValue={180}
          />
        );
      default:
        return (
          <Toast
            ref="toast"
          />
        );
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden style={{ flex: 0 }} />
        <SoundPanel>
          <Animated.View style={{ opacity: this.state.opacityButtonOne }}>
            <Button
              onPress={() => this.musicToggle(LondonBlues, 1, 'London Blues by Tony Smith')}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonTwo }}>
            <Button
              onPress={() => this.musicToggle(Christalline, 2, 'Christalline by Tony Smith')}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonThree }}>
            <Button
              onPress={() => this.musicToggle(Bella, 3, 'Bella by Tony Smith')}
            />
          </Animated.View>
        </SoundPanel>
        <OverlappingFade />
        <SoundPanel>
          <Animated.View style={{ opacity: this.state.opacityButtonFour }}>
            <Button
              onPress={() => this.musicToggle(DarkBark, 4, 'DarkBark by Tony Smith')}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonFive }}>
            <Button
              onPress={() => this.musicToggle(Arabella, 5, 'Arabella by Tony Smith')}
            />
          </Animated.View>
          <Animated.View style={{ opacity: this.state.opacityButtonSix }}>
            <Button
              onPress={() => this.musicToggle(Darkside, 6, 'The Window by Tony Smith')}
            />
          </Animated.View>
        </SoundPanel>
        {this.renderToast()}
      </View>
    );
  }
}

export default DreamScreen;
