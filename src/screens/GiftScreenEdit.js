import React, { Component } from 'react';
import { View, CameraRoll, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import { takeSnapshot } from 'react-native-view-shot';
import { PlayFlower } from '../components';

const { width, height } = Dimensions.get('window');
const pic1 = require('../images/pill-flowers/01.png');

class GiftScreenEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }
  componentWillMount() {
    this.getPhotos();
  }
  getPhotos() {
    console.log('GETTING PHOTOS');
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'All',
    }).then((r) => {
      this.setState({ photos: r.edges });
    });
  }
  takeScreenShot() {
    takeSnapshot(this.refs.fullFrame, {
      format: 'jpeg',
      quality: 0.8,
    })
    .then(
      uri => console.log("Image saved to", uri),
      error => console.error("Oops, snapshot failed", error)
    );
  }
  // create a path you want to write to
  saveToFs() {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';

    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <View ref="fullFrame">
        {
          this.state.photos.map((p, i) => {
            return (
              <Image
                style={{
                  width,
                  height: width,
                  zIndex: -55,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })
        }
        <PlayFlower
          imageSource={pic1}
          width={200}
          height={200}
          maxSize={450}
          minSize={50}/>
        <TouchableOpacity
          onPress={() => {
            this.takeScreenShot();
            this.saveToFs();
          }
        }
        >
          <Text>
            Save!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GiftScreenEdit;
