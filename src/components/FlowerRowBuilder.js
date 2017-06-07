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
import { View, Animated, TouchableHighlight, PanResponder, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import FlowerPetal from './FlowerPetal';
import chime from '../music/chime.mp3';



// First song
const success = new Sound(chime, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('should be working');
});

class FlowerRowBuilder extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderGrant: (event, gesture) => {
        console.log(((Dimensions.get('window').width / 2) + Math.abs(this.props.activationCoordinates[0])) + " "  + ((Dimensions.get('window').height / 2) + this.props.activationCoordinates[1]));
        // console.log(this.props.activationCoordinates[1]);
        position.setOffset({ x: position.x._value, y: position.y._value });
        position.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (event, gesture) => {
        // console.log(gesture.moveX + " " + gesture.moveY);
        // console.log(position.y._offset);
        if (this.state.rowSet === false && this.state.inPosition === false) {
          position.setValue({ x: gesture.dx, y: gesture.dy });
          if (
            gesture.moveX >= (((Dimensions.get('window').width / 2) + Math.abs(this.props.activationCoordinates[0])) - 15)
            && gesture.moveX <= (((Dimensions.get('window').width / 2) + Math.abs(this.props.activationCoordinates[0])) + 15)
            && gesture.moveY <= (((Dimensions.get('window').height / 2) + this.props.activationCoordinates[1]) + 15)
            && gesture.moveY >= (((Dimensions.get('window').height / 2) + this.props.activationCoordinates[1]) - 15)
            ) {
            // position.setValue({ x: gesture.moveX - position.x, y: gesture.moveY - position.y });
            console.log((Dimensions.get('window').width / 2) + this.props.flowerRadius);
            position.setValue({ x: Math.abs(this.props.activationCoordinates[0]), y: -1 * (Dimensions.get('window').height / 4) });
            // position.setValue({ x: gesture.moveX - position.x, y: position.y });
            // position.setOffset({ x: 0, y: 0 });
            // position.setValue({ x: Dimensions.get('window').width / 8, y: -1 * Dimensions.get('window').height / 4 });
            // this.orderPills();
            this.setState({ inPosition: true });
            this.renderBody();
          }
        }
      },
      onPanResponderRelease: (event, gesture) => {
        position.flattenOffset();

        if (this.state.rowSet === false && this.state.inPosition === false){
          position.setValue({ x: 0, y: 0 });
        }
      },
    });
    this.pillArray = [];
    this.state = {
      panResponder,
      position,
      inPosition: false,
      activated: false,
      rowSet: false,
      angleOffset: '0deg',
      array: [],
      startingPosition: [
        { translateX: this.props.flowerRadius },
        { translateY: this.props.activationCoordinates[1] },
        { rotateZ: -1 * parseFloat(this.props.angleOffset) }
      ],
    };
  }

  componentDidMount() {
    this.scatterPills();
  }

  scatterPills() {
    let margin = 0;
    if (this.props.flowersSent % 2 === 0) {
      margin = (-150 * this.props.flowersSent / 2);
    } else {
      margin = ((-150 * this.props.flowersSent / 2));
    }
    this.setState({
      startingPosition: [
        { translateX: margin + 75 + (parseInt(this.props.spacingIndex) * 150) },
        // { translateX: (Dimensions.get('window').width / -2.75) + (parseInt(this.props.spacing) * 150) },
        // { translateX: (Dimensions.get('window').width / -2.75) + (parseInt(this.props.spacing) * 150) },
        // { translateX: (-150 * this.props.flowersSent / 2) },
        { translateY: ((Dimensions.get('window').height / 3.5)) },
        { rotateZ: -1 * parseFloat(this.props.angleOffset) },
      ],
    });
  }

  reset() {
    console.log("resetfromRow");
    while (this.pillArray.length >= 0) {
      this.pillArray.pop();
    }
    this.scatterPills();
    this.setState({
      inPosition: false,
      activated: false,
      rowSet: false,
    });
  }
  renderBody() {
    const angle = (2 * Math.PI) / this.props.numOfPetals;
    for (let i = 1; i <= this.props.numOfPetals; i++) {
      //determine offset requirement
      const xPos = (this.props.flowerRadius) * Math.cos((i) * angle);
      const yPos = (this.props.flowerRadius) * Math.sin((i) * angle);
      const pillAngle = 1 * angle * (180 / Math.PI) * i;
      console.log(xPos + ',' + yPos + ',' + pillAngle.toString() + 'deg');
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
            />
        );
        this.setState({ activated: true, rowSet: true, angleOffset: this.props.angleOffset });
        this.setState({
          startingPosition: [{ translateX: -1000 }, { translateY: -1000 }]          
        });
      }
    }
    // setTimeout(this.reset(), 5000);
  }

  render() {
    if (this.state.inPosition === true) {
      success.play();
      //sound effect
    }
    if (this.props.resetStatus === true) {
      this.reset();
    }
    return (
      // <Animated.View style={{ opacity: this.state.opacityValue }} >
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          transform: [{ rotateZ: this.state.angleOffset }],
        }}
      >
          <View style={{ height: 100, width: 100, transform: [{ rotateZ: this.state.angleOffset }] }}>
            <Animated.View
              {...this.state.panResponder.panHandlers}
              style={[this.state.position.getLayout(), { height: 100, width: 100, position: 'absolute', alignItems: 'center', justifyContent: 'center' }]}
            >
              <View>
                <FlowerPetal pillSpec={this.state.startingPosition} pillButtonImage={this.props.pillImage} />
              </View>
            </Animated.View>
            <View style={{ width: 100, height: 100, position: 'absolute', alignItems: 'center', justifyContent: 'center', transform: [{ rotateZ: this.props.angleOffset }] }}>
              {this.pillArray}
            </View>
          </View>
      </View>
      // </Animated.View>
    );
  }
}

export { FlowerRowBuilder };
