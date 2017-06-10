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
    timer = setTimeout(() => { this.props.navigation.navigate('dream'); }, 60000);
  }

  render() {
    this.touchResponse();
    return (
      <View style={styles.viewStyle} {...this.state.panResponder.panHandlers}>
        <StatusBar hidden />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame1')}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level I
            </Text>
            <Image source={growLevelOne} style={{ height: 100, width: 100 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame2')}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level II
            </Text>
            <Image source={growLevelOne} style={{ height: 100, width: 100 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame3')}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
              Level III
            </Text>
            <Image source={growLevelOne} style={{ height: 100, width: 100 }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GrowScreen;
