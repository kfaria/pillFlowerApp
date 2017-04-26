import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const styles = {
  testStyle: {
    alignSelf: 'center',
  },
};

class PillFlower extends Component {

  constructor(props) {
    const pfArray = [
      './../images/pill-flowers/01.png',
      './../images/pill-flowers/02.png',
      './../images/pill-flowers/03.png',
      './../images/pill-flowers/04.png'
    ];
    let currentIndex = 0;
    super(props);
    this.state = { currentPillFlower: pfArray[currentIndex] };
    setInterval(() => {
      console.log(currentIndex);
      console.log(this.state.currentPillFlower);
      this.setState({ currentPillFlower: pfArray[currentIndex += 1] });
    }, 5000);        // Initial value for opacity
  }

  render() {
    return (
      <Image source={} />
    );
  }

}

export default PillFlower;
