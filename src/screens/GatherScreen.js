import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import NavBarButton from '../components/NavBarButton';
import { PlayFlower } from '../components';
import pic2 from '../images/pill-flowers/02.png'


const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
};

class GatherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 2000,
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ visible: true });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <StatusBar hidden />
        <Image
          style={{ height, width }} source={require('../images/gatherPlaceholder.png')}
        />
      </View>
    );
  }
}

export default GatherScreen;
