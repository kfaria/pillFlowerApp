import React, { Component } from 'react';
import { View, CameraRoll, Text, Dimensions, Image, TouchableOpacity, Share } from 'react-native';
import RNFS from 'react-native-fs';
import { takeSnapshot } from 'react-native-view-shot';
import { PlayFlower } from '../components';
import pic1 from '../images/pill-flowers/01.png';
import pic2 from '../images/pill-flowers/02.png';
import pic3 from '../images/pill-flowers/03.png';
import pic4 from '../images/pill-flowers/04.png';

const { width, height } = Dimensions.get('window');

const styles = {
  mainStyle: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
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
    color: 'white',
    fontSize: 20,
    margin: 10
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
          message: 'BAM: we\'re helping your business with awesome React Native apps',
          url: 'http://bam.tech',
          title: 'Wow, did you see that?',
        }, {
          // Android only:
          dialogTitle: 'Share BAM goodness',
          // iOS only:
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter',
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
      <View ref="fullFrame" style={styles.mainStyle}>
        {
          this.state.photos.map((p, i) => {
            return (
              <Image
                key={{ i }}
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
        <View style={{ position: 'relative', right: 400, top: 50 }}>
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
        </View>
      </View>
    );
  }
}

export default GiftScreenEdit;
