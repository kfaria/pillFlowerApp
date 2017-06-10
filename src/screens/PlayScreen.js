import React, { Component } from 'react';
import { View, Dimensions, StatusBar, TouchableOpacity, Image } from 'react-native';
import { PillLibrary } from '../components';
import greenBackground from '../images/backgrounds/bkgd green canvas.png';
import whiteBackground from '../images/backgrounds/bkgd white canvas.png';
import blackBackground from '../images/backgrounds/bkgd black canvas.png';


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
    };
  }
  changeBackground(newImage) {
    this.setState({
      backgroundImage: newImage,
    });
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
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
      </View>
    );
  }
}

export default PlayScreen;
