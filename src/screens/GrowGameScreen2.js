import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase1 } from '../components';
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
let flowerBaseArray2 = [];

class GrowGameScreen extends Component {
  constructor(props) {
    super(props);

    // Code block for timer within constructor. Add panResponder in state. wire it up in the parent view under the render
    // const panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: () => true,
    //   onPanResponderGrant: (event, gesture) => {
    //     console.log('press');
    //   },
    //   // onPanResponderMove: (event, gesture) => {},
    //   onPanResponderRelease: (event, gesture) => {
    //     let count = this.state.touchCount;
    //     this.setState({ touchCount: count + 1 });
    //     console.log('released');
    //     // this.touchResponse();
    //   },
    // });
    // end of code block for timer.  Add new function outside of constructor touchResponse()

    this.state = {
      showTabBar: false,
      navBarButtonOffset: 40,
      reset: false,
      // panResponder,
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
    // console.log(flowerBaseArray2);
    flowerBaseArray2.push(
      <FlowerBase1
        key={outline2}
        height={800}
        width={800}
        rows={5}
        rowRadius={[255, 195, 140, 75, 0]}
        rowNumOfPetals={[16, 16, 16, 16, 1]}
        rowAngleOffset={['0deg', '0deg', '-6.5deg', '0deg', '0deg']}
        rowNames={['0level02', '1level12', '2level22', '3level32', '4level42']}
        pillRowImage={[pill25, pill24, pill23, pill22, pill21]}
        resetStatus={this.state.reset}
      />
    );
  }

  componentWillUnmount() {
    // console.log("unmounted");
    while (flowerBaseArray2.length > 0) {
      flowerBaseArray2 = [];
    }
    // this.setState({ reset: true });
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
    while (flowerBaseArray2.length > 0) {
      flowerBaseArray2.pop();
    }
    this.setState({ reset: true });
    // this.props.navigation.navigate('growGame2');
    this.goBack();
  }
  goBack() {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  // touchResponse() {
  //   clearTimeout(timer);
  //   timer = setTimeout(() => { this.props.navigation.navigate('dream'); }, 5000);
  // }

  render() {
    // console.log(flowerBaseArray2);
    return (
      <View style={styles.viewStyle}
      // {...this.state.panResponder.panHandlers}
       >
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
                { scale: 2.845 },
                { rotateZ: '-1deg' },
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
            {flowerBaseArray2}
        </View>
      </View>
    );
  }
}

export default GrowGameScreen;
