import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class GiftScreen extends Component {

  render() {
    return (
      <View>
        <StatusBar hidden />
        <Text style={{ marginTop: 50 }}>
          Im Gift!
        </Text>
      </View>
    );
  }
}

export default GiftScreen;
