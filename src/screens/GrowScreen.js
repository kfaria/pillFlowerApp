import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity, PanResponder } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
// import pill1 from '../images/play-pill-flowers/01ns.png';
// import pill2 from '../images/play-pill-flowers/02ns.png';
// import pill3 from '../images/play-pill-flowers/03ns.png';
// import pill4 from '../images/play-pill-flowers/04ns.png';
// import pill5 from '../images/play-pill-flowers/05ns.png';
import growLevelOne from '../images/growLevelOne.png';
import growLevelTwo from '../images/play-pill-flowers/level2/growLevel2.png';
import growLevelThree from '../images/play-pill-flowers/level3/growLevel3.png';
import outline from '../images/play-pill-flowers/outline.png';
import resetButton from '../images/swirlButtonWhite.png';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
};

let timer = null;

class GrowScreen extends Component {
  constructor(props) {
    super(props);

    // Code block for timer within constructor. Add panResponder in state. wire it up in the parent view under the render
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        console.log('press');
      },
      // onPanResponderMove: (event, gesture) => {},
      onPanResponderRelease: (event, gesture) => {
        let count = this.state.touchCount;
        this.setState({ touchCount: count + 1 });
        console.log('released');
        // this.touchResponse();
      },
    });
    // end of code block for timer.  Add new function outside of constructor touchResponse()

    this.state = {
      panResponder,
      showTabBar: false,
      navBarButtonOffset: 40,
      reset: false,
    };
    setInterval(() => {
      // if onscreen, set on screen
      if (this.props.screenProps.test.routes[0].index === 1) {
        this.setState({ onScreen: true });
      } else {
        this.setState({ onScreen: false });
      }
    }, 100);
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
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

  touchResponse() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (this.state.onScreen) {
        this.props.navigation.navigate('dream');
        console.log('naving')
      }
    }, 3000);
  }

  render() {
    this.touchResponse();
    return (
      <View style={styles.viewStyle}
      {...this.state.panResponder.panHandlers}
      >
        <StatusBar hidden />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame1')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level I
            </Text>
            <Image source={growLevelOne} style={{ height: 200, width: 200 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame2')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level II
            </Text>
            <Image source={growLevelTwo} style={{ height: 200, width: 200 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame3')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level III
            </Text>
            <Image source={growLevelThree} style={{ height: 200, width: 200 }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GrowScreen;
