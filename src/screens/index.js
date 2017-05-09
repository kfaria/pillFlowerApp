import { Navigation } from 'react-native-navigation';

import GrowScreen from './GrowScreen';
import GatherScreen from './GatherScreen';
import PlayScreen from './PlayScreen';
import DreamScreen from './DreamScreen';
import GiftScreen from './GiftScreen';

export function registerScreens() {
  Navigation.registerComponent('pillFlower.GrowScreen', () => GrowScreen);
  Navigation.registerComponent('pillFlower.GatherScreen', () => GatherScreen);
  Navigation.registerComponent('pillFlower.PlayScreen', () => PlayScreen);
  Navigation.registerComponent('pillFlower.DreamScreen', () => DreamScreen);
  Navigation.registerComponent('pillFlower.GiftScreen', () => GiftScreen);
}
