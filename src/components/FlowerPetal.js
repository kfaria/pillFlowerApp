/*
  Component takes in img, x y and rotateZ props to render a single petal. 
  also has component to animate the movement.
*/

import React, { Component } from 'react';
import { Animated, Image, View } from 'react-native';

class FlowerPetal extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(1);
    this.state = {
      updated: false,
      opacityValue: new Animated.Value(0),
    };
  }
  componentWillMount() {
    Animated.timing(
      this.state.opacityValue, {
        toValue: 1,
        duration: this.props.delayBetweenPill,
        delay: 100,
      },
    ).start();
    this.spring();
  }
  spring() {
    this.springValue.setValue(1.05);
    Animated.sequence([
      Animated.delay(800),
      Animated.spring(this.springValue, {
        toValue: 1.0,
        friction: 3,
        tension: 120,
      }),
    ]).start();
  }
  render() {
    return (
      <Animated.View style={{ transform: [{ scale: this.springValue }] }}>
        <Animated.View style={{ opacity: this.state.opacityValue, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
          <Image
            //style={{ borderColor: 'red', borderWidth: 2 }}
            position='absolute'
            transform={this.props.pillSpec}
            source={this.props.pillButtonImage}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

export default FlowerPetal;
