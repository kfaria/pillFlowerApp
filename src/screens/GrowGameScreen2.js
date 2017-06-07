import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import pill21 from '../images/play-pill-flowers/level2/201.png';
import pill22 from '../images/play-pill-flowers/level2/202.png';
import pill23 from '../images/play-pill-flowers/level2/203.png';
import pill24 from '../images/play-pill-flowers/level2/204.png';
import pill25 from '../images/play-pill-flowers/level2/205.png';
import red1 from '../images/play-pill-flowers/level2/red1.png';
import outline2 from '../images/play-pill-flowers/level2/outline.png';
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
    console.log(flowerBaseArray);
    flowerBaseArray.push(
      <FlowerBase
        key={outline2}
        height={800}
        width={800}
        rows={6}
        rowRadius={[2000, 225, 170, 120, 68, 0]}
        rowNumOfPetals={[0, 32, 16, 16, 16, 1]}
        rowAngleOffset={['0deg', '0deg', '0deg', '10deg', '0deg', '0deg']}
        rowNames={['5red', '0level02', '1level12', '2level22', '3level32', '4level42']}
        pillRowImage={[red1, pill25, pill24, pill23, pill22, pill21]}
        resetStatus={this.state.reset}
      />
    );
    console.log(flowerBaseArray);
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
  
  reset() {
    while (flowerBaseArray.length > 0) {
      flowerBaseArray.pop();
    }
    this.setState({ reset: true });
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableWithoutFeedback onPress={() => this.reset()}>
        {/*<TouchableWithoutFeedback onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>*/}
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
                //{ rotateZ: '-2deg' },
              ],
            }}
          >
          {/*<View style={{ borderColor: 'red', borderWidth: 2 }}>*/}
          <View>
            <Image
              source={outline2}
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
