import {
  Pressable as RNPressable,
  StyleSheet,
  Text as RNText,
} from 'react-native';
import type {
  PressableProps as RNPressableProps,
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { BORDERS, COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';
import type { Variant } from '../types';

export function PressableTextButton({
  pressableStyle,
  textStyle,
  title,
  variant = 'default',
  ...props
}: RNPressableProps & {
  pressableStyle?: RNStyleProp<RNViewStyle>;
  textStyle?: RNStyleProp<RNTextStyle>;
  title: string;
  variant?: Variant;
}) {
  // Pressable
  const _pressableStyles = [styles.pressable, pressableStyle];

  // Text
  const _textStyles = [styles.text, textStyle];

  // Variants
  switch (variant) {
    case 'default':
      _textStyles.push(styles.pressableTextDefault);
      break;

    case 'primary':
      _pressableStyles.push(styles.pressablePrimary);
      break;

    case 'secondary':
      _pressableStyles.push(styles.pressableSecondary);
      break;

    case 'success':
      _pressableStyles.push(styles.pressableSuccess);
      break;

    case 'danger':
      _pressableStyles.push(styles.pressableDanger);
      break;

    case 'warning':
      _pressableStyles.push(styles.pressableWarning);
      _textStyles.push(styles.pressableTextWarning);
      break;

    case 'info':
      _pressableStyles.push(styles.pressableInfo);
      _textStyles.push(styles.pressableTextInfo);
      break;

    case 'light':
      _pressableStyles.push(styles.pressableLight);
      _textStyles.push(styles.pressableTextLight);
      break;

    case 'dark':
      _pressableStyles.push(styles.pressableDark);
      _textStyles.push(styles.pressableTextDark);
      break;
  }

  return (
    <RNPressable style={_pressableStyles} {...props}>
      <RNText style={_textStyles}>{title}</RNText>
    </RNPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginBottom: MARGINS.MARGIN_BASE,
    padding: PADDINGS.PADDING_BASE,

    borderRadius: BORDERS.BORDER_RADIUS_BASE,
  },

  text: {
    color: COLOURS.WHITE,
    fontSize: TYPOGRAPHY.BUTTON_FONT_SIZE,
    textAlign: 'center',
  },

  // Variants

  pressableTextDefault: {
    color: COLOURS.BLACK,
  },

  pressablePrimary: {
    backgroundColor: COLOURS.PRIMARY,
  },

  pressableSecondary: {
    backgroundColor: COLOURS.SECONDARY,
  },

  pressableSuccess: {
    backgroundColor: COLOURS.SUCCESS,
  },

  pressableDanger: {
    backgroundColor: COLOURS.DANGER,
  },

  pressableWarning: {
    backgroundColor: COLOURS.WARNING,
  },

  pressableTextWarning: {
    color: COLOURS.BLACK,
  },

  pressableInfo: {
    backgroundColor: COLOURS.INFO,
  },

  pressableTextInfo: {
    color: COLOURS.BLACK,
  },

  pressableLight: {
    backgroundColor: COLOURS.LIGHT,
  },

  pressableTextLight: {
    color: COLOURS.BLACK,
  },

  pressableDark: {
    backgroundColor: COLOURS.DARK,
  },

  pressableTextDark: {
    color: COLOURS.WHITE,
  },
});
