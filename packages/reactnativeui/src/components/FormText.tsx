import { StyleSheet, Text as RNText } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { COLOURS, MARGINS, TYPOGRAPHY } from '../config';

export function FormText({
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
    marginBottom: MARGINS.MARGIN_BASE,
    marginTop: -MARGINS.MARGIN_BASE + MARGINS.MARGIN_SMALL,

    color: COLOURS.GRAY_700,
    fontSize: TYPOGRAPHY.FORM_TEXT_FONT_SIZE,
  },
});
