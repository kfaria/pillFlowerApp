import React, { Component } from 'react';
import { View, Animated, Text, Dimensions, StatusBar, TouchableOpacity, Image } from 'react-native';
import { PillLibrary } from '../components';
import greenBackground from '../images/backgrounds/bkgd green canvas.png';
import whiteBackground from '../images/backgrounds/bkgd white canvas.png';
import blackBackground from '../images/backgrounds/bkgd black canvas.png';
import arrow from '../images/arrow.png';

const { height, width } = Dimensions.get('window');
const styles = {
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerStyle: {
    position: 'absolute',
    left: 0,
  },
  buttonStyle: {
    height: 100,
    width: 100,
  },
  imageStyle: {
    height: 100,
    width: 100,
    position: 'relative',
    right: 30,
  },
};
class PlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: greenBackground,
      onScreen: false,
      playedHint: false,
      fadeAnim: new Animated.Value(1),
    };
    setInterval(() => {
      //if onscreen, set on screen
      if (this.props.screenProps.currentScreen === 'play') {
        this.setState({ onScreen: true });
        if (!this.state.playedHint) {
          this.playHint();
          this.setState({ playedHint: true });
        }
      }
      if (this.props.screenProps.currentScreen !== 'play') {
        this.setState({ onScreen: false, playedHint: false, fadeAnim: new Animated.Value(1) });
      }
    }, 100);
  }
  changeBackground(newImage) {
    this.setState({
      backgroundImage: newImage,
    });
  }
  playHint() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 12000,              // Make it take a while
      },
    ).start();                        // Starts the animation
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={this.state.backgroundImage} style={{ zIndex: -55, width, height }} />
        <StatusBar hidden />
        <PillLibrary />
        <Animated.View
          style={{
            position: 'absolute',
            top: height / 2 + 50,
            left: 200,
            opacity: this.state.fadeAnim,
            zIndex: -50,
          }}
        >
          <Image
            source={arrow}
            style={{
              width: 100,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              position: 'relative',
              bottom: 700,
              width: 275,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'justify',
              backgroundColor: 'rgba(0,0,0,0)',
              textShadowColor: '#ffffff',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 12,
            }}>
            Tap Pillflowers in your library to add to the picture, then pinch, tap, and spin them to create your scene!
          </Text>
        </Animated.View>
        {/* <PlayFlowerStack imageSource={pic1} bottom={150} left={beginGap} />
        <PlayFlowerStack imageSource={pic2} bottom={150} left={beginGap + spacer} />
        <PlayFlowerStack imageSource={pic3} bottom={150} left={beginGap + (2 * spacer)} />
        <PlayFlowerStack imageSource={pic4} bottom={150} left={beginGap + (3 * spacer)} />
        <PlayFlowerStack imageSource={pic5} bottom={150} left={beginGap + (4 * spacer)} />
        <PlayFlowerStack imageSource={pic6} bottom={150} left={beginGap + (5 * spacer)} /> */}
        <View style={styles.containerStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(whiteBackground)}
          >
            <Image source={whiteBackground} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(blackBackground)}
          >
            <Image source={blackBackground} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(greenBackground)}
          >
            <Image source={greenBackground} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PlayScreen;
