/*  This component takes in the following props:
    height={}
    width={}
    outlineImage={}
    rows={}
    rowRadius={[]}
    rowNumOfPetals={[]}
    pillRowImage={[]}

    The below is whats required to render eachrow.
    <FlowerRowBuilder position='absolute' numOfPetals={8} flowerRadius={300} width={600} height={600} />

*/
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { FlowerRowBuilder } from '../components';
import pillButton1 from '../components/button.png';

const tempArray = [];

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

class FlowerBase extends Component {
  constructor(props) {
    super(props);
    this.renderBody();
  }

  renderBody() {
    for (let i = 0; i < this.props.rows; i++) {
      tempArray.push(
        <FlowerRowBuilder
          key={i}
          pillImage={this.props.pillRowImage[i]}
          numOfPetals={this.props.rowNumOfPetals[i]}
          flowerRadius={this.props.rowRadius[i]}
          height={this.props.height}
          width={this.props.width}
        />
      );
    }
  }
  render() {
    return (
      <View>
        {tempArray}
        {/*<FlowerRowBuilder
          pillImage={this.props.pillRowImage[0]}
          numOfPetals={this.props.rowNumOfPetals[0]}
          flowerRadius={this.props.rowRadius[0]}
          height={this.props.height}
          width={this.props.width}
        >
          <FlowerRowBuilder
          pillImage={this.props.pillRowImage[1]}
          numOfPetals={this.props.rowNumOfPetals[1]}
          flowerRadius={this.props.rowRadius[1]}
          height={this.props.height}
          width={this.props.width}
        />
        </FlowerRowBuilder>*/}
      </View>
    );
  }
}

export {FlowerBase} ;
