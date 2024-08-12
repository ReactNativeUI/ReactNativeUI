/**
 * @todo This component works well for a single line. Need to support multiple lines without requiring the user to insert newline characters (\n).
 */

import { StyleSheet, Text as RNText, View as RNView } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { BORDERS, COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';

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
    borderRadius: BORDERS.BORDER_RADIUS_BASE,
    borderWidth: 1,
  },

  text: {
    color: COLOURS.BLACK,
    fontFamily: 'Courier',
    fontSize: TYPOGRAPHY.CODE_FONT_SIZE,
    lineHeight: TYPOGRAPHY.CODE_LINE_HEIGHT,
  },
});
