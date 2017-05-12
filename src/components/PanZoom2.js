import React, { Component } from 'react';
import { PanResponder, View, Animated, Image } from 'react-native';
// import Image from 'react-native-transformable-image';
import PhotoView from 'react-native-photo-view';
import pic1 from '../images/pill-flowers/01.png';


class PanZoom2 extends Component{

  componentWillMount() { 
    this.position = new Animated.ValueXY(0,0);
    Animated.spring(this.position, {
      toValue: {x: 100, y: 300}
    }).start();
  }

  render(){
    return (
      <Animated.View style={this.position.getLayout()}>
        <View>
          <Image source={pic1} alt='' /> 
        </View>
      </Animated.View>
    );
  }
}

export { PanZoom2 };
