import React, { Component, PropTypes } from 'react';
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
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        if (gesture.numberActiveTouches === 2) {
          let pinchX2 = Math.abs(event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX);
          let pinchY2 = Math.abs(event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY);
          let pinchDistance2 = Math.sqrt((pinchX2 * pinchX2) + (pinchY2 * pinchY2));
          this.setState({ scale: pinchDistance2 / this.pinchDistance });
          this.setState({ test: [{ scale: pinchDistance2 / this.pinchDistance }] });
          // console.log(this.state.scale);
          // console.log(typeof this.state.scale);
        }

      },
      onPanResponderRelease: (event, gesture) => {
        this.setState({ prevScale: this.state.scale });
        position.flattenOffset();
        console.log(this.state.scale);
      },
    });

    this.state = { panResponder, position };
  }

  render() {
    const size = this.state.scale;
    console.log(size);
    return (
      <View style={styles.viewStyle}>
        {/*<View
          style={
          {
            transform: [
              { scale: 2 },
            ],
          }}
        >*/}
        <View
          style={
            {transform: this.state.test}
          }
          >
        <Animated.View 
          {...this.state.panResponder.panHandlers}
          style={this.state.position.getLayout()}
        >
            <Image source={this.props.imageSource} alt='' />
        </Animated.View>
          </View>
        
      </View>
    );
  }
}

export { PlayFlower };
