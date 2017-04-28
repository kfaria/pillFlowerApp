import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const Toggle = ({ onPress, children }) => {
    return (
      <TouchableOpacity style={styles.textStyle} onPress={onPress}>
        <Image
          style={styles.buttonStyle}
          source={require('./button.png')}
        />
      </TouchableOpacity>
    );
};


const styles = {
  buttonStyle: {
    height: 50,
    width: 50,
  },
  textStyle: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
  toggleOnStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  toggleOffStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export { Toggle };
