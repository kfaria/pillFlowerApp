import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import pill1 from '../images/play-pill-flowers/level1/101.png';
import pill2 from '../images/play-pill-flowers/level1/102.png';
import pill3 from '../images/play-pill-flowers/level1/103.png';
import pill4 from '../images/play-pill-flowers/level1/104.png';
import pill5 from '../images/play-pill-flowers/level1/105.png';
import outline from '../images/play-pill-flowers/level1/outline.png';
import exitButton from '../images/exitButton.png';

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
      showTabBar: false,
      navBarButtonOffset: 40,
      reset: false,
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
        rowRadius={[175, 145, 100, 50, 0]}
        rowNumOfPetals={[16, 16, 16, 16, 1]}
        rowAngleOffset={['0deg', '11.25deg', '0deg', '0deg', '0deg']}
        rowNames={['0leel0', '1leel1', '2leel2', '3leel3', '4leel4']}
        pillRowImage={[pill5, pill4, pill3, pill2, pill1]}
        resetStatus={this.state.reset}
      />
    );
  }
  componentWillUnmount() {
    console.log("unmounted");
    while (flowerBaseArray.length > 0) {
      flowerBaseArray.pop();
    }
    this.setState({ reset: true });
    console.log(flowerBaseArray);
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
    console.log(flowerBaseArray);
    return (
      <View style={styles.viewStyle}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
          <View style={{ flex: 1, marginTop: 50 }}>
              <Image source={exitButton} alt="" />
          </View>
        </TouchableWithoutFeedback>
        <StatusBar hidden />
        <View style={{ width: 800, height: 500, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
          <View
            style={{
              transform: [
                { scale: 2.5 },
                { rotateZ: '-3deg' },
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
      </View>
    );
  }
}

export default GrowGameScreen;
