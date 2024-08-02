import { StyleSheet, Text as RNText, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextStyle as RNTextStyle,
  ViewProps as RNViewProps,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { BORDERS, COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';
import type { Variant } from '../types';

export function Alert({
  alertStyle,
  text,
  textStyle,
  variant = 'default',
}: RNViewProps & {
  alertStyle?: RNStyleProp<RNViewStyle>;
  text: string;
  textStyle?: RNStyleProp<RNTextStyle>;
  variant?: Variant;
}) {
  // Alert
  const _alertStyles = [styles.alert, alertStyle];

  // Text
  const _textStyles = [styles.text, textStyle];

  // Variants
  switch (variant) {
    case 'default':
      _alertStyles.push(styles.alertDefault);
      _textStyles.push(styles.alertTextDefault);
      break;

    case 'primary':
      _alertStyles.push(styles.alertPrimary);
      _textStyles.push(styles.alertTextPrimary);
      break;

    case 'secondary':
      _alertStyles.push(styles.alertSecondary);
      _textStyles.push(styles.alertTextSecondary);
      break;

    case 'success':
      _alertStyles.push(styles.alertSuccess);
      _textStyles.push(styles.alertTextSuccess);
      break;

    case 'danger':
      _alertStyles.push(styles.alertDanger);
      _textStyles.push(styles.alertTextDanger);
      break;

    case 'warning':
      _alertStyles.push(styles.alertWarning);
      _textStyles.push(styles.alertTextWarning);
      break;

    case 'info':
      _alertStyles.push(styles.alertInfo);
      _textStyles.push(styles.alertTextInfo);
      break;

    case 'light':
      _alertStyles.push(styles.alertLight);
      _textStyles.push(styles.alertTextLight);
      break;

    case 'dark':
      _alertStyles.push(styles.alertDark);
      _textStyles.push(styles.alertTextDark);
      break;
  }
  return (
    <RNView style={_alertStyles}>
      <RNText style={_textStyles}>{text}</RNText>
    </RNView>
  );
}

const styles = StyleSheet.create({
  alert: {
    marginBottom: MARGINS.MARGIN_BASE,
    padding: PADDINGS.PADDING_BASE,

    borderRadius: BORDERS.BORDER_RADIUS_BASE,
    borderWidth: 1,
  },

  text: {
    fontSize: TYPOGRAPHY.ALERT_FONT_SIZE,
  },

  // Variants

  alertDefault: {
    backgroundColor: COLOURS.ALERT_DEFAULT_BACKGROUND,
    borderColor: COLOURS.ALERT_DEFAULT_BORDER,
  },

  alertTextDefault: {
    color: COLOURS.ALERT_TEXT_DEFAULT,
  },

  alertPrimary: {
    backgroundColor: COLOURS.ALERT_PRIMARY_BACKGROUND,
    borderColor: COLOURS.ALERT_PRIMARY_BORDER,
  },

  alertTextPrimary: {
    color: COLOURS.ALERT_TEXT_PRIMARY,
  },

  alertSecondary: {
    backgroundColor: COLOURS.ALERT_SECONDARY_BACKGROUND,
    borderColor: COLOURS.ALERT_SECONDARY_BORDER,
  },

  alertTextSecondary: {
    color: COLOURS.ALERT_TEXT_SECONDARY,
  },

  alertSuccess: {
    backgroundColor: COLOURS.ALERT_SUCCESS_BACKGROUND,
    borderColor: COLOURS.ALERT_SUCCESS_BORDER,
  },

  alertTextSuccess: {
    color: COLOURS.ALERT_TEXT_SUCCESS,
  },

  alertDanger: {
    backgroundColor: COLOURS.ALERT_DANGER_BACKGROUND,
    borderColor: COLOURS.ALERT_DANGER_BORDER,
  },

  alertTextDanger: {
    color: COLOURS.ALERT_TEXT_DANGER,
  },

  alertWarning: {
    backgroundColor: COLOURS.ALERT_WARNING_BACKGROUND,
    borderColor: COLOURS.ALERT_WARNING_BORDER,
  },

  alertTextWarning: {
    color: COLOURS.ALERT_TEXT_WARNING,
  },

  alertInfo: {
    backgroundColor: COLOURS.ALERT_INFO_BACKGROUND,
    borderColor: COLOURS.ALERT_INFO_BORDER,
  },

  alertTextInfo: {
    color: COLOURS.ALERT_TEXT_INFO,
  },

  alertLight: {
    backgroundColor: COLOURS.ALERT_LIGHT_BACKGROUND,
    borderColor: COLOURS.ALERT_LIGHT_BORDER,
  },

  alertTextLight: {
    color: COLOURS.ALERT_TEXT_LIGHT,
  },

  alertDark: {
    backgroundColor: COLOURS.ALERT_DARK_BACKGROUND,
    borderColor: COLOURS.ALERT_DARK_BORDER,
  },

  alertTextDark: {
    color: COLOURS.ALERT_TEXT_DARK,
  },
});
