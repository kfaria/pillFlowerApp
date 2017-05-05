import React, { Component } from 'react';
import { Animated, PanResponder, Image } from 'react-native';
import pic1 from '../images/pill-flowers/01.png';


class PanZoom extends Component {
  constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.ValueXY(),
        scale: new Animated.Value(1),
      };
  }
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onMoveShouldSetResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) =>{
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({ x:0, y: 0 });

        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),
      
      //to reset position
      // onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        Animated.spring(
        this.state.scale,
        { toValue: 1, friction: 3 }
      ).start();
      },
    }); 
  }

  render() {
    const { pan, scale, } = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    const rotate ='0deg';
    const imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };

    return (
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <Image source={pic1} alt='' style={{ width: 500, height: 500 }} />          
        </Animated.View>
    );
  }

}

export { PanZoom };
