import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar, TouchableOpacity, Image } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { NavigationActions } from 'react-navigation';
import { PlayFlower, PlayFlowerStack, PillLibrary } from '../components';
import pic1 from '../images/pill-flowers/01.png';
import pic2 from '../images/pill-flowers/02.png';
import pic3 from '../images/pill-flowers/03.png';
import pic4 from '../images/pill-flowers/04.png';
import pic5 from '../images/pill-flowers/05.png';
import pic6 from '../images/pill-flowers/06.png';
import vase from '../images/vase.png';

const spacer = 160;
const beginGap = 70
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
      backgroundImage: require('../images/backgrounds/bkgd green canvas.png'),
    };
  }
  changeBackground(newImage) {
    this.setState({
      backgroundImage: newImage,
    });
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
            onPress={() => this.changeBackground(require("../images/backgrounds/bkgd white canvas.png"))}
          >
            <Image source={require("../images/backgrounds/bkgd white canvas.png")} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(require("../images/backgrounds/bkgd black canvas.png"))}
          >
            <Image source={require("../images/backgrounds/bkgd black canvas.png")} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(require("../images/backgrounds/bkgd green canvas.png"))}
          >
            <Image source={require("../images/backgrounds/bkgd green canvas.png")} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PlayScreen;
