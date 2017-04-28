import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      backgroundColor: '#000',
      toggleStyle: {
        height: 50,
        width: 50,
        backgroundColor: '#000',    
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#999',
        marginLeft: 5,
        marginRight: 5,
      },
    };
  }

  render() {
    return(
      
      <TouchableOpacity style={this.state.toggleStyle} onPress={() => {
        this.state.isOn = true;
        this.state.toggleStyle.backgroundColor = '#F00';
        }}>
        <Text style={styles.textStyle}>
          
        </Text>
      </TouchableOpacity>

  );
  }
}

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
    height: 50,
    width: 50,
    backgroundColor: '#fff',    
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#999',
    marginLeft: 5,
    marginRight: 5,
  },
};

export { Toggle };