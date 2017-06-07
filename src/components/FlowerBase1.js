
/*  This component takes in the following props:
    height={}
    width={}
    outlineImage={}
    rows={}
    rowRadius={[]}
    rowNumOfPetals={[]}
    rowNames={[]}
    pillRowImage={[]}

    The below is whats required to render eachrow.
    <FlowerRowBuilder position='absolute' numOfPetals={8} flowerRadius={300} width={600} height={600} />

*/
import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { FlowerRowBuilder } from '../components';
import resetButton from '../images/swirlButtonWhite.png';

const tempArray = [];

export default class FlowerBase1 extends Component {
  constructor(props) {
    super(props);
    this.renderBody();
    this.state = {
      resetState: false,
    };
  }

  resetFlower() {
      // console.log(tempArray.length);
      // this.setState({ reset: true });
      // tempArray.forEach(() => {
      //   tempArray.pop();
      //   console.log('emptying');
      // });
      while (tempArray.length > 0) {
        console.log(tempArray.length);
        tempArray.pop();
      }
      this.setState({ resetState: true });
      console.log('fin');
  }
  renderBody() {
    console.log('executed');
    for (let i = 0; i < this.props.rows; i++) {
      const activateX = (this.props.rowRadius[i] * (Math.cos(parseFloat(this.props.rowAngleOffset[i])))); //+ (Dimensions.get('window').width / 2);
      const activateY = (this.props.rowRadius[i] * (Math.sin(parseFloat(this.props.rowAngleOffset[i])))); //+ (Dimensions.get('window').height / 2);
      // console.log(activateX + " " + activateY);
      const tempString = this.props.rowNames[i];
      tempArray.push(
        <View key={tempString} style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
        <FlowerRowBuilder
          flowersSent={this.props.rows}
          activationCoordinates={[activateX, activateY]}
          angleOffset={this.props.rowAngleOffset[i]}
          rowID={tempString}
          pillImage={this.props.pillRowImage[i]}
          numOfPetals={this.props.rowNumOfPetals[i]}
          flowerRadius={this.props.rowRadius[i]}
          spacingIndex={this.props.rowNames[i]}
          height={50}
          width={50}
          resetStatus={this.props.resetStatus}
        />
        </View>
      );
      // console.log(tempArray[i].key);
    }
  }
  render() {
    return (
      <View
        style=
          {{
            //borderColor: 'blue', borderWidth: 2, width: 800, height: 800,
            justifyContent: 'center', alignItems: 'center', position: 'absolute',
            //transform: [{rotateZ: this.props.angleOffset }]
          }}
      >
      {/* <TouchableWithoutFeedback onPress={() => this.resetFlower()}>
        <View style={{ marginTop: -500 }}>
          <Image source={resetButton} alt="" />
        </View>
      </TouchableWithoutFeedback> */}
        {tempArray}
      </View>
    );
  }
}

export { FlowerBase1 };
