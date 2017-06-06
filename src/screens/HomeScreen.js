import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 50,
    borderColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Platelet',
    fontSize: 80,
    textShadowColor: '#74d6af',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  imageStyle: {
    width: 80,
    height: 85,
  },
  infoImageStyle: {
    flex: 0,
    position: 'absolute',
    bottom: 10,
    left: 350,
    width: 50,
    height: 50,
  },
};

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={require('../images/flowerButton.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('grow')}>
          <Text style={styles.textStyle}>
            grow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gather')}>
          <Text style={styles.textStyle}>
            gather
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('play')}>
          <Text style={styles.textStyle}>
            play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('dream')}>
          <Text style={styles.textStyle}>
            dream
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gift')}>
          <Text style={styles.textStyle}>
            gift
          </Text>
        </TouchableOpacity>
        <Image source={require('../images/flowerButton.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('credit')}>
          <Image source={require('../images/infoButton.png')} style={styles.infoImageStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
