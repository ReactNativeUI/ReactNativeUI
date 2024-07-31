import { Image as RNImage, StyleSheet } from 'react-native';
import type { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

import { MARGINS } from '../config';

export function Image({
  height,
  source,
  style,
}: {
  height: number;
  source: RNImageSourcePropType;
  style?: any;
}) {
  const _style = [styles.image, style];

  // Height
  _style.push({
    height,
  });

  return <RNImage source={source} style={_style} />;
}

const styles = StyleSheet.create({
  image: {
    marginBottom: MARGINS.MARGIN_BASE,
    width: 'auto',
  },
});
