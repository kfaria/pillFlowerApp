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
import { View, Dimensions } from 'react-native';
import { FlowerRowBuilder } from '../components';
import pillButton1 from '../components/button.png';

let tempArray = [];

class FlowerBase extends Component {
  constructor(props) {
    super(props);
    this.renderBody();
  }

  renderBody() {
    for (let i = 0; i < this.props.rows; i++) {
      const activateX = (this.props.rowRadius[i] * (Math.cos(parseFloat(this.props.rowAngleOffset[i])))); //+ (Dimensions.get('window').width / 2);
      const activateY = (this.props.rowRadius[i] * (Math.sin(parseFloat(this.props.rowAngleOffset[i])))); //+ (Dimensions.get('window').height / 2);
      console.log(activateX + " " + activateY);
      const tempString = this.props.rowNames[i];
      tempArray.push(
        <View key={tempString} style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
        <FlowerRowBuilder
          activationCoordinates={[activateX, activateY]}
          angleOffset={this.props.rowAngleOffset[i]}
          rowID={tempString}
          pillImage={this.props.pillRowImage[i]}
          numOfPetals={this.props.rowNumOfPetals[i]}
          flowerRadius={this.props.rowRadius[i]}
          spacing={this.props.rowNames[i]}
          height={50}
          width={50}
        />
        </View>
      );
      console.log(tempArray[i].key);
    }
  }
  render() {
    return (
      <View style={{ borderColor: 'blue', borderWidth: 2, width: 800, height: 800, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
        {tempArray}
      </View>
    );
  }
}

export {FlowerBase} ;
