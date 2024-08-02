import {
  StyleSheet,
  Pressable as RNPressable,
  Text as RNText,
} from 'react-native';
import type { PressableProps as RNPressableProps } from 'react-native';

import { COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';

export function ButtonClose({ ...props }: RNPressableProps) {
  return (
    <RNPressable style={pressableStyles.buttonClose} {...props}>
      <RNText style={pressableStyles.buttonCloseText}>X</RNText>
    </RNPressable>
  );
}

const pressableStyles = StyleSheet.create({
  buttonClose: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -MARGINS.MARGIN_BASE,
    marginTop: -MARGINS.MARGIN_BASE,
    padding: PADDINGS.PADDING_BASE,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  buttonCloseText: {
    width: TYPOGRAPHY.TEXT_FONT_SIZE_BASE,

    color: COLOURS.BLACK,
    fontSize: TYPOGRAPHY.TEXT_FONT_SIZE_BASE,
    opacity: 0.5,
    textAlign: 'center',
  },
});
