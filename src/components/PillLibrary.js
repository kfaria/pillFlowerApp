import React, { Component } from 'react';
import { ScrollView, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { PlayFlower, Button } from '../components';
import pic1 from '../images/pill-flowers/01.png';
import pic2 from '../images/pill-flowers/02.png';
import pic3 from '../images/pill-flowers/03.png';
import pic4 from '../images/pill-flowers/04.png';
import pic5 from '../images/pill-flowers/05.png';
import pic6 from '../images/pill-flowers/06.png';
import pic7 from '../images/pill-flowers/07.png';
import pic8 from '../images/pill-flowers/08.png';
import pic9 from '../images/pill-flowers/09.png';
import pic10 from '../images/pill-flowers/10.png';
import pic11 from '../images/pill-flowers/11.png';
import pic12 from '../images/pill-flowers/12.png';
import pic13 from '../images/pill-flowers/13.png';
import pic14 from '../images/pill-flowers/14.png';
import pic15 from '../images/pill-flowers/15.png';
import pic16 from '../images/pill-flowers/16.png';
import pic17 from '../images/pill-flowers/17.png';
import pic18 from '../images/pill-flowers/18.png';
import pic19 from '../images/pill-flowers/19.png';
import pic20 from '../images/pill-flowers/20.png';
import refreshButton from '../images/refreshButton.png';

const { height, width } = Dimensions.get('window');

const styles = {
  contentContainerStyle: {
    height,
    width,
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
  },
  scrollViewContainerStyle: {
    backgroundColor: '#727272',
    padding: 10,
  },
  scrollViewStyle: {
    position: 'absolute',
    marginTop: height - 167,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
};

const activeFlowerArray = [];
let counter = 0;
class PillLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    this.resetFlowers();
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
      </View>
    );
    this.counter = this.state.count + 1;
    console.log(this.state.count + 1);
    // console.log(activeFlowerArray);
    this.setState({ count: (this.counter) });
  }
  resetFlowers() {
      // activeFlowerArray.pop();
      console.log('lets reset');

    while (activeFlowerArray.length > 0) {
      activeFlowerArray.pop();
      this.counter--;
    }
    this.setState({ count: 0 });
  }
  render() {
    console.log(activeFlowerArray);
    return (
      <View style={styles.contentContainerStyle}>
        <TouchableOpacity
          onPress={() => this.resetFlowers()}
        >
          {/* <Text style={{ margin: 50, fontSize: 50 }}>
            RESET
          </Text> */}
          <Image
            source={refreshButton}
            style={{ position: 'absolute', right: 110, top: 90, width: 57, height: 50 }}
          />
        </TouchableOpacity>
        <View style={styles.playFlowerContainer}>
          {activeFlowerArray}
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContainerStyle}
          style={styles.scrollViewStyle}
        >
          <TouchableOpacity onPress={() => this.addFlower(pic1)}>
            <Image
              source={pic1}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic2)}>
            <Image
              source={pic2}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic3)}>
            <Image
              source={pic3}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic4)}>
            <Image
              source={pic4}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic5)}>
            <Image
              source={pic5}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic6)}>
            <Image
              source={pic6}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic7)}>
            <Image
              source={pic7}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic8)}>
            <Image
              source={pic8}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic9)}>
            <Image
              source={pic9}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic10)}>
            <Image
              source={pic10}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic11)}>
            <Image
              source={pic11}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic12)}>
            <Image
              source={pic12}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic13)}>
            <Image
              source={pic13}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic14)}>
            <Image
              source={pic14}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic15)}>
            <Image
              source={pic15}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic16)}>
            <Image
              source={pic16}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic17)}>
            <Image
              source={pic17}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic18)}>
            <Image
              source={pic18}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic19)}>
            <Image
              source={pic19}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addFlower(pic20)}>
            <Image
              source={pic20}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export { PillLibrary };
