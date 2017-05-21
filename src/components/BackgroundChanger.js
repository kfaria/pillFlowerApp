import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const styles = {
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

class BackgroundChanger extends Component {
  changeBackground(image) {
    console.log('change background')
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.changeBackground(require("../images/backgrounds/bgpic1.jpg"))}
        >
          <Image source={require("../images/backgrounds/bgpic1.jpg")} style={styles.imageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image source={require("../images/backgrounds/bgpic2.jpg")} style={styles.imageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image source={require("../images/backgrounds/bgpic1.jpg")} style={styles.imageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image source={require("../images/backgrounds/bgpic2.jpg")} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export { BackgroundChanger };
