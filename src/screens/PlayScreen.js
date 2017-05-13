import React, { Component } from 'react';
import { View, Text, StatusBar, Animated, PanResponder } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { PanZoom2, PlayFlower } from '../components';
import pic1 from '../images/pill-flowers/01.png';
import pic2 from '../images/pill-flowers/02.png';


const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
};

class PlayScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <PlayFlower
          imageSource={pic1}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}
        />
      </View>
    );
  }
}

export default PlayScreen;
