import React, { Component } from 'react';
import { ScrollView, Image, View, Dimensions } from 'react-native';
import PlayFlower from '../components';
import pic2 from '../images/pill-flowers/02.png';

const { height, width } = Dimensions.get('window');

const styles = {
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

class PillLibrary extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContainerStyle}
        style={styles.scrollViewStyle}
      >
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
      </ScrollView>
    );
  }
}

export { PillLibrary };
