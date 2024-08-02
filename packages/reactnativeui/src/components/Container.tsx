import { StyleSheet, View as RNView } from 'react-native';
import type {
  StyleProp as RNStyleProp,
  ViewStyle as RNViewStyle,
} from 'react-native';

import { MARGINS } from '../config';

export function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: RNStyleProp<RNViewStyle>;
}) {
  return <RNView style={[styles.view, style]}>{children}</RNView>;
}

const styles = StyleSheet.create({
  view: {
    margin: MARGINS.MARGIN_BASE,
  },
});
