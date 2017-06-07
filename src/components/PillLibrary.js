import React, { Component } from 'react';
import { ScrollView, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import {PlayFlower} from '../components';
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
    console.log('adding', tappedFlower);
    activeFlowerArray.push(
      <View key={this.state.test}>
        <PlayFlower
          imageSource={tappedFlower}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}
        />
        <Image
              source={pic2}
              style={styles.imageStyle}
            />
      </View>
    );
    const counter = this.state.test + 1;
    console.log(counter);
    console.log(activeFlowerArray);
    this.setState({ test: (counter)});
  }
  resetFlowers() {
    while (activeFlowerArray.length > 1) {
      this.activeFlowerArray.pop();
    }
  }
  render() {
    console.log(activeFlowerArray);
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
