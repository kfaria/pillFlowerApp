import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import PlayFlower from './PlayFlower';
import pic2 from '../images/pill-flowers/02.png';

const styles = {
  scrollViewStyle: {
    backgroundColor: 'white',
    height: 100,
  },
  imageStyle: {
    height: 100,
    width: 100,
  }
};

class PillLibrary extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewStyle}
      >
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../images/pill-flowers/01.png')}
          style={styles.imageStyle}
        />
      </ScrollView>
    );
  }
}

export { PillLibrary };
