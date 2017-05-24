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
import { View } from 'react-native';
import { FlowerRowBuilder } from '../components';
import pillButton1 from '../components/button.png';

const tempArray = [];

class FlowerBase extends Component {
  constructor(props) {
    super(props);
    this.renderBody();
  }

  renderBody() {
    for (let i = 0; i < this.props.rows; i++) {
      const tempString = this.props.rowNames[i];
      tempArray.push(
        <View key={tempString} style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
        <FlowerRowBuilder
          rowID={tempString}
          pillImage={this.props.pillRowImage[i]}
          numOfPetals={this.props.rowNumOfPetals[i]}
          flowerRadius={this.props.rowRadius[i]}
          height={this.props.height}
          width={this.props.width}
        />
        </View>
      );
      console.log(tempArray[i].key);
    }
  }
  render() {
    return (
      <View style={{ width: 800, height: 800, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
        {tempArray}
      </View>
    );
  }
}

export {FlowerBase} ;
