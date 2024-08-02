import { StyleSheet, View as RNView } from 'react-native';

import type { Variant } from '../types';
import { TableCell } from './TableCell';

export function TableRow({
  data,
  heading,
  style,
  variant = 'default',
  widthArray,
}: {
  data: (number | string)[];
  heading?: boolean;
  style?: any;
  variant?: Variant;
  widthArray: (number | string)[];
}) {
  return (
    <RNView style={[styles.tableRow, style]}>
      {data.map((item, index) => (
        <TableCell
          cellStyle={{
            width: widthArray[index],
          }}
          data={item}
          heading={heading}
          key={index}
          variant={variant}
        />
      ))}
    </RNView>
  );
}

export function TableRows({
  data,
  style,
  widthArray,
}: {
  data: (number | string)[][];
  style?: any;
  widthArray: (number | string)[];
}) {
  return (
    <RNView style={style}>
      {data.map((item, index) => (
        <TableRow data={item} key={index} widthArray={widthArray} />
      ))}
    </RNView>
  );
}

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    width: '100%',
  },
});
