import React from 'react';
import { View, Text } from 'react-native';

const SoundPanel = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#727272',
  }
}
export { SoundPanel };
