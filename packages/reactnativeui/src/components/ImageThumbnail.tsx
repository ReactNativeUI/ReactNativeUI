import { Image as RNImage, StyleSheet, View as RNView } from 'react-native';
import type { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

import { COLOURS, MARGINS } from '../config';

export function ImageThumbnail({
  containerStyle,
  height,
  imageStyle,
  source,
  width,
}: {
  containerStyle?: any;
  height: number;
  imageStyle?: any;
  source: RNImageSourcePropType;
  width: number;
}) {
  const _containerStyle: any = [styles.container, containerStyle];
  const _imageStyle: any = [imageStyle];

  // Container Height & Width
  _containerStyle.push({
    height: height + 10,
    width: width + 10,
  });

  // Image Height & Width
  _imageStyle.push({
    height,
    width,
  });

  return (
    <RNView style={_containerStyle}>
      <RNImage source={source} style={_imageStyle} />
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGINS.MARGIN_BASE,
    marginRight: MARGINS.MARGIN_BASE,
    padding: 4,

    borderColor: COLOURS.GRAY_200,
    borderRadius: 2,
    borderWidth: 1,
  },
});
