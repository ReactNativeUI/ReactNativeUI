import { Image as RNImage, StyleSheet, View as RNView } from 'react-native';
import type {
  ImageSourcePropType as RNImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { BORDERS, COLOURS, MARGINS, PADDINGS } from '../config';

export function Card({
  bodyStyle,
  children,
  containerStyle,
  imageSource,
  imageStyle,
}: {
  bodyStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  imageSource?: RNImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}) {
  const _imageStyles = [styles.image, imageStyle];
  const isImageVisible: boolean = imageSource !== undefined;

  return (
    <RNView style={[styles.container, containerStyle]}>
      {isImageVisible && <RNImage source={imageSource} style={_imageStyles} />}
      <RNView style={[styles.body, bodyStyle]}>{children}</RNView>
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGINS.MARGIN_BASE,

    borderColor: COLOURS.CARD_BORDER_COLOR,
    borderRadius: BORDERS.BORDER_RADIUS_BASE,
    borderWidth: 1,
  },

  body: {
    padding: PADDINGS.PADDING_BASE,
    paddingBottom: 0,
  },

  image: {
    height: 200,
    width: '100%',
  },
});
