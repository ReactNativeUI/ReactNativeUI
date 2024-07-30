import { StyleSheet, Text as RNText } from 'react-native';

import { COLOURS, MARGINS, TYPOGRAPHY } from '../config';

export function Text({ children }: { children: React.ReactNode }) {
  return <RNText style={styles.text}>{children}</RNText>;
}

export function H1({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h1]}>{children}</RNText>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h2]}>{children}</RNText>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h3]}>{children}</RNText>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h4]}>{children}</RNText>;
}

export function H5({ children }: { children: React.ReactNode }) {
  return <RNText style={[styles.text, styles.h5]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: TYPOGRAPHY.H1_FONT_SIZE,
  },

  h2: {
    fontSize: TYPOGRAPHY.H2_FONT_SIZE,
  },

  h3: {
    fontSize: TYPOGRAPHY.H3_FONT_SIZE,
  },

  h4: {
    fontSize: TYPOGRAPHY.H4_FONT_SIZE,
  },

  h5: {
    fontSize: TYPOGRAPHY.H5_FONT_SIZE,
  },

  text: {
    marginBottom: MARGINS.MARGIN_BASE,

    color: COLOURS.BLACK,
  },
});
