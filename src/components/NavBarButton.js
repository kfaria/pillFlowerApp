import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const styles = {
  imageStyle: {
    width: 25,
    height: 25,
  },
  buttonStyle: {
    flex: 1,
  },
};

const NavBarButton = ({ onPress }) => {
  const { buttonStyle, imageStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Image
        source={require('../images/hamburgerMenuIcon.png')}
        style={imageStyle}
      />
    </TouchableOpacity>
  );
};

export default NavBarButton;
