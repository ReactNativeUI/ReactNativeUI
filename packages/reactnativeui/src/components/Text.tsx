import { StyleSheet, Text as RNText } from 'react-native';

import { COLOURS, TYPOGRAPHY, VARIABLES } from '../config';

export default function Text({ children }: { children: React.ReactNode }) {
  return <RNText style={styles.text}>{children}</RNText>;
}

export function H1({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h1]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: TYPOGRAPHY.H1_FONT_SIZE,
  },

  text: {
    marginBottom: VARIABLES.MARGIN_BASE,

    color: COLOURS.BLACK,
  },
});
