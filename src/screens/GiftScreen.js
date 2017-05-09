import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
  },
};

class GiftScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <Text style={{ marginTop: 50 }}>
          Im Gift!
        </Text>
      </View>
    );
  }
}

export default GiftScreen;
