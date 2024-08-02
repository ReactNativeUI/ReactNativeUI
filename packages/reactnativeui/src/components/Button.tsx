import { Button as RNButton, StyleSheet, View as RNView } from 'react-native';
import type {
  ButtonProps as RNButtonProps,
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { COLOURS, MARGINS } from '../config';
import type { Variant } from '../types';

export function Button({
  containerStyle,
  title,
  variant = 'default',
  ...props
}: RNButtonProps & {
  containerStyle?: RNStyleProp<RNViewStyle>;
  title: string;
  variant?: Variant;
}) {
  let color = COLOURS.DEFAULT;
  switch (variant) {
    case 'default':
      color = COLOURS.DEFAULT;
      break;

    case 'primary':
      color = COLOURS.PRIMARY;
      break;

    case 'secondary':
      color = COLOURS.SECONDARY;
      break;

    case 'success':
      color = COLOURS.SUCCESS;
      break;

    case 'danger':
      color = COLOURS.DANGER;
      break;

    case 'warning':
      color = COLOURS.WARNING;
      break;

    case 'info':
      color = COLOURS.INFO;
      break;

    case 'light':
      color = COLOURS.LIGHT;
      break;

    case 'dark':
      color = COLOURS.DARK;
      break;
  }

  return (
    <RNView style={[styles.container, containerStyle]}>
      <RNButton color={color} title={title} {...props} />
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGINS.MARGIN_BASE,
  },
});
