import { StyleSheet, Text as RNText, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewProps as RNViewProps,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { BORDERS, COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';
import type { Variant } from '../types';

export function Badge({
  badgeStyle,
  pill,
  text,
  textStyle,
  uppercase,
  variant = 'default',
}: RNViewProps & {
  badgeStyle?: RNStyleProp<RNViewStyle>;
  pill?: boolean;
  text: string;
  textStyle?: RNStyleProp<RNTextStyle>;
  uppercase?: boolean;
  variant?: Variant;
}) {
  // Badge styles
  const _badgeStyles = [styles.badge, badgeStyle];

  // Text styles
  const _textStyles = [styles.text, textStyle];

  // Variants
  switch (variant) {
    case 'default':
      _badgeStyles.push(styles.badgeDefault);
      _textStyles.push(styles.badgeTextDefault);
      break;

    case 'primary':
      _badgeStyles.push(styles.badgePrimary);
      _textStyles.push(styles.badgeTextPrimary);
      break;

    case 'secondary':
      _badgeStyles.push(styles.badgeSecondary);
      _textStyles.push(styles.badgeTextSecondary);
      break;

    case 'success':
      _badgeStyles.push(styles.badgeSuccess);
      _textStyles.push(styles.badgeTextSuccess);
      break;

    case 'danger':
      _badgeStyles.push(styles.badgeDanger);
      _textStyles.push(styles.badgeTextDanger);
      break;

    case 'warning':
      _badgeStyles.push(styles.badgeWarning);
      _textStyles.push(styles.badgeTextWarning);
      break;

    case 'info':
      _badgeStyles.push(styles.badgeInfo);
      _textStyles.push(styles.badgeTextInfo);
      break;

    case 'light':
      _badgeStyles.push(styles.badgeLight);
      _textStyles.push(styles.badgeTextLight);
      break;

    case 'dark':
      _badgeStyles.push(styles.badgeDark);
      _textStyles.push(styles.badgeTextDark);
      break;
  }

  // Pill
  if (pill) {
    _badgeStyles.push(styles.badgePill);
  }

  // Uppercase
  if (uppercase) {
    _textStyles.push(styles.textUppercase);
  }

  return (
    <RNView style={_badgeStyles}>
      <RNText style={_textStyles}>{text}</RNText>
    </RNView>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    marginBottom: MARGINS.MARGIN_BASE,
    marginRight: MARGINS.MARGIN_SMALL,
    padding: PADDINGS.PADDING_SMALL,

    borderRadius: BORDERS.BORDER_RADIUS_BASE,
  },

  badgePill: {
    borderRadius: BORDERS.BORDER_RADIUS_LARGE,
  },

  text: {
    fontSize: TYPOGRAPHY.BADGE_FONT_SIZE,
    fontWeight: 600,
  },

  textUppercase: {
    textTransform: 'uppercase',
  },

  // Variants

  badgeDefault: {
    backgroundColor: COLOURS.BADGE_DEFAULT_BACKGROUND,
  },

  badgeTextDefault: {
    color: COLOURS.BADGE_TEXT_DEFAULT,
  },

  badgePrimary: {
    backgroundColor: COLOURS.BADGE_PRIMARY_BACKGROUND,
  },

  badgeTextPrimary: {
    color: COLOURS.BADGE_TEXT_PRIMARY,
  },

  badgeSecondary: {
    backgroundColor: COLOURS.BADGE_SECONDARY_BACKGROUND,
  },

  badgeTextSecondary: {
    color: COLOURS.BADGE_TEXT_SECONDARY,
  },

  badgeSuccess: {
    backgroundColor: COLOURS.BADGE_SUCCESS_BACKGROUND,
  },

  badgeTextSuccess: {
    color: COLOURS.BADGE_TEXT_SUCCESS,
  },

  badgeDanger: {
    backgroundColor: COLOURS.BADGE_DANGER_BACKGROUND,
  },

  badgeTextDanger: {
    color: COLOURS.BADGE_TEXT_DANGER,
  },

  badgeWarning: {
    backgroundColor: COLOURS.BADGE_WARNING_BACKGROUND,
  },

  badgeTextWarning: {
    color: COLOURS.BADGE_TEXT_WARNING,
  },

  badgeInfo: {
    backgroundColor: COLOURS.BADGE_INFO_BACKGROUND,
  },

  badgeTextInfo: {
    color: COLOURS.BADGE_TEXT_INFO,
  },

  badgeLight: {
    backgroundColor: COLOURS.BADGE_LIGHT_BACKGROUND,
  },

  badgeTextLight: {
    color: COLOURS.BADGE_TEXT_LIGHT,
  },

  badgeDark: {
    backgroundColor: COLOURS.BADGE_DARK_BACKGROUND,
  },

  badgeTextDark: {
    color: COLOURS.BADGE_TEXT_DARK,
  },
});
