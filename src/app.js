import React, { Component } from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import GrowScreen from './screens/GrowScreen';
import GatherScreen from './screens/GatherScreen';
import DreamScreen from './screens/DreamScreen';
import PlayScreen from './screens/PlayScreen';
import GrowGameScreen1 from './screens/GrowGameScreen1';
import GrowGameScreen2 from './screens/GrowGameScreen2';
import GrowGameScreen3 from './screens/GrowGameScreen3';
import GiftScreen from './screens/GiftScreen';
import HomeScreen from './screens/HomeScreen';
import CreditScreen from './screens/CreditScreen';
import GiftScreenEdit from './screens/GiftScreenEdit';
import TabBar from './components/TabBar';

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

// console.disableYellowBox = true;

const TabNav = TabNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  grow: {
    screen: GrowScreen,
    navigationOptions: {
      tabBarVisible: true,
    },
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
    screen: GiftScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  tabBarComponent: TabBar,
  initialRouteName: 'home',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: '#74d6af',
    },
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
  swipeEnabled: false,
});

const AppNavigator = StackNavigator({
  MainScreen: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
  EditGiftScreen: {
    screen: GiftScreenEdit,
    navigationOptions: {
      header: null,
    },
  },
  credit: {
    screen: CreditScreen,
    navigationOptions: {
      header: null,
    },
  },
  growGame1: {
    screen: GrowGameScreen1,
    navigationOptions: {
      header: null,
    },
  },
  growGame2: {
    screen: GrowGameScreen2,
    navigationOptions: {
      header: null,
    },
  },
  growGame3: {
    screen: GrowGameScreen3,
    navigationOptions: {
      header: null,
    },
  },
},
  {
    mode: 'modal',
  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      herp: null,
    }
  }
  render() {
    console.disableYellowBox = true;
    return (
      <AppNavigator
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);
          this.setState({ herp: currentState, currentScreen });
          console.log(currentScreen);
          console.log(prevScreen);
        }
        }
        screenProps={{ test: this.state.herp, currentScreen: this.state.currentScreen }}
      />
    );
  }
}
// const styles={
//   titleStyle =
// }

export default App;
