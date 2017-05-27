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
import { View, Animated, TouchableHighlight, PanResponder } from 'react-native';
import FlowerPetal from './FlowerPetal';

// const pillArray = [];

class FlowerRowBuilder extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        position.setOffset({ x: position.x._value, y: position.y._value });
        position.setValue({ x:0, y:0 });
      },
      onPanResponderMove: (event, gesture) => {
        if (this.state.rowSet === false) {
          position.setValue({ x: gesture.dx, y: gesture.dy });          
          if (gesture.moveX >= 780 && gesture.moveX <= 820 ) {
            position.setValue({ x: gesture.moveX - position.x, y: gesture.moveY - position.Y });
            console.log(gesture.moveX);
          }
          console.log(gesture);
          if (gesture.moveX === 800) {
            this.renderBody();
          }
        }
      },
      onPanResponderRelease: (event, gesture) => {
        position.flattenOffset();
      },
    });
    this.pillArray = [];
    this.state = {
      panResponder,
      position,
      activated: false,
      rowSet: false,
      angleOffset: '0deg',
      array: [],
    };
  }

  renderBody() {
    const angle = (2 * Math.PI) / this.props.numOfPetals;
    for (let i = 1; i < this.props.numOfPetals; i++) {
      //determine offset requirement
      const xPos = (this.props.flowerRadius) * Math.cos((i) * angle);
      const yPos = (this.props.flowerRadius) * Math.sin((i) * angle);
      const pillAngle = 1 * angle * (180 / Math.PI) * i;
      // console.log(xPos + ',' + yPos + ',' + pillAngle.toString() + 'deg');
      const pillDelay = 200 * i;
      if (this.state.activated === false) {
        const tempString = this.props.rowID;
        this.pillArray.push(
          <FlowerPetal
            key={tempString+'pill'+i}
            position='absolute'
            delayBetweenPill={pillDelay}
            pillButtonImage={this.props.pillImage}
            pillSpec={[{ translateX: xPos }, { translateY: yPos }, { rotateZ: pillAngle.toString() + 'deg' }]}
          />,
        );
        this.setState({ activated: true, rowSet: true, angleOffset: this.props.angleOffset });
      }
    }
  }

  render() {
    // console.log(...pillArray);
    return (
      // <Animated.View style={{ opacity: this.state.opacityValue }} >
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}
      >
        <TouchableHighlight onPress={() => this.renderBody()}>
          <View style={{ height: 100, width: 100, position: 'absolute', alignItems: 'center', justifyContent: 'center', transform: [{ rotateZ: this.state.angleOffset }], }}>
            <Animated.View
              {...this.state.panResponder.panHandlers}
              style={[this.state.position.getLayout()]}
            >
              <FlowerPetal pillSpec={[{ translateX: this.props.flowerRadius }, { translateY: 0 }]} pillButtonImage={this.props.pillImage} />
            </Animated.View>
            {this.pillArray}
          </View>
        </TouchableHighlight>
      </View>
      // </Animated.View>
    );
  };
}

export { FlowerRowBuilder };
