import React, { Component } from 'react';
import { Animated, View, Text, StatusBar, Image, TouchableWithoutFeedback, Dimensions, PanResponder } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import arrow from '../images/arrow.png';
import pill1 from '../images/play-pill-flowers/level1/101.png';
import pill2 from '../images/play-pill-flowers/level1/102.png';
import pill3 from '../images/play-pill-flowers/level1/103.png';
import pill4 from '../images/play-pill-flowers/level1/104.png';
import pill5 from '../images/play-pill-flowers/level1/105.png';
import outline from '../images/play-pill-flowers/level1/outline.png';
import exitButton from '../images/exitButton.png';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  outlineStyle: {
    height: 200,
    width: 200,
  },
};

const flowerBaseArray = [];

class GrowGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // panResponder,
      showTabBar: false,
      navBarButtonOffset: 40,
      reset: false,
      // touchCount: 0,
      fadeAnim: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
    flowerBaseArray.push(
      <FlowerBase
        key={outline}
        height={800}
        width={800}
        rows={5}
        rowRadius={[215, 162, 107, 60, 0]}
        rowNumOfPetals={[16, 16, 16, 16, 1]}
        rowAngleOffset={['0deg', '-11.25deg', '0deg', '0deg', '0deg']}
        rowNames={['0leel0', '1leel1', '2leel2', '3leel3', '4leel4']}
        pillRowImage={[pill5, pill4, pill3, pill2, pill1]}
        resetStatus={this.state.reset}
      />
    );
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 12000,              // Make it take a while
      },
    ).start();
  }
  componentWillUnmount() {
    // console.log("unmounted");
    while (flowerBaseArray.length > 0) {
      flowerBaseArray.pop();
    }
    this.setState({ reset: true });
    // console.log(flowerBaseArray);
  }
  toggleTabBar() {
    this.setState({
      showTabBar: !this.state.showTabBar,
    });
    this.props.navigation.setParams({ visible: this.state.showTabBar });
    if (this.state.showTabBar) {
      this.setState({
        navBarButtonOffset: 40,
      });
    } else {
      this.setState({
        navBarButtonOffset: 0,
      });
    }
  }
  render() {
    return (
      <View
        style={styles.viewStyle}
      >
        <TouchableWithoutFeedback onPress={() =>
          this.props.navigation.dispatch(NavigationActions.back())}
        >
          <View style={{ flex: 1, marginTop: 50 }}>
            <Image source={exitButton} alt="" />
          </View>
        </TouchableWithoutFeedback>
        <StatusBar hidden />
        <View style={{ width: 800, height: 500, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
          <View
            style={{
              transform: [
                { scale: 2.80 },
                { rotateZ: '1deg' },
              ],
            }}
          >
          {/*<View style={{ borderColor: 'red', borderWidth: 2 }}>*/}
          <View>
            <Image
              source={outline}
              alt=''
              style={styles.outlineStyle}
            />
          </View>
          </View>
          {flowerBaseArray}
        </View>
        <Animated.View
          style={{
            position: 'absolute',
            top: height / 2 - 70,
            right: 100,
            opacity: this.state.fadeAnim,
            zIndex: -50,
          }}
        >
          <Image
            source={arrow}
            style={{
              width: 100,
              transform: [
                { rotateX: '180deg' },
                { rotateY: '180deg' },
              ],
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              position: 'absolute',
              bottom: 500,
              width: 150,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'justify',
              backgroundColor: 'rgba(0,0,0,0)',
            }}
            >
            Drag the pills into place!
          </Text>
        </Animated.View>
      </View>
      // </Animated.View>
    );
  }
}

export default GrowGameScreen;
