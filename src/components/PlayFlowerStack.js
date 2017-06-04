import React from 'react';
import { View } from 'react-native';
import { PlayFlower } from '../components';

const PlayFlowerStack = (props) => {
  return (
    <View style={{ position: 'absolute', bottom: props.bottom, left: props.left }}>
      <PlayFlower
        imageSource={props.imageSource}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />
      <PlayFlower
        imageSource={props.imageSource}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />
      <PlayFlower
        imageSource={props.imageSource}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />
      <PlayFlower
        imageSource={props.imageSource}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />
      <PlayFlower
        imageSource={props.imageSource}
        width={200}
        height={200}
        maxSize={450}
        minSize={50}
      />
    </View>
  );
}

export { PlayFlowerStack };
