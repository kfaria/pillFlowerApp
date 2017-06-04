import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import { PlayFlower } from '../components';
import pic2 from '../images/pill-flowers/02.png'

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    justifyContent: 'flex-end',
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
    height: 100,
    width: 100,
  },
};

class GatherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <View style={{ height: 100 }}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainerStyle}
            style={styles.scrollViewStyle}
          >
            <View style={{ position: 'absolute' }}>
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
        </View>
      </View>
    );
  }
}

export default GatherScreen;
