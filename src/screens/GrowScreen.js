import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class GrowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showBar: true };
  }
  tabBarOnOff() {
    if (this.state.showBar) {
      this.setState({ showBar: false });
      console.log('off');
    }
    if (!this.state.showBar) {
      this.setState({ showBar: true });
      console.log('on');
    }
  }
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Text style={{ marginTop: 50 }}>
          Im Grow!
        </Text>
      </View>
    );
  }
}

export default GrowScreen;
