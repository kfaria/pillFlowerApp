import React, { Component } from 'react';
import { View, Text, StatusBar, Animated, PanResponder } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { PanZoom2, PlayFlower } from '../components';
import pic1 from '../images/pill-flowers/01.png';


const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
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
              maxSize={250}
              minSize={150}
            />
      </View>
    );
  }
}

export default PlayScreen;
