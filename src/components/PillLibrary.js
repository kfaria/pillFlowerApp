import React, { Component } from 'react';
import { ScrollView, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { PlayFlower, Button } from '../components';
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
    position: 'absolute',
    marginTop: height - 300,
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
      <View key={this.state.test} style={{ position: 'absolute', left: 500, right: 500, bottom: 500, top: 500 }}>
        <PlayFlower
          imageSource={tappedFlower}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}
        />
        {/* <Image
              source={pic2}
              style={styles.imageStyle}
            /> */}
      </View>
    );
    const counter = this.state.test + 1;
    console.log(counter);
    console.log(activeFlowerArray);
    this.setState({ test: (counter)});
  }
  resetFlowers() {
      activeFlowerArray.pop();
      console.log('lets reset');
  }
  render() {
    console.log(activeFlowerArray);
    return (
      <View style={styles.contentContainerStyle}>
        <TouchableOpacity onPress={() => this.resetFlowers()}>
          <Text style={{ margin: 50, fontSize: 50 }}>
            RESET
          </Text>
        </TouchableOpacity>
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
