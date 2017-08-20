import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const styles = {
  // buttonStyle: {
  //   flex: 1,
  //   alignSelf: 'stretch',
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#000',
  //   borderRadius: 50,
  //   borderWidth: 5,
  //   borderColor: '#888',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 2,
  //   shadowRadius: 4,
  //   marginLeft: 15,
  //   marginRight: 15,
  //   marginBottom: 20,
  //   marginTop: 20,
  // },
  imageStyle: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
};

const MusicButton = ({ onPress, children, source }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export { MusicButton };
