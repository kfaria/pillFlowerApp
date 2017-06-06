import React, { Component } from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import GrowScreen from './screens/GrowScreen';
import GatherScreen from './screens/GatherScreen';
import DreamScreen from './screens/DreamScreen';
import PlayScreen from './screens/PlayScreen';
import GrowGameScreen from './screens/GrowGameScreen';
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

const TabNav = TabNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarVisible: false,
      header: null,
      tabBarLabel: ({ tintColor }) => (
        <Image
          source={require('./images/flowerButtonWhite.png')}
          style={{ tintColor, width: 20, height: 20 }}
        />
    ),
    },
  },
  grow: {
    screen: GrowScreen,
    navigationOptions: {
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
      headerBackTitle: 'Back',
    },
  },
}, {
  tabBarComponent: TabBar,
  initialRouteName: 'play',
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
      title: 'Share',
      tabBarVisible: false,
    },
  },
  credit: {
    screen: CreditScreen,
    navigationOptions: {
      header: null,
    },
  },
  growGame: {
    screen: GrowGameScreen,
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
    return (
      <AppNavigator
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);
          this.setState({ herp: currentState });
          console.log(currentScreen);
          console.log(prevScreen);
        }
        }
        screenProps={{ test: this.state.herp }}
      />
    );
  }
}
// const styles={
//   titleStyle =
// }

export default App;
