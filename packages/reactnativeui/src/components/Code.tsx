import { StyleSheet, Text as RNText, View as RNView } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { COLOURS, MARGINS, PADDINGS } from '../config';

export function Code({
  children,
  containerStyle,
  textStyle,
}: {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) {
  return (
    <RNView style={[styles.code, containerStyle]}>
      <RNText style={[styles.text, textStyle]}>{children}</RNText>
    </RNView>
  );
}

const styles = StyleSheet.create({
  code: {
    marginBottom: MARGINS.MARGIN_BASE,
    padding: PADDINGS.PADDING_MEDIUM,

    backgroundColor: COLOURS.GRAY_200,
    borderColor: COLOURS.GRAY_400,
    borderRadius: 10,
    borderWidth: 1,
  },

  text: {
    color: COLOURS.BLACK,
    fontFamily: 'Courier',
  },
});
