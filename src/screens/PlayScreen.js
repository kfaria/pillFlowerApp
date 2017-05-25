import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar, Animated, PanResponder, TouchableOpacity, Image } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { NavigationActions } from 'react-navigation';
import { PanZoom2, PlayFlower, BackgroundChanger } from '../components';
import pic1 from '../images/pill-flowers/01.png';
import pic2 from '../images/pill-flowers/02.png';

const { height, width } = Dimensions.get('window');
const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'red',
    height: 100,
  },
  imageStyle: {
    maxWidth: 150,
    maxHeight: 100,
  },
};
class PlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: null,
      startingPosition1: 0,
      startingPosition2: 10,
      startingScale1: 200,
      startingScale2: 200,
    };
  }
  changeBackground(newImage) {
    this.setState({
      backgroundImage: newImage,
    });
  }
  reset() {
    this.setState({
      startingPosition1: 0,
      startingPosition2: 10,
      startingScale1: 200,
      startingScale2: 200,
    });
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={this.state.backgroundImage} style={{ zIndex: -55, position: 'absolute', width: width, height: height }} />
        <StatusBar hidden />
        <PlayFlower
          imageSource={pic1}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}
        />
        <PlayFlower
          imageSource={pic2}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}
        />
        <View style={styles.containerStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(require("../images/backgrounds/bgpic1.jpg"))}
          >
            <Image source={require("../images/backgrounds/bgpic1.jpg")} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(require("../images/backgrounds/bgpic2.jpg"))}
          >
            <Image source={require("../images/backgrounds/bgpic2.jpg")} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.changeBackground(require("../images/backgrounds/bgpic1.jpg"))}
          >
            <Image source={require("../images/backgrounds/bgpic1.jpg")} style={styles.imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              console.log('update please');
            }
            }
          >
            <Image source={require("../images/backgrounds/bgpic2.jpg")} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PlayScreen;
