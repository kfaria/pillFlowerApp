import React, { Component } from 'react';
import { View, CameraRoll, Text, Dimensions, Image, TouchableOpacity, Share, Animated } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RNFS from 'react-native-fs';
import { takeSnapshot } from 'react-native-view-shot';
import { PillLibrary } from '../components';
import frame from '../images/frame.png';
import arrow from '../images/arrow.png';

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
    alignItems: 'center',
    position: 'absolute',
    bottom: 209,
    left: 422,
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 2,
    borderColor: 'grey',
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    // backgroundColor: 'black',
    // padding: 15,
    // width: 200,
    // left: 420,
    // bottom: 50,
  },
  containerStyle: {
  },
};

class GiftScreenEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      fadeAnim: new Animated.Value(1),
    };
  }
  componentWillMount() {
    this.getPhotos();
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 12000,              // Make it take a while
      },
    ).start();
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
          message: 'Here\'s a pillflower! Disclaimer: Sent pictures may be posted to the Pillflower instagram account.',
          url: uri,
          title: 'You\'ve received a Pillflower!',
        }, {
          // iOS only:
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter',
            'com.apple.UIKit.activity.PostToInstagram',
            'com.apple.UIKit.activity.AssignToContact',
            'com.apple.UIKit.activity.CopyToPasteboard',
            'com.apple.UIKit.activity.Print',
            'com.apple.UIKit.activity.AirDrop',
            'com.apple.UIKit.activity.SaveToCameraRoll',
          ],
        },
      ).then(() => this.props.navigation.dispatch(NavigationActions.back()));
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
          style={{ zIndex: 20, position: 'absolute', right: 180, top: 92 }}
        >
          <Image source={require('../images/exitButton.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <View ref="fullFrame" style={styles.fullFrameStyle}>
          <Image
            source={frame}
            style={{
              position: 'absolute',
              height: height - 160,
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
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>
            Send to a friend!
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
        <Animated.View
          style={{
            position: 'absolute',
            bottom: -50,
            left: 110,
            opacity: this.state.fadeAnim,
            zIndex: 40,
            borderWidth: 2,
            borderColor: 'red',
          }}
        >
          <Image
            source={arrow}
            style={{
              width: 100,
              height: 200,
              position: 'absolute',
              bottom: 200,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              position: 'absolute',
              bottom: 400,
              width: 200,
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0)',
              textShadowColor: '#ffffff',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
          >
            Tap pills to place them on the screen, then press gift to send the picture to a friend!
          </Text>
        </Animated.View>
      </View>
    );
  }
}

export default GiftScreenEdit;
