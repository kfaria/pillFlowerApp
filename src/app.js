import React from 'react';
import { TabNavigator } from 'react-navigation';
import GrowScreen from './screens/GrowScreen';
import GatherScreen from './screens/GatherScreen';
import DreamScreen from './screens/DreamScreen';
import PlayScreen from './screens/PlayScreen';
import GiftScreen from './screens/GiftScreen';
import TabBar from './components/TabBar';

const App = TabNavigator({
  Grow: {
    screen: GrowScreen,
  },
  Gather: {
    screen: GatherScreen,
  },
  Play: {
    screen: PlayScreen,
  },
  Dream: {
    screen: DreamScreen,
  },
  Gift: {
    screen: GiftScreen,
  },
}, {
  tabBarComponent: TabBar,
  tabBarOptions: {
    showIcon: false,
    labelStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Platelet',
      margin: 0,
    },
  },
  animationEnabled: true,
});

// const styles={
//   titleStyle =
// }

export default App;
