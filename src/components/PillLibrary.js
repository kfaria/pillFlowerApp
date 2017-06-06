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
  }
};

class PillLibrary extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContainerStyle}
        style={styles.scrollViewStyle}
      >
        <View style={{ position: 'absolute', top: 475, left: (width / 2) - 45 }}>
          <PlayFlower
            imageSource={pic2}
            width={200}
            height={200}
            maxSize={450}
            minSize={50}
          />
        </View>
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
