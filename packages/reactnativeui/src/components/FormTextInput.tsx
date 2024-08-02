import {
  StyleSheet,
  TextInput as RNTextInput,
  View as RNView,
} from 'react-native';
import type {
  StyleProp as RNStyleProp,
  TextInputProps as RNTextInputProps,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';

export function FormTextInput({
  containerStyle,
  onChangeText,
  textStyle,
  value,
  ...props
}: RNTextInputProps & {
  containerStyle?: RNStyleProp<RNViewStyle>;
  textStyle?: RNStyleProp<RNTextStyle>;
}) {
  return (
    <RNView style={[styles.container, containerStyle]}>
      <RNTextInput
        onChangeText={onChangeText}
        style={[styles.textInput, textStyle]}
        value={value}
        {...props}
      />
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGINS.MARGIN_BASE,
  },

  textInput: {
    paddingBottom: PADDINGS.PADDING_SMALL,
    paddingLeft: PADDINGS.PADDING_SMALL,
    paddingRight: PADDINGS.PADDING_SMALL,
    paddingTop: PADDINGS.PADDING_SMALL,

    borderColor: COLOURS.GRAY_400,
    borderWidth: 1,
    fontSize: TYPOGRAPHY.TEXT_INPUT_FONT_SIZE,
    lineHeight: TYPOGRAPHY.TEXT_INPUT_FONT_SIZE * 1.2,
  },
});
