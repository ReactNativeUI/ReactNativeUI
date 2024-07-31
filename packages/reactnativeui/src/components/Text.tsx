import { StyleSheet, Text as RNText, View as RNView } from 'react-native';

import { COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';

export function Text({
  bold,
  children,
  style,
}: {
  bold?: boolean;
  children: React.ReactNode;
  style?: any;
}) {
  const _styles = [styles.text, style];
  if (bold === true) {
    _styles.push(styles.textBold);
  }

  return <RNText style={_styles}>{children}</RNText>;
}

// Headings

export function H1({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h1, style]}>{children}</RNText>;
}

export function H2({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h2, style]}>{children}</RNText>;
}

export function H3({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h3, style]}>{children}</RNText>;
}

export function H4({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h4, style]}>{children}</RNText>;
}

export function H5({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h5, style]}>{children}</RNText>;
}

export function H6({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNText style={[styles.h6, style]}>{children}</RNText>;
}

// Blockquotes

export function Blockquote({
  author,
  children,
}: {
  author?: string;
  children: string;
}) {
  return (
    <RNView style={styles.blockquote}>
      <RNText style={styles.blockquoteText}>{children}</RNText>
      {author && <RNText style={styles.blockquoteAuthor}>— {author}</RNText>}
    </RNView>
  );
}

const styles = StyleSheet.create({
  // Blockquotes

  blockquote: {
    marginBottom: MARGINS.MARGIN_BASE,
    paddingBottom: PADDINGS.PADDING_SMALL,
    paddingTop: PADDINGS.PADDING_SMALL,

    borderLeftColor: COLOURS.GREY_LIGHT,
    borderLeftWidth: 4,
    paddingLeft: PADDINGS.PADDING_MEDIUM,
  },

  blockquoteAuthor: {
    color: COLOURS.GREY,
  },

  blockquoteText: {
    fontSize: TYPOGRAPHY.BLOCKQUOTE_FONT_SIZE,
  },

  // Headings

  h1: {
    marginBottom: MARGINS.MARGIN_BASE * 0.5,

    fontSize: TYPOGRAPHY.H1_FONT_SIZE,
    fontWeight: 500,
    lineHeight: TYPOGRAPHY.H1_FONT_SIZE * 1.2,
  },

  h2: {
    marginBottom: MARGINS.MARGIN_BASE * 0.5,

    fontSize: TYPOGRAPHY.H2_FONT_SIZE,
    fontWeight: 500,
  },

  h3: {
    marginBottom: MARGINS.MARGIN_BASE * 0.5,

    fontSize: TYPOGRAPHY.H3_FONT_SIZE,
    fontWeight: 500,
  },

  h4: {
    marginBottom: MARGINS.MARGIN_BASE * 0.5,

    fontSize: TYPOGRAPHY.H4_FONT_SIZE,
    fontWeight: 500,
  },

  h5: {
    marginBottom: MARGINS.MARGIN_BASE * 0.5,

    fontSize: TYPOGRAPHY.H5_FONT_SIZE,
    fontWeight: 500,
  },

  h6: {
    marginBottom: MARGINS.MARGIN_BASE,

    fontSize: TYPOGRAPHY.H6_FONT_SIZE,
    fontWeight: 500,
  },

  // Text

  text: {
    marginBottom: MARGINS.MARGIN_BASE,

    color: COLOURS.BLACK,
  },

  textBold: {
    fontWeight: 700,
  },
});
