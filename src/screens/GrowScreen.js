import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { FlowerBase } from '../components';
import pillButton1 from '../components/button.png';


const styles = {
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class GrowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showBar: true };
  }
  tabBarOnOff() {
    if (this.state.showBar) {
      this.setState({ showBar: false });
      console.log('off');
    }
    if (!this.state.showBar) {
      this.setState({ showBar: true });
      console.log('on');
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <View >
          <FlowerBase
            height={600}
            width={600}
            rows={2}
            rowRadius={[200, 100, 100]}
            rowNumOfPetals={[4, 4, 4]}
            pillRowImage={[pillButton1, pillButton1, pillButton1]}
          />
        </View>
      </View>
    );
  }
}

export default GrowScreen;
