import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
};

class GatherScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={{ marginTop: 50 }}>
          Im Gather!
        </Text>
      </View>
    );
  }
}

export default GatherScreen;
