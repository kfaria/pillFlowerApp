import React, { Component } from 'react';
import { Image, Animated } from 'react-native';

const styles={
  imageStyle: {
    width: 800,
    height: 800,
    position: 'absolute',
    bottom: 0,
  },
};

class FadeInPart2 extends Component {

  constructor(props) {
    // Use an array of even length
    const imageArray = [
      require('./../images/pill-flowers/01.png'),
      require('./../images/pill-flowers/02.png'),
      require('./../images/pill-flowers/03.png'),
      require('./../images/pill-flowers/04.png'),
      require('./../images/pill-flowers/05.png'),
      require('./../images/pill-flowers/06.png'),
      require('./../images/pill-flowers/07.png'),
      require('./../images/pill-flowers/08.png'),
      require('./../images/pill-flowers/09.png'),
      require('./../images/pill-flowers/10.png'),
      require('./../images/pill-flowers/11.png'),
      require('./../images/pill-flowers/12.png'),
      require('./../images/pill-flowers/13.png'),
      require('./../images/pill-flowers/14.png'),
      require('./../images/pill-flowers/15.png'),
      require('./../images/pill-flowers/16.png'),
      require('./../images/pill-flowers/17.png'),
      require('./../images/pill-flowers/18.png'),
      require('./../images/pill-flowers/19.png'),
      require('./../images/pill-flowers/20.png'),
      require('./../images/pill-flowers/21.png'),
      require('./../images/pill-flowers/22.png'),
      require('./../images/pill-flowers/23.png'),
      require('./../images/pill-flowers/24.png'),
      require('./../images/pill-flowers/25.png'),
      require('./../images/pill-flowers/26.png'),
      require('./../images/pill-flowers/27.png'),
      require('./../images/pill-flowers/28.png'),
      require('./../images/pill-flowers/29.png'),
      require('./../images/pill-flowers/30.png'),
      require('./../images/pill-flowers/31.png'),
      require('./../images/pill-flowers/32.png'),
      require('./../images/pill-flowers/33.png'),
      require('./../images/pill-flowers/34.png'),
      require('./../images/pill-flowers/35.png'),
      require('./../images/pill-flowers/36.png'),
      require('./../images/pill-flowers/37.png'),
      require('./../images/pill-flowers/38.png'),
      require('./../images/pill-flowers/39.png'),
      require('./../images/pill-flowers/40.png'),
    ];
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
      currentImage: require('./../images/pill-flowers/04.png'),
      inFront: true,
      currentIndex: -1,
    };
    // Set up timing interval
    setInterval(() => {
      // If the image is in front, send it back and change to next item in array
      if (this.state.inFront) {
        this.setState({ inFront: false });
        Animated.timing(
          this.state.opacityValue, {
            toValue: 0,
            duration: 2000,
          },
        ).start();
        this.setState({ currentIndex: this.state.currentIndex += 2 });
      // If the image is in the back, fade it in
      } else {
        this.setState({ currentImage: imageArray[this.state.currentIndex], inFront: true });
        Animated.timing(
          this.state.opacityValue, {
            toValue: 1,
            duration: 2000,
          },
        ).start();
      }
      // Reset index if reached end of array
      if (this.state.currentIndex >= imageArray.length) {
        this.setState({ currentIndex: 1 });
      }
    }, 2500);
  }

  render() {
    return (
      <Animated.View style={{ opacity: this.state.opacityValue, justifyContent: 'center', alignItems: 'center' }} >
        <Image source={this.state.currentImage} style={styles.imageStyle} />
      </Animated.View>
    );
  }
}

export { FadeInPart2 };
