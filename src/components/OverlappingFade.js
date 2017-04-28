import React, { Component } from 'react';
import { View } from 'react-native';
import { FadeInPart1 } from './FadeInPart1';
import { FadeInPart2 } from './FadeInPart2';

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class OverlappingFade extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <FadeInPart1 />
        <FadeInPart2 />
      </View>
    );
  }
}

export { OverlappingFade };
