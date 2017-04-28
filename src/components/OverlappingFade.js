import React, { Component } from 'react';
import { View } from 'react-native';
import { FadeInPart1 } from './FadeInPart1';
import { FadeInPart2 } from './FadeInPart2';

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

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
};

export { OverlappingFade };
