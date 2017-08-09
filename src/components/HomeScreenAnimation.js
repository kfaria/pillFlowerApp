import React from 'react';
import { View, Dimensions } from 'react-native';
import { AnimPillFlower } from './AnimPillFlower';
import bgPill1 from '../images/pill-flowers/01.png';
import bgPill2 from '../images/pill-flowers/02.png';
import bgPill3 from '../images/pill-flowers/03.png';
import bgPill4 from '../images/pill-flowers/04.png';
import bgPill5 from '../images/pill-flowers/05.png';
import bgPill6 from '../images/pill-flowers/06.png';
import bgPill7 from '../images/pill-flowers/07.png';

const { height, width } = Dimensions.get('window');

const styles = {
  containerStyle: {
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
  }
};

function HomeScreenAnimation() {
  return (
    <View style={styles.containerStyle}>
      <AnimPillFlower
        image={bgPill1}
        fadeDuration={5000}
        delay={0}
        fadeDelay={2000}
        topSpacing={0}
        leftSpacing={0}
        size={width / 2}
        frequency={10000}
      />
      <AnimPillFlower
        image={bgPill2}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
      <AnimPillFlower
        image={bgPill3}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
      <AnimPillFlower
        image={bgPill4}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
      <AnimPillFlower
        image={bgPill5}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
      <AnimPillFlower
        image={bgPill6}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
      <AnimPillFlower
        image={bgPill7}
        fadeDuration={1000}
        delay={3000}
        fadeDelay={400}
        topSpacing={200}
        leftSpacing={200}
        size={400}
        frequency={5000}
      />
    </View>
  );
}

export { HomeScreenAnimation };
