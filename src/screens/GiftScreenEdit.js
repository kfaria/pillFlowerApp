import React, { Component } from 'react';
import { View, CameraRoll, Text, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    }).then(r => this.setState({ photos: r.edges }));
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 100, color: 'white' }}>
          Edit time
        </Text>
        {
          this.state.photos.map((p) => {
            return (
              <Image
                style={{
                  width: width,
                  height: width,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })
        }
      </View>
    );
  }
}

export default GiftScreenEdit;
