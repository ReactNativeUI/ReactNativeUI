import { StyleSheet, Text as RNText } from 'react-native';

import { COLOURS, MARGINS, TYPOGRAPHY } from '../config';
import type { Variant } from '../types';

// Headings

export function H1({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h1" {...props}>
      {children}
    </Text>
  );
}
export function H2({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h2" {...props}>
      {children}
    </Text>
  );
}
export function H3({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h3" {...props}>
      {children}
    </Text>
  );
}
export function H4({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h4" {...props}>
      {children}
    </Text>
  );
}
export function H5({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h5" {...props}>
      {children}
    </Text>
  );
}
export function H6({
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Text heading="h6" {...props}>
      {children}
    </Text>
  );
}

export function Text({
  bold,
  children,
  heading,
  style,
  variant,
}: {
  bold?: boolean;
  children: React.ReactNode;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: any;
  variant?: Variant;
}) {
  const _styles = [styles.text, style];

  // Headings
  if (heading) {
    _styles.push(styles[heading]);
  }

  // Bold
  if (bold === true) {
    _styles.push(styles.textBold);
  }

  // Variant
  if (variant) {
    _styles.push(styles[variant]);
  }

  return <RNText style={_styles}>{children}</RNText>;
}

const styles = StyleSheet.create({
  text: {
    marginBottom: MARGINS.MARGIN_BASE,

    color: COLOURS.BLACK,
    fontSize: TYPOGRAPHY.TEXT_FONT_SIZE_BASE,
  },

  textBold: {
    fontWeight: 700,
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

  // Variants

  default: {
    color: COLOURS.DEFAULT_TEXT_EMPHASIS,
  },

  primary: {
    color: COLOURS.PRIMARY_TEXT_EMPHASIS,
  },

  secondary: {
    color: COLOURS.SECONDARY_TEXT_EMPHASIS,
  },

  success: {
    color: COLOURS.SUCCESS_TEXT_EMPHASIS,
  },

  danger: {
    color: COLOURS.DANGER_TEXT_EMPHASIS,
  },

  warning: {
    color: COLOURS.WARNING_TEXT_EMPHASIS,
  },

  info: {
    color: COLOURS.INFO_TEXT_EMPHASIS,
  },

  light: {
    color: COLOURS.LIGHT_TEXT_EMPHASIS,
  },

  dark: {
    color: COLOURS.DARK_TEXT_EMPHASIS,
  },
});
