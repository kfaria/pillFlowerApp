import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { FlowerBuilder } from '../components';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

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
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <FlowerBuilder numOfPetals={8} flowerRadius={300} width={600} height={600} />
      </View>
    );
  }
}

export default GrowScreen;
