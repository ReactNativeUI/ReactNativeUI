import { StyleSheet, View as RNView } from 'react-native';

import { MARGINS } from '../config';

export function View({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNView style={[styles.view, style]}>{children}</RNView>;
}

const styles = StyleSheet.create({
  view: {
    margin: MARGINS.MARGIN_BASE,
  },
});
