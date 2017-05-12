import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import NavBarButton from '../components/NavBarButton';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
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
        </View>
      </View>
    );
  }
}

export default GrowScreen;
