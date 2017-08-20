import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, PanResponder, Dimensions } from 'react-native';
import { HomeScreenAnimation } from '../components/HomeScreenAnimation';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Platelet',
    fontSize: 80,
    textShadowColor: '#74d6af',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  imageStyle: {
    marginTop: 40,
    width: 80,
    height: 85,
  },
  infoImageStyle: {
    flex: 0,
    position: 'absolute',
    bottom: 30,
    left: 250,
    width: 50,
    height: 50,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};

let timer = null;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // Code block for timer within constructor. Add panResponder in state. wire it up in the parent view under the render
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        // console.log('press');
      },
      // onPanResponderMove: (event, gesture) => {},
      onPanResponderRelease: (event, gesture) => {
        let count = this.state.touchCount;
        this.setState({ touchCount: count + 1 });
        // console.log('released');
        // this.touchResponse();
      },
    });
    // end of code block for timer.  Add new function outside of constructor touchResponse()
    this.state = {
      panResponder,
      touchCount: 0,
      onScreen: false,
    };
  }
  touchResponse() {
    // console.log('clearing timer');
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.checkCurrentScreen();
    }, 120000);
  }
  checkCurrentScreen() {
    if (this.props.screenProps.currentScreen === 'home') {
      this.props.navigation.navigate('home');
      // console.log('naving');
    }
  }
  render() {
    this.touchResponse();
    return (
      <View style={styles.viewStyle} {...this.state.panResponder.panHandlers}>
        <HomeScreenAnimation />
        <Image source={require('../images/flowerButtonTransparent.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('grow')}>
          <Text style={styles.textStyle}>
            grow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gather')}>
          <Text style={styles.textStyle}>
            gather
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('play')}>
          <Text style={styles.textStyle}>
            play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('dream')}>
          <Text style={styles.textStyle}>
            dream
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gift')}>
          <Text style={styles.textStyle}>
            gift
          </Text>
        </TouchableOpacity>
        <Image source={require('../images/flowerButtonTransparent.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('credit')}>
          <Image source={require('../images/infoButton.png')} style={styles.infoImageStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
