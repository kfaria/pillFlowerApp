import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      backgroundColor: '#000',
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
        </Text>
    </TouchableOpacity>
    );
  }
}

const styles = {
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
}


export { ToggleButton };