import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#999',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    marginTop: 20,
  },
};

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  // console.log(children);
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
