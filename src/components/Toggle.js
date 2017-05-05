import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      backgroundColor: '#000', 
    };
  }

  render() {
    return(
    <View style={styles.toggleStyle}>
      <Text style={{ backgroundColor: this.state.backgroundColor }} onPress={() => {
          if (this.state.isOn === false){
            this.setState({ backgroundColor: '#F00', isOn: true }); 
          }
          else {
            this.setState({ backgroundColor: '#000', isOn: false });  
          }
          }}>  
      </Text>
      </View>

  );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 1,
    paddingBottom: 1,
    borderWidth: 5,
    borderRadius: 50,
  },
  toggleStyle: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#999',
    marginLeft: 5,
    marginRight: 5,
  },
};

export { Toggle };