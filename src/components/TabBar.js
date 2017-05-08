import React, { Component } from 'react';
import { Animated } from 'react-native';
import { TabBarTop } from 'react-navigation';

const TAB_BAR_OFFSET = -70;

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(props) {
    const oldState = this.props.navigation.state;
    const oldRoute = oldState.routes[oldState.index];
    const oldParams = oldRoute.params;
    const wasVisible = !oldParams || oldParams.visible;

    const newState = props.navigation.state;
    const newRoute = newState.routes[newState.index];
    const newParams = newRoute.params;
    const isVisible = !newParams || newParams.visible;

    if (wasVisible && !isVisible) {
      Animated.timing(this.state.offset, { toValue: TAB_BAR_OFFSET, duration: 200 }).start();
    } else if (isVisible && !wasVisible) {
      Animated.timing(this.state.offset, { toValue: 0, duration: 300 }).start();
    }
  }

  render() {
    return (
      <TabBarTop {...this.props} style={[styles.container, { top: this.state.offset }]} />
    );
  }
}

const styles = {
  container: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#777',
    elevation: 8,
  },
};
