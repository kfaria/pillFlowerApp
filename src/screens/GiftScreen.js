import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  CameraRoll,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';

const { width, height } = Dimensions.get('window')

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
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    margin: 100,
    color: 'white',
  },
  imageStyle: {
    maxWidth: 500,
    maxHeight: 500,
  },
};

class GiftScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasTakenPicture: false,
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
  }
  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => { console.log(data); })
      .catch(err => console.error(err));
  }
  // renderContent() {
  //   console.log('rendering new content')
  //   if (this.state.hasTakenPicture) {
  //     this.getPhotos();
  //     return (
  //       <View>
  //         <Text style={styles.textStyle}>
  //           Hello camera roll
  //         </Text>
  //         {
  //           this.state.photos.map((p) => {
  //             return (
  //               <Image
  //                 style={{
  //                   width: width / 3,
  //                   height: width / 3,
  //                 }}
  //                 source={{ uri: p.node.image.uri }}
  //               />
  //             );
  //           })
  //         }
  //       </View>
  //     );
  //   }
  // }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}
        >
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('EditGiftScreen');
            this.takePicture();
          }}
          >
            <Text
              style={styles.capture}
            >
              navigate!
            </Text>
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }
}

export default GiftScreen;
