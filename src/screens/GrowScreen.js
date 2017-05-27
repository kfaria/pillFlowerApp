import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import { FlowerBase } from '../components';
import pill1 from '../images/play-pill-flowers/01ns.png';
import pill2 from '../images/play-pill-flowers/02ns.png';
import pill3 from '../images/play-pill-flowers/03ns.png';
import pill4 from '../images/play-pill-flowers/04ns.png';
import pill5 from '../images/play-pill-flowers/05ns.png';
import outline from '../images/play-pill-flowers/outline.png';


const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
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
        <StatusBar hidden />
        <View style={[styles.buttonStyle, { top: this.state.navBarButtonOffset }]}>
          <NavBarButton onPress={() => this.toggleTabBar()} />
        <View style={{ width: 800, height: 500, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
          <View
            style={{ opacity: 0.65, transform: [{ scale: 2.5 }, { rotateZ: '-2deg' }]}}
          >
          <View style={{ marginLeft: 38, marginTop: 38 }}>
            <Image
              source={outline}
              alt=''
              
            />
          </View>
            
          </View>
            <FlowerBase
              height={800}
              width={800}
              rows={5}
              rowRadius={[165, 170, 125, 68, 0]}
              rowNumOfPetals={[8, 8, 8, 16, 1]}
              rowAngleOffset={['20deg', '0deg', '20deg', '0deg', '0deg']}
              rowNames={['level0', 'level1', 'level2', 'level3', 'level4']}
              pillRowImage={[pill5, pill4, pill3, pill2, pill1]}
            />
        </View>
      </View>
      </View>
    );
  }
}

export default GrowScreen;
