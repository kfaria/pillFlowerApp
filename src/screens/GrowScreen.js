import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
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
        <View style={{ width: 800, height: 800, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <FlowerBase
            height={800}
            width={800}
            rows={4}
            rowRadius={[0, 300, 400, 100]}
            rowNumOfPetals={[1, 8, 16, 4]}
            rowNames={['level0','level1', 'level2', 'level3']}
            pillRowImage={[pillButton1, pillButton1, pillButton1, pillButton1]}
          />
          {/*<Image source={pillButton1} />*/}
        </View>
      </View>
    );
  }
}

export default GrowScreen;
