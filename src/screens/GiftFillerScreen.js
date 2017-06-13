import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Image, PanResponder } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
};

let timer = null;

class GiftFillerScreen extends Component {
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
      touchCount: 0,
      onScreen: false,
    };
  }
  touchResponse() {
    console.log('clearing timer');
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.checkCurrentScreen();
    }, 120000);
  }
  checkCurrentScreen() {
    if (this.props.screenProps.currentScreen === 'giftFillerScreen') {
      this.props.navigation.navigate('home');
      console.log('naving');
    }
  }
  render() {
    this.touchResponse();
    return (
      <View style={styles.viewStyle}
        {...this.state.panResponder.panHandlers}
      >
        <StatusBar hidden />
        <Image
          style={{ height, width }} source={require('../images/GatherPlaceholder.png')}
        />
      </View>
    );
  }
}

export default GiftFillerScreen;
