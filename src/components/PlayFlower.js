import React, { Component } from 'react';
import { PanResponder, Image, Animated, View } from 'react-native';
import Sound from 'react-native-sound';
import PopSound from '../music/pop1.wav';

const Pop = new Sound(PopSound, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class PlayFlower extends Component {

  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(1);
    let pinchDistance = null;
    let pinchAngle = null;
    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        position.setOffset({ x: position.x._value, y: position.y._value });
        position.setValue({ x:0, y:0 });
        if (gesture.numberActiveTouches === 2) {
          let pinchX =
            event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX;
          let pinchY =
            event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY;
          let pinchDistance = Math.sqrt((pinchX * pinchX) + (pinchY * pinchY));
          this.pinchDistance = pinchDistance;
          this.pinchAngle = (Math.sinh(pinchY / (pinchDistance / 2)) * (180 / Math.PI));
          // console.log(this.pinchAngle);
        }
        this.spring();
        console.log(this.state.test[0].scale);
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        if (gesture.numberActiveTouches === 2) {
          let pinchX2 =
            event.nativeEvent.touches[1].pageX - event.nativeEvent.touches[0].pageX;
          let pinchY2 =
            event.nativeEvent.touches[1].pageY - event.nativeEvent.touches[0].pageY;
          let pinchDistance2 = Math.sqrt((pinchX2 * pinchX2) + (pinchY2 * pinchY2));
          //  set condition for max and min size
          // let zoomRatio = (pinchDistance2 / (this.pinchDistance*2));
          let zoomRatio = (pinchDistance2 / (this.pinchDistance));
          let currentScale = this.state.test[0].scale;
          console.log(zoomRatio * currentScale);

          let pinchAngle2 = (Math.sinh(pinchY2 / (pinchDistance2 / 2)) * (-180 / Math.PI));
          let newRotation = pinchAngle2 +'deg';
          // console.log(pinchY2 + " " + pinchX2);
          // console.log(parseInt(this.state.test[1].rotateZ));
          //  maxmin zoom
          if ((zoomRatio * currentScale) * this.props.width < this.props.maxSize &&
            (zoomRatio * currentScale) * this.props.width > this.props.minSize) {
              if (zoomRatio >= 1) {
                console.log("scaling up");
                this.setState({ test: [{ scale: (currentScale + 0.055) }, { rotateZ: newRotation }] });                   
              }
              if (zoomRatio < 1) {
                console.log('scaling down');
                this.setState({ test: [{ scale: (currentScale - 0.025) }, { rotateZ: newRotation }] });                
              }
            // this.setState({ test: [{ scale: (zoomRatio * currentScale) }, { rotateZ: newRotation }] });
            this.setState({ prevScale: zoomRatio });
            // console.log("else" + zoomRatio);    
          } else {
            // this.spring();
            // zoomRatio = this.state.prevScale;
            // this.setState({ test: [{ scale: this.state.prevScale }] });
            // console.log("else" + zoomRatio);
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
        { scale: 0.5 },
        { rotateZ: '0deg' },
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
    Pop.stop();
    Pop.play();
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
