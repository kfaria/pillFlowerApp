/*

  pillArray.push(
        <Image source={pillButton} position= 'absolute' key={i} xPosition={xPos} yPostion={yPos}
        transform={[ {translateX: xPos}, {translateY: yPos}, {rotateZ: pillAngle.toString() + 'deg'} ]}
        />
      )

This component takes in the props defined below and renders a layer of the
pillFlower, one layer at a time.  The props are as follows:
  pillImage={}
  numOfPetals={}
  flowerRadius={}
  height={}
  width={}
*/

import React, { Component } from 'react';
import { View, Animated, TouchableHighlight } from 'react-native';
import pillButton from './button.png';
import FlowerPetal from './FlowerPetal';

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

class FlowerRowBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
      activated: false,
    };
    Animated.timing(
          this.state.opacityValue, {
            toValue: 1,
            duration: 200,
          },
        ).start();
  }
  renderBody() {
    console.log('hi');
    const angle = (2 * Math.PI) / this.props.numOfPetals;
    for (let i = 1; i < this.props.numOfPetals; i++) {
      const xPos = (this.props.flowerRadius) * Math.cos((i) * angle);
      const yPos = (this.props.flowerRadius) * Math.sin((i) * angle);
      const pillAngle = 1 * angle * (180 / Math.PI) * i;
      // console.log(xPos + ',' + yPos + ',' + pillAngle.toString() + 'deg');
      const pillDelay = 200 * i;
      if (this.state.activated === false) {
        const tempString = this.props.rowID;
        pillArray.push(
          <FlowerPetal
            key={tempString+'pill'+i}
            position='absolute'
            delayBetweenPill={pillDelay}
            pillButtonImage={this.props.pillImage}
            pillSpec={[{ translateX: xPos }, { translateY: yPos }, { rotateZ: pillAngle.toString() + 'deg' }]}
          />,
        );
        this.setState({ activated: true });
      }
    }
  }

  render() {
    console.log(...pillArray);
    return (
      // <Animated.View style={{ opacity: this.state.opacityValue }} >
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableHighlight onPress={() => this.renderBody()}>
          <View style={{ height: 100, width: 100 }}>
            <FlowerPetal pillSpec={[{ translateX: this.props.flowerRadius }, { translateY: 0 }]} position='absolute' pillButtonImage={this.props.pillImage} />
            {pillArray}
          </View>
        </TouchableHighlight>
      </View>
      // </Animated.View>
    );
  };
}

export { FlowerRowBuilder };
