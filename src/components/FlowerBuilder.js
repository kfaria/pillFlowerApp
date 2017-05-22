/*
This component takes in the props defined below and renders a layer of the
pillFlower, one layer at a time.  The props are as follows:
  *this.pillSource
  *this.numPetals
  *this.radius
*/

import React, { Component } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import pillButton from './button.png';
import FlowerPetal from './FlowerPetal'

const styles = {
  circle: {
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'green',
  },
  circle2: {
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'blue',
  },
};
const pillArray = [];

class FlowerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
    };
    Animated.timing(
          this.state.opacityValue, {
            toValue: 1,
            duration: 200,
          },
        ).start();
    this.renderBody();
  }
  state = { pill: [] };

  renderBody() {
    const angle = (2 * Math.PI) / this.props.numOfPetals;
    for (let i = 0; i < this.props.numOfPetals; i++) {
      //
      let xPos = (this.props.flowerRadius) * Math.cos((i) * angle);
      let yPos = (this.props.flowerRadius) * Math.sin((i) * angle);
      pillAngle = -1 * angle * (180/Math.PI)  * i;
      console.log(xPos + ',' + yPos + ',' + pillAngle.toString() + 'deg');
      const pillDelay = 200*i;
      // console.log(pillDelay)
      /*pillArray.push(
        <Image source={pillButton} position= 'absolute' key={i} xPosition={xPos} yPostion={yPos}
        transform={[ {translateX: xPos}, {translateY: yPos}, {rotateZ: pillAngle.toString() + 'deg'} ]}
        />
      );*/
      pillArray.push(
        <FlowerPetal
        key={i}
        position= 'absolute'
        delayBetweenPill={pillDelay}                
        pillButtonImage={pillButton}
        pillSpec={[ {translateX: xPos}, {translateY: yPos}, {rotateZ: pillAngle.toString() + 'deg'} ]}
        />
      );
    }
  }

  render() {
    return (
      // <Animated.View style={{ opacity: this.state.opacityValue }} >
        <View style={{height: this.props.height, width: this.props.width, flex: 0, 
          alignItems: 'center', justifyContent: 'center'}} >
          <FlowerPetal position= 'absolute' pillButtonImage={pillButton} 
            
          />
          {pillArray}          
        </View>
      // </Animated.View>
    );
  };
}

export { FlowerBuilder };
