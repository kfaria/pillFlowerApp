import React, { Component } from 'react';
import { View, CameraRoll, Text, Dimensions, Image, TouchableOpacity, Share } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RNFS from 'react-native-fs';
import { takeSnapshot } from 'react-native-view-shot';
import { PillLibrary } from '../components';
import frame from '../images/frame.png';

const { width, height } = Dimensions.get('window');

const styles = {
  contentContainerStyle: {
    width,
    height,
  },
  fullFrameStyle: {
    backgroundColor: 'black',
    width,
    height: (height - 170),
    alignItems: 'center',
    zIndex: -10,
  },
  buttonStyle: {
    padding: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    shadowColor: '#666',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 8,
    borderRadius: 8,
  },
  textStyle: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    margin: 10,
    backgroundColor: 'black',
    padding: 10,
    left: 425,
    bottom: 10,
  },
  containerStyle: {
  },
};

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
      uri => {
        console.log("Image saved to", uri);
        Share.share({
          message: 'Here\'s a pillflower!',
          url: uri,
          title: 'You\'ve received a Pillflower!',
        }, {
          // iOS only:
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter',
            'com.apple.UIKit.activity.AssignToContact',
            'com.apple.UIKit.activity.CopyToPasteboard',
            'com.apple.UIKit.activity.Print',
            'com.apple.UIKit.activity.AirDrop',
            'com.apple.UIKit.activity.SaveToCameraRoll',
          ],
        },
      );
      },
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
      <View style={styles.contentContainerStyle}>
        {/* Escape Button */}
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
          style={{ zIndex: 20, position: 'absolute', right: 110, top: 90 }}
        >
          <Image source={require('../images/exitButton.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <View ref="fullFrame" style={styles.fullFrameStyle}>
          <Image
            source={frame}
            style={{
              position: 'absolute',
              maxHeight: height - 160,
              width,
              backgroundColor: 'rgba(0,0,0,0)',
              resizeMode: 'stretch',
            }}
          />
          <PillLibrary />
          {
            this.state.photos.map((p, i) => {
              return (
                <Image
                  key={{ i }}
                  style={{
                    width,
                    height: height - 50,
                    zIndex: -55,
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              );
            })
          }
        </View>
        <TouchableOpacity
          onPress={() => {
            this.takeScreenShot();
            // this.saveToFs();
          }
        }
        >
          <Text style={styles.textStyle}>
            Gift to a friend!
          </Text>
        </TouchableOpacity>
        {/* <View style={{ position: 'relative', right: 400, top: 50 }}>
          <PlayFlower
            imageSource={pic1}
            width={200}
            height={200}
            maxSize={450}
            minSize={50}
          />
        </View>
        <View style={{ position: 'relative', right: 175, top: 50 }}>
          <PlayFlower
            imageSource={pic2}
            width={200}
            height={200}
            maxSize={450}
            minSize={50}
          />
        </View>
        <View style={{ position: 'relative', left: 100, top: 50 }}>
          <PlayFlower
            imageSource={pic3}
            width={200}
            height={200}
            maxSize={450}
            minSize={50}
          />
        </View>
        <View style={{ position: 'relative', left: 350, top: 50 }}>
          <PlayFlower
            imageSource={pic4}
            width={200}
            height={200}
            maxSize={450}
            minSize={50}
          />
        </View> */}
      </View>
    );
  }
}

export default GiftScreenEdit;
