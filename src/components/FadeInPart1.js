import React, { Component } from 'react';
import { Image, Animated } from 'react-native';

const styles = {
  imageStyle: {
    width: 800,
    height: 800,
  },
};

class FadeInPart1 extends Component {

  constructor(props) {
    // Use an array of even length, make sure it's the same for FadeInPart2.
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
      require('./../images/pill-flowers/41.png'),
      require('./../images/pill-flowers/42.png'),
      require('./../images/pill-flowers/43.png'),
      require('./../images/pill-flowers/44.png'),
      require('./../images/pill-flowers/45.png'),
      require('./../images/pill-flowers/46.png'),
      require('./../images/pill-flowers/47.png'),
      require('./../images/pill-flowers/48.png'),
      require('./../images/pill-flowers/49.png'),
      require('./../images/pill-flowers/50.png'),
      require('./../images/pill-flowers/051 2017.png'),
      require('./../images/pill-flowers/052 2017.png'),
      require('./../images/pill-flowers/053 2017.png'),
      require('./../images/pill-flowers/054 2017.png'),
      require('./../images/pill-flowers/055 2017.png'),
      require('./../images/pill-flowers/056 2017.png'),
      require('./../images/pill-flowers/057 2017.png'),
      require('./../images/pill-flowers/058 2017.png'),
      require('./../images/pill-flowers/059 2017.png'),
      require('./../images/pill-flowers/060 2017.png'),
      require('./../images/pill-flowers/061 2017.png'),
      require('./../images/pill-flowers/062 2017.png'),
      require('./../images/pill-flowers/063 2017.png'),
      require('./../images/pill-flowers/064 2017.png'),
      require('./../images/pill-flowers/065 2017.png'),
      require('./../images/pill-flowers/066 2017.png'),
      require('./../images/pill-flowers/067 2017.png'),
      require('./../images/pill-flowers/068 2017.png'),
      require('./../images/pill-flowers/069 2017.png'),
      require('./../images/pill-flowers/070 2017.png'),
      require('./../images/pill-flowers/071 2017.png'),
      require('./../images/pill-flowers/072 2017.png'),
      require('./../images/pill-flowers/073 2017.png'),
      require('./../images/pill-flowers/074 2017.png'),
      require('./../images/pill-flowers/075 2017.png'),
      require('./../images/pill-flowers/076 2017.png'),
      require('./../images/pill-flowers/077 2017.png'),
      require('./../images/pill-flowers/078 2017.png'),
      require('./../images/pill-flowers/079 2017.png'),
      require('./../images/pill-flowers/080 2017.png'),
      require('./../images/pill-flowers/081 2017.png'),
      require('./../images/pill-flowers/082 2017.png'),
      require('./../images/pill-flowers/083 2017.png'),
      require('./../images/pill-flowers/084 2017.png'),
      require('./../images/pill-flowers/085 2017.png'),
      require('./../images/pill-flowers/086 2017.png'),
      require('./../images/pill-flowers/087 2017.png'),
      require('./../images/pill-flowers/088 2017.png'),
      require('./../images/pill-flowers/089 2017.png'),
      require('./../images/pill-flowers/090 2017.png'),
      require('./../images/pill-flowers/091 2017.png'),
      require('./../images/pill-flowers/092 2017.png'),
      require('./../images/pill-flowers/093 2017.png'),
      require('./../images/pill-flowers/094 2017.png'),
      require('./../images/pill-flowers/095 2017.png'),
      require('./../images/pill-flowers/096 2017.png'),
      require('./../images/pill-flowers/097 2017.png'),
      require('./../images/pill-flowers/098 2017.png'),
      require('./../images/pill-flowers/099 2017.png'),
      require('./../images/pill-flowers/100 2017.png'),
    ];
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
      currentImage: require('./../images/pill-flowers/04.png'),
      inFront: false,
      currentIndex: 0,
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
        this.setState({ currentIndex: 0 });
      }
    }, 2500);
  }

  render() {
    return (
      <Animated.View style={{ opacity: this.state.opacityValue }} >
        <Image source={this.state.currentImage} style={styles.imageStyle} />
      </Animated.View>
    );
  }
}

export { FadeInPart1 };
