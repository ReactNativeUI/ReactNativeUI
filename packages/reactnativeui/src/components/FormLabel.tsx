import { StyleSheet, Text as RNText } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { COLOURS, MARGINS, TYPOGRAPHY } from '../config';

export function FormLabel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  text: {
    marginBottom: MARGINS.MARGIN_SMALL,

    color: COLOURS.BLACK,
    fontSize: TYPOGRAPHY.LABEL_FONT_SIZE,
  },
});
