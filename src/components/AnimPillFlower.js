import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';

// Props: source, fadeDuration, delay, topSpacing, leftSpacing, size, frequency, id

class AnimPillFlower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.startAnimation();
    const timerID = setInterval(() => this.startAnimation(), this.props.frequency);
  }
  startAnimation() {
    Animated.timing(this.state.opacityValue,
      {
        toValue: 1,
        duration: 1,
        delay: this.props.delay,
      }).start(() => {
        Animated.timing(this.state.opacityValue,
          {
            toValue: 0,
            duration: this.props.fadeDuration,
            delay: this.props.fadeDelay,
          }).start();
      });
  }
  render() {
    return (
      <Animated.View style={{ opacity: this.state.opacityValue }}>
        <Image
          source={this.props.image}
          style={{
            top: this.props.topSpacing,
            left: this.props.leftSpacing,
            width: this.props.size,
            height: this.props.size,
            position: 'absolute',
            zIndex: 100,
          }}
        />
      </Animated.View>
    );
  }
}

export { AnimPillFlower };
