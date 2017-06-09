import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar, TouchableOpacity, Image } from 'react-native';
import { PillLibrary } from '../components';
import Toast, { DURATION } from 'react-native-easy-toast';
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
    };
    setInterval(() => {
      if (this.props.screenProps.test.routes[0].index === 3) {
        this.setState({ onScreen: true });
      }
      if (this.props.screenProps.test.routes[0].index !== 3) {
        this.setState({ onScreen: false });
      }
      if (this.state.onScreen && !this.state.playedHint) {
        this.renderHint();
      }
    }, 500);
  }
  changeBackground(newImage) {
    this.setState({
      backgroundImage: newImage,
    });
  }
  renderHint() {
    this.refs.toast.show('Here\'s a hint', DURATION.LENGTH_LONG);
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={this.state.backgroundImage} style={{ zIndex: -55, width, height }} />
        <StatusBar hidden />
        <PillLibrary />
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
        <Toast
          ref="toast"
          style={{ backgroundColor: 'rgba(0,0,0,0)', height: 75, width: 200, alignItems: 'center', marginRight: 850 }}
          position='bottom'
          positionValue={180}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        />
      </View>
    );
  }
}

export default PlayScreen;
