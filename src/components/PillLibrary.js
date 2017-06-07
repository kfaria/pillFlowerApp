import React, { Component } from 'react';
import { ScrollView, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import PlayFlower from '../components';
import pic2 from '../images/pill-flowers/02.png';

const { height, width } = Dimensions.get('window');

const styles = {
  contentContainerStyle: {
    height,
    width,
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
  },
  scrollViewContainerStyle: {
    borderWidth: 10,
    borderColor: 'red',
    flex: 1,
  },
  scrollViewStyle: {
    borderWidth: 10,
    borderColor: 'blue',
    flex: 1,
  },
  imageStyle: {
    flex: 1,
  },
};

const activeFlowerArray = [];

class PillLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
  }
  addFlower(tappedFlower) {
    console.log('adding', tappedFlower)
    activeFlowerArray.push(
      <PlayFlower
        imageSource={tappedFlower}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />,
    );
  }
  resetFlowers() {
    while (activeFlowerArray.length > 1) {
      activeFlowerArray.pop();
    }
  }
  render() {
    return (
      <View style={styles.contentContainerStyle}>
        <View style={styles.playFlowerContainer}>
          {activeFlowerArray}
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContainerStyle}
          style={styles.scrollViewStyle}
        >
          <TouchableOpacity onPress={() => this.addFlower(pic2)}>
            <Image
              source={pic2}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export { PillLibrary };
