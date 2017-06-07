import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import pill1 from '../images/play-pill-flowers/01ns.png';
import pill2 from '../images/play-pill-flowers/02ns.png';
import pill3 from '../images/play-pill-flowers/03ns.png';
import pill4 from '../images/play-pill-flowers/04ns.png';
import pill5 from '../images/play-pill-flowers/05ns.png';
import outline from '../images/play-pill-flowers/outline.png';
import resetButton from '../images/swirlButtonWhite.png';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
};

class GrowScreen extends Component {
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
      <View style={styles.viewStyle}>
        {/* <TouchableWithoutFeedback onPress={() => this.resetFlower()}>
          <View style={{ flex: 1, marginTop: 50 }}>
              <Image source={resetButton} alt="" />
          </View>
        </TouchableWithoutFeedback>*/}
        <StatusBar hidden />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame1')}>
          <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
            Press here for game 1!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame2')}>
          <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
            Press here for game 2!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('growGame3')}>
          <Text style={{ fontSize: 40, margin: 20, color: 'white' }}>
            Press here for game 3!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GrowScreen;
