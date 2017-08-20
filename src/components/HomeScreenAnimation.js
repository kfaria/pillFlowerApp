import React from 'react';
import { View, Dimensions } from 'react-native';
import { AnimPillFlower } from './AnimPillFlower';
import bgPill1 from '../images/pill-flowers/01.png';
import bgPill2 from '../images/pill-flowers/02.png';
import bgPill3 from '../images/pill-flowers/53.png';
import bgPill4 from '../images/pill-flowers/51.png';
import bgPill5 from '../images/pill-flowers/52.png';
import bgPill6 from '../images/pill-flowers/06.png';
import bgPill7 from '../images/pill-flowers/30.png';

const { height, width } = Dimensions.get('window');

const styles = {
  containerStyle: {
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: 'black',
  },
};

const frequency = 26000;

function HomeScreenAnimation() {
  return (
    <View style={[styles.containerStyle, { borderWidth: 40 }]}>
      <AnimPillFlower
        image={bgPill1} // The image file
        fadeDuration={6000} // Time (ms) that the PF fades for
        delay={1000} // Time (ms) before appearing on screen
        fadeDelay={2000} // Time (ms) that the PF stays on screen before starting fade
        topSpacing={height / 3.5} // Spacing from the top.
        leftSpacing={-(width / 5)} // Spacing from the left side.
        size={width / 2} // Size of the PF.
        frequency={frequency} // Time (ms) for the overal length of the loop (above)
      />
      <AnimPillFlower
        image={bgPill2}
        fadeDuration={5000}
        delay={8000}
        fadeDelay={3000}
        topSpacing={height / 9}
        leftSpacing={width / 2}
        size={width / 3.5}
        frequency={frequency}
      />
      <AnimPillFlower
        image={bgPill3}
        fadeDuration={4000}
        delay={12750}
        fadeDelay={3000}
        topSpacing={height / 1.3}
        leftSpacing={width / 4}
        size={width / 5}
        frequency={frequency}
      />
      <AnimPillFlower
        image={bgPill4}
        fadeDuration={4000}
        delay={13000}
        fadeDelay={2000}
        topSpacing={height / 2.7}
        leftSpacing={width / 1.5}
        size={width / 3}
        frequency={frequency}
      />
      <AnimPillFlower
        image={bgPill5}
        fadeDuration={4000}
        delay={14000}
        fadeDelay={3000}
        topSpacing={-height / 50}
        leftSpacing={width / 4}
        size={width / 6}
        frequency={frequency}
      />
      <AnimPillFlower
        image={bgPill6}
        fadeDuration={4000}
        delay={16500}
        fadeDelay={2500}
        topSpacing={height / 1.5}
        leftSpacing={width / 1.9}
        size={width / 1.5}
        frequency={frequency}
      />
      <AnimPillFlower
        image={bgPill7}
        fadeDuration={4000}
        delay={20000}
        fadeDelay={2000}
        topSpacing={height / 4}
        leftSpacing={width / 1.2}
        size={width / 10}
        frequency={frequency}
      />
    </View>
  );
}

export { HomeScreenAnimation };
