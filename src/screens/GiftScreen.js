import React, { Component } from 'react';
import { View, StatusBar, Text, CameraRoll, Image } from 'react-native';
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
      hasTakenPicture: false,
      photoData: '',
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
  }
  takePicture() {
    const options = {};
    this.setState({
      hasTakenPicture: true,
    });
    this.camera.capture({ metadata: options })
      .then(data => this.setState({ photoData: data }))
      .catch(err => console.error(err));
    this.renderContent();
  }
  renderContent() {
    console.log('rendering new content')
    console.log(this.state.photoData['path'])
    if (this.state.hasTakenPicture) {
      return (
        <View>
          <Text style={{ color: 'white', margin: 100 }}>
            Time to do screenshot shit.
          </Text>
          <Image source={{ uri: this.state.photoData['path'] }} style={{ width: 400, height: 400 }} />
        </View>
      );
    }
    return (
      <Camera
        ref={(cam) => { this.camera = cam; }}
        style={styles.preview}
        captureTarget={Camera.constants.CaptureTarget.disk}
        aspect={Camera.constants.Aspect.fill}
        type={Camera.constants.Type.front}
      >
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Capture!</Text>
      </Camera>
    );
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        {this.renderContent()}
      </View>
    );
  }
}

export default GiftScreen;
