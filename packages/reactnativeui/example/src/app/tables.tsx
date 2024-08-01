import { SafeAreaView, ScrollView } from 'react-native';
import { H1, H2, Table, TableRow, TableRows, Text, View } from 'reactnativeui';

import { ExampleView } from '../components';

// Example basic table data
const basicTableHeadingsData = ['#', 'First', 'Last', 'Handle'];
const basicTableData = [
  [1, 'Dallas', 'Clark', '@dallasclark'],
  [2, 'React Native', 'UI', '@react_native_ui'],
];
const basicTableWidthArray = ['10%', '25%', '25%', '40%'];

// Example variant table data
const variantTableHeadingsData = ['Style', 'Heading', 'Heading'];
const variantTableData: string[][] = [
  ['Default', 'Cell', 'Cell'],
  ['Primary', 'Cell', 'Cell'],
  ['Secondary', 'Cell', 'Cell'],
  ['Success', 'Cell', 'Cell'],
  ['Danger', 'Cell', 'Cell'],
  ['Warning', 'Cell', 'Cell'],
  ['Info', 'Cell', 'Cell'],
  ['Light', 'Cell', 'Cell'],
  ['Dark', 'Cell', 'Cell'],
];
const variantTableWidthArray = ['40%', '30%', '30%'];

export default function Tables() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <H1>Tables</H1>

          <H2>Basic</H2>
          <Text>
            Using the most basic table component, here's how tables look in
            React Native UI.
          </Text>
          <ExampleView>
            <Table>
              <TableRow
                data={basicTableHeadingsData}
                heading
                widthArray={basicTableWidthArray}
              />
              <TableRows
                data={basicTableData}
                widthArray={basicTableWidthArray}
              />
            </Table>
          </ExampleView>

          <H2>Variants</H2>
          <Text>Use variants to style the table in various ways.</Text>
          <ExampleView>
            <Table>
              <TableRow
                data={variantTableHeadingsData}
                heading
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[0]}
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[1]}
                variant="primary"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[2]}
                variant="secondary"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[3]}
                variant="success"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[4]}
                variant="danger"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[5]}
                variant="warning"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[6]}
                variant="info"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[7]}
                variant="light"
                widthArray={variantTableWidthArray}
              />
              <TableRow
                data={variantTableData[8]}
                variant="dark"
                widthArray={variantTableWidthArray}
              />
            </Table>
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
