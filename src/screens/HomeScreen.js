import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import bgvid from '../images/background.mp4';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 50,
    borderColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Platelet',
    fontSize: 80,
    textShadowColor: '#74d6af',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  imageStyle: {
    width: 80,
    height: 85,
  },
  infoImageStyle: {
    flex: 0,
    position: 'absolute',
    bottom: 10,
    left: 350,
    width: 50,
    height: 50,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Video
          source={bgvid}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          rate={1.0}                              // 0 is paused, 1 is normal.
          volume={1.0}                            // 0 is muted, 1 is normal.
          muted={false}                           // Mutes the audio entirely.
          paused={false}                          // Pauses playback entirely.
          resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
          repeat                                  // Repeat forever.
          playInBackground={false}                // Audio continues to play when app entering background.
          playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={this.loadStart}            // Callback when video starts to load
          onLoad={this.setDuration}               // Callback when video loads
          onProgress={this.setTime}               // Callback every ~250ms with currentTime
          onEnd={this.onEnd}                      // Callback when playback finishes
          onError={this.videoError}               // Callback when video cannot be loaded
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
          style={styles.backgroundVideo}
      />
        <Image source={require('../images/flowerButtonTransparent.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('grow')}>
          <Text style={styles.textStyle}>
            grow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gather')}>
          <Text style={styles.textStyle}>
            gather
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('play')}>
          <Text style={styles.textStyle}>
            play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('dream')}>
          <Text style={styles.textStyle}>
            dream
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gift')}>
          <Text style={styles.textStyle}>
            gift
          </Text>
        </TouchableOpacity>
        <Image source={require('../images/flowerButtonTransparent.png')} style={styles.imageStyle} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('credit')}>
          <Image source={require('../images/infoButton.png')} style={styles.infoImageStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
