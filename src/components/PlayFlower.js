import React, { Component } from 'react';
import { PanResponder, Image, Animated, View } from 'react-native';

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class PlayFlower extends Component {

  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(1);

    this.state = {
      scale: 1,
      prevScale: 1,
      test: [
        { scale: 1.2 },
      ],
    };
    let pinchDistance = null;
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        position.setOffset({ x: position.x._value, y: position.y._value });
        position.setValue({ x:0, y:0 });
        if (gesture.numberActiveTouches === 2) {
          let pinchX = Math.abs(event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX);
          let pinchY = Math.abs(event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY);
          let pinchDistance = Math.sqrt((pinchX * pinchX) + (pinchY * pinchY));
          this.pinchDistance = pinchDistance;
        }
        this.spring();
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        if (gesture.numberActiveTouches === 2) {
          let pinchX2 = Math.abs(event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX);
          let pinchY2 = Math.abs(event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY);
          let pinchDistance2 = Math.sqrt((pinchX2 * pinchX2) + (pinchY2 * pinchY2));
          this.setState({ scale: pinchDistance2 / this.pinchDistance });
          this.setState({ test: [{ scale: pinchDistance2 / this.pinchDistance }] });          
        }
        
        console.log(gesture);
      },
      onPanResponderRelease: (event, gesture) => {
        this.setState({ prevScale: this.state.scale });
        position.flattenOffset();
      },
    });

    this.state = { panResponder, position };
  }

  spring() {
    console.log('hi');
    //change the value below the change the amount of wiggle.
    this.springValue.setValue(1.01);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 0.5,
        tension: 100,
      },
    ).start();
  }

  render() {
    const size = this.state.scale;
    console.log(size);
    return (
      <View
        style={styles.viewStyle}
      >
        <Animated.View
          /*onPress={this.spring()}*/
          style={{ transform: [{ scale: this.springValue }] }}
        >
          <View style={{ transform: this.state.test }}>
            <Animated.View 
              {...this.state.panResponder.panHandlers}
              style={this.state.position.getLayout()}
            >
              <Image source={this.props.imageSource} alt='' />
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export { PlayFlower };
