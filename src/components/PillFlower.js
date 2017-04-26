import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
};

class PillFlower extends Component {

  constructor(props) {
    const pfArray = [
      require('./../images/pill-flowers/01.png'),
      require('./../images/pill-flowers/02.png'),
      require('./../images/pill-flowers/03.png'),
      require('./../images/pill-flowers/04.png'),
    ];
    let currentIndex = 0;
    super(props);
    this.state = { currentPillFlower: pfArray[currentIndex] };
    setInterval(() => {
      console.log(currentIndex);
      console.log(this.state.currentPillFlower);
      if (currentIndex === pfArray.length - 1) {
        currentIndex = 0
        this.setState({ currentPillFlower: pfArray[currentIndex] });
      } else {
        this.setState({ currentPillFlower: pfArray[currentIndex += 1] });
      }
    }, 1000);        // Initial value for opacity
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={this.state.currentPillFlower} style={styles.imageStyle} />
      </View>
    );
  }

}

export default PillFlower;
