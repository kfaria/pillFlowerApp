import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { FlowerBase } from '../components';
import pill1 from '../images/play-pill-flowers/01ns.png';
import pill2 from '../images/play-pill-flowers/02ns.png';
import pill3 from '../images/play-pill-flowers/03ns.png';
import pill4 from '../images/play-pill-flowers/04ns.png';
import pill5 from '../images/play-pill-flowers/05ns.png';
import outline from '../images/play-pill-flowers/outline.png';


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
        <View style={{ width: 800, height: 800, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
          {/*<View
            style={{transform: [{scale: 2.5}]}} 
          >
          <Image
            source={outline}
            alt=''
          />
          </View>*/}
          <FlowerBase
            height={800}
            width={800}
            rows={5}
            rowRadius={[150, 170, 125, 68, 0]}
            rowNumOfPetals={[8, 8, 8, 16, 1]}
            rowAngleOffset={['30deg', '0deg', '0deg', '0deg', '0deg']}
            rowNames={['level0', 'level1', 'level2', 'level3', 'level4']}
            pillRowImage={[pill5, pill4, pill3, pill2, pill1]}
          />
        </View>
      </View>
    );
  }
}

export default GrowScreen;
