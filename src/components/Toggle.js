import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Toggle extends Component {
  state = { toggleSwtiched: 0 };

  render() {
    return ( 
        <Text>HI</Text>
    );
  }
}


const styles = {
  buttonStyle: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
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