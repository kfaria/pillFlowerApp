import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import Camera from 'react-native-camera';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    height: 1200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
};

class GiftScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTabBar: true,
      navBarButtonOffset: 0,
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
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        {/* <View style={[styles.buttonStyle, { top: this.state.navBarButtonOffset }]}>
          <NavBarButton onPress={() => this.toggleTabBar()} />
        </View> */}
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Capture!</Text>
        </Camera>
      </View>
    );
  }
}

export default GiftScreen;
