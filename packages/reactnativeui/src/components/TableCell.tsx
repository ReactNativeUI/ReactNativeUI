import { StyleSheet, Text as RNText, View as RNView } from 'react-native';

import { COLOURS, PADDINGS } from '../config';
import type { Variant } from '../types';

export function TableCell({
  cellStyle,
  data,
  heading,
  textStyle,
  variant = 'default',
}: {
  cellStyle?: any;
  data: number | string;
  heading?: boolean;
  textStyle?: any;
  variant?: Variant;
}) {
  // Cell
  const _cellStyles = [styles.tableCell, cellStyle];

  // Text
  const _textStyles = [textStyle];
  if (heading === true) {
    _textStyles.push(styles.tableCellTextHeading);
  }

  // Variants
  switch (variant) {
    case 'primary':
      _cellStyles.push(styles.tableCellPrimary);
      break;

    case 'secondary':
      _cellStyles.push(styles.tableCellSecondary);
      break;

    case 'success':
      _cellStyles.push(styles.tableCellSuccess);
      break;

    case 'danger':
      _cellStyles.push(styles.tableCellDanger);
      break;

    case 'warning':
      _cellStyles.push(styles.tableCellWarning);
      break;

    case 'info':
      _cellStyles.push(styles.tableCellInfo);
      break;

    case 'light':
      _cellStyles.push(styles.tableCellLight);
      break;

    case 'dark':
      _cellStyles.push(styles.tableCellDark);
      _textStyles.push(styles.tableCellTextDark);
      break;
  }

  return (
    <RNView style={_cellStyles}>
      <RNText style={_textStyles}>{data}</RNText>
    </RNView>
  );
}

const styles = StyleSheet.create({
  tableCell: {
    padding: PADDINGS.PADDING_SMALL,

    borderBottomColor: COLOURS.GRAY_200,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },

  tableCellTextHeading: {
    fontWeight: 700,
  },

  tableCellPrimary: {
    backgroundColor: COLOURS.TABLE_PRIMARY_BACKGROUND,
  },

  tableCellSecondary: {
    backgroundColor: COLOURS.TABLE_SECONDARY_BACKGROUND,
  },

  tableCellSuccess: {
    backgroundColor: COLOURS.TABLE_SUCCESS_BACKGROUND,
  },

  tableCellDanger: {
    backgroundColor: COLOURS.TABLE_DANGER_BACKGROUND,
  },

  tableCellWarning: {
    backgroundColor: COLOURS.TABLE_WARNING_BACKGROUND,
  },

  tableCellInfo: {
    backgroundColor: COLOURS.TABLE_INFO_BACKGROUND,
  },

  tableCellLight: {
    backgroundColor: COLOURS.TABLE_LIGHT_BACKGROUND,
  },

  tableCellDark: {
    backgroundColor: COLOURS.TABLE_DARK_BACKGROUND,
  },

  tableCellTextDark: {
    color: COLOURS.WHITE,
  },
});
