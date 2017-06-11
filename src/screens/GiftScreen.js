import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import Camera from 'react-native-camera';
import arrow from '../images/arrow.png';

const { width, height } = Dimensions.get('window')

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    borderRadius: 50,
    padding: 10,
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 50,
    borderWidth: 5,
    borderColor: '#999',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    zIndex: 100,
  },
  textStyle: {
    margin: 100,
    color: 'white',
  },
};

let timer = null;

class GiftScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasTakenPicture: false,
      onScreen: false,
      playedHint: false,
      fadeAnim: new Animated.Value(1),
    };
    setInterval(() => {
      //if onscreen, set on screen
      if (this.props.screenProps.currentScreen === 'gift') {
        this.setState({ onScreen: true });
        if (!this.state.playedHint) {
          this.playHint();
          this.setState({ playedHint: true });
        }
      }
      if (this.props.screenProps.currentScreen !== 'gift') {
        this.setState({ onScreen: false, playedHint: false, fadeAnim: new Animated.Value(1) });
      }
    }, 100);
  }
  playHint() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      },
    ).start();                        // Starts the animation
  }
  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => {
        console.log(data);
        this.props.navigation.navigate('EditGiftScreen');
      })
      .catch(err => console.error(err));
  }
  // renderContent() {
  //   console.log('rendering new content')
  //   if (this.state.hasTakenPicture) {
  //     this.getPhotos();
  //     return (
  //       <View>
  //         <Text style={styles.textStyle}>
  //           Hello camera roll
  //         </Text>
  //         {
  //           this.state.photos.map((p) => {
  //             return (
  //               <Image
  //                 style={{
  //                   width: width / 3,
  //                   height: width / 3,
  //                 }}
  //                 source={{ uri: p.node.image.uri }}
  //               />
  //             );
  //           })
  //         }
  //       </View>
  //     );
  //   }
  // }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}
        >
          <TouchableOpacity
            onPress={() => {
              this.takePicture();
            }}
            style={{ width: 50, height: 50, position: 'absolute', zIndex: 100, bottom: 50 }}
          >
            <View
              style={styles.capture}
            />
          </TouchableOpacity>
        </Camera>
        <Animated.View
          style={{
            position: 'absolute',
            top: 750,
            left: width / 2 - 150,
            opacity: this.state.fadeAnim,
            zIndex: 40,
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
              position: 'absolute',
              bottom: 450,
              width: 200,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0)',
              textShadowColor: '#ffffff',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 12,
            }}
          >
            Press here to take a photo!
          </Text>
        </Animated.View>
      </View>
    );
  }
}

export default GiftScreen;
