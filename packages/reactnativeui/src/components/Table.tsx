import { StyleSheet, View as RNView } from 'react-native';

import { MARGINS } from '../config';

export function Table({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNView style={[styles.table, style]}>{children}</RNView>;
}

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
    marginBottom: MARGINS.MARGIN_BASE,
  },
});
