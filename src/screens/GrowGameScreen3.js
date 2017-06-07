import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import pill31 from '../images/play-pill-flowers/level3/301.png';
import pill32 from '../images/play-pill-flowers/level3/302.png';
import pill33 from '../images/play-pill-flowers/level3/303.png';
import pill34 from '../images/play-pill-flowers/level3/304.png';
import pill35 from '../images/play-pill-flowers/level3/305.png';
import red2 from '../images/play-pill-flowers/level3/red2.png';
import red3 from '../images/play-pill-flowers/level3/red3.png';
import outline3 from '../images/play-pill-flowers/level3/outline.png';
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
                //{ rotateZ: '-2deg' },
              ],
            }}
          >
          {/*<View style={{ borderColor: 'red', borderWidth: 2 }}>*/}
          <View>
            <Image
              source={outline3}
              alt=''
              style={styles.outlineStyle}
            />
          </View>
          </View>
            <FlowerBase
              height={800}
              width={800}
              rows={7}
              rowRadius={[2000, 180, 130, 75, 130, 35, 2000]}
              rowNumOfPetals={[16, 16, 8, 16, 16]}
              rowAngleOffset={['0deg', '0deg', '11.25deg', '-45deg', '0deg', '0deg', '0deg']}
              rowNames={['0level03', '1level13', '2level23', '3level33', '4level43', '5level53', '6level63']}
              pillRowImage={[red3, pill34, pill33, pill35, pill32, pill31, red2]}
              resetStatus={this.state.reset}
            />
        </View>
      </View>
    );
  }
}

export default GrowGameScreen;
