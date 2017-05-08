import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { PanZoom } from '../components';

class PlayScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Text>
          Im Play!
        </Text>
        <PanZoom>
          <View>
            <Text style={{ color: 'red', fontSize: 25 }}>Hi</Text>
          </View>
        </PanZoom>
      </View>
    );
  }
}

export default PlayScreen;
