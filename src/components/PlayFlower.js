import React, { Component } from 'react';
import { PanResponder, Image, Animated, View } from 'react-native';

const styles = {
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class PlayFlower extends Component {

  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(1);
    this.state = {

    };
    let pinchDistance = null;
    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        position.setOffset({ x: position.x._value, y: position.y._value });
        position.setValue({ x:0, y:0 });
        if (gesture.numberActiveTouches === 2) {
          let pinchX = Math.abs(
            event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX);
          let pinchY = Math.abs(
            event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY);
          let pinchDistance = Math.sqrt((pinchX * pinchX) + (pinchY * pinchY));
          this.pinchDistance = pinchDistance;
        }
        this.spring();
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        if (gesture.numberActiveTouches === 2) {
          let pinchX2 = Math.abs(
            event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX);
          let pinchY2 = Math.abs(
            event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY);
          let pinchDistance2 = Math.sqrt((pinchX2 * pinchX2) + (pinchY2 * pinchY2));
          //  set condition for max and min size
          let zoomRatio = pinchDistance2 / this.pinchDistance;
          //  maxmin zoom
          if (zoomRatio * this.props.width < this.props.maxSize &&
            zoomRatio * this.props.width > this.props.minSize) {
            this.setState({ test: [{ scale: zoomRatio }] });
            this.setState({ prevScale: zoomRatio });
          } else {
            this.spring();
            // zoomRatio = this.state.prevScale;
            // this.setState({ test: [{ scale: zoomRatio }] });
            // console.log(zoomRatio);
          }
          // this.setState({ test: [{ scale: zoomRatio }] });
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.setState({ prevScale: this.state.scale });
        position.flattenOffset();
      },
    });

    this.state = {
      panResponder,
      position,
      scale: 1,
      prevScale: 1,
      test: [
        { scale: 1.2 },
      ],
    };
    console.log(this.state);
  }
  spring() {
    //  change the value below the change the amount of wiggle.
    this.springValue.setValue(1.15);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 5,
        tension: 100,
      },
    ).start();
  }

  render() {
    return (
      <View
        style={styles.viewStyle}
      >
        {/* <Animated.View
          style={{ transform:
            [{ scale: this.springValue }],
            borderWidth: 5,
            borderColor: 'white',
          }}
        > */}
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={[
            {
              transform: [{ scale: this.springValue }],
              width: this.state.test[0].scale * this.props.width,
              height: this.state.test[0].scale * this.props.width,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            },
            this.state.position.getLayout(),
          ]}
        >
          <View
            style={{
              transform: this.state.test,
              borderRadius: 1000,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={this.props.imageSource} alt=''
            />
          </View>
        </Animated.View>
        {/* </Animated.View> */}
      </View>
    );
  }
}

export { PlayFlower };
