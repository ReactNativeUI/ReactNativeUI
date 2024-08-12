import { StyleSheet, View as RNView } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { MARGINS } from '../config';

export function ButtonGroup({
  buttons,
  direction = 'row',
  style,
}: {
  buttons: Element[]; // @todo use React Native UI <Button />
  direction?: 'row' | 'column';
  style?: StyleProp<ViewStyle>;
}) {
  const _styles = [styles.buttonGroup, style];

  // Direction
  if (direction === 'column') {
    _styles.push(styles.buttonGroupFlexDirectionColumn);
  }

  return (
    <RNView style={_styles}>
      {
        buttons.map((button, index) => ({
          ...button,
        })) // @todo manipulate the <Button /> here to remove marginBottom
      }
    </RNView>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: MARGINS.MARGIN_BASE,
  },

  buttonGroupFlexDirectionColumn: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
});
