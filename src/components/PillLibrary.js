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
    this.resetFlowers = this.resetFlowers.bind(this);
    this.addFlower1 = this.addFlower.bind(this, pic1);
    this.addFlower2 = this.addFlower.bind(this, pic2);
    this.addFlower3 = this.addFlower.bind(this, pic3);
    this.addFlower4 = this.addFlower.bind(this, pic4);
    this.addFlower5 = this.addFlower.bind(this, pic5);
    this.addFlower6 = this.addFlower.bind(this, pic6);
    this.addFlower7 = this.addFlower.bind(this, pic7);
    this.addFlower8 = this.addFlower.bind(this, pic8);
    this.addFlower9 = this.addFlower.bind(this, pic9);
    this.addFlower10 = this.addFlower.bind(this, pic10);
    this.addFlower11 = this.addFlower.bind(this, pic11);
    this.addFlower12 = this.addFlower.bind(this, pic12);
    this.addFlower13 = this.addFlower.bind(this, pic13);
    this.addFlower14 = this.addFlower.bind(this, pic14);
    this.addFlower15 = this.addFlower.bind(this, pic15);
    this.addFlower16 = this.addFlower.bind(this, pic16);
    this.addFlower17 = this.addFlower.bind(this, pic17);
    this.addFlower18 = this.addFlower.bind(this, pic18);
    this.addFlower19 = this.addFlower.bind(this, pic19);
    this.addFlower20 = this.addFlower.bind(this, pic20);
  }
  componentWillMount() {
    this.resetFlowers();
  }
  componentWillUnmount() {
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
    // console.log(activeFlowerArray);
    return (
      <View style={styles.contentContainerStyle}>
        <TouchableOpacity
          onPress={this.resetFlowers}
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
          <TouchableOpacity onPress={this.addFlower1}>
            <Image
              source={pic1}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower2}>
            <Image
              source={pic2}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower3}>
            <Image
              source={pic3}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower4}>
            <Image
              source={pic4}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower5}>
            <Image
              source={pic5}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower6}>
            <Image
              source={pic6}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower7}>
            <Image
              source={pic7}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower8}>
            <Image
              source={pic8}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower9}>
            <Image
              source={pic9}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower10}>
            <Image
              source={pic10}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower11}>
            <Image
              source={pic11}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower12}>
            <Image
              source={pic12}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower13}>
            <Image
              source={pic13}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower14}>
            <Image
              source={pic14}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower15}>
            <Image
              source={pic15}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower16}>
            <Image
              source={pic16}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower17}>
            <Image
              source={pic17}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower18}>
            <Image
              source={pic18}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower19}>
            <Image
              source={pic19}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addFlower20}>
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
