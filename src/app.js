import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import GrowScreen from './screens/GrowScreen';
import GatherScreen from './screens/GatherScreen';
import DreamScreen from './screens/DreamScreen';
import PlayScreen from './screens/PlayScreen';
import GiftScreen from './screens/GiftScreen';
import GiftScreenEdit from './screens/GiftScreenEdit';
import TabBar from './components/TabBar';

const GiftScreenNavigator = StackNavigator({
  MainGiftScreen: { screen: GiftScreen },
  EditGiftScreen: { screen: GiftScreenEdit },
});

const App = TabNavigator({
  grow: {
    screen: GrowScreen,
  },
  gather: {
    screen: GatherScreen,
  },
  play: {
    screen: PlayScreen,
  },
  dream: {
    screen: DreamScreen,
  },
  gift: {
    screen: GiftScreenNavigator,
  },
}, {
  tabBarComponent: TabBar,
  initialRouteName: 'play',
  lazy: true,
  tabBarOptions: {
    showIcon: false,
    labelStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Platelet',
      margin: 0,
    },
    upperCaseLabel: false,
  },
  animationEnabled: true,
});


// const styles={
//   titleStyle =
// }

export default App;
