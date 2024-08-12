import { Alert as RNAlert, SafeAreaView, ScrollView } from 'react-native';
import { Button, ButtonGroup, Container, H1, H2, Text } from 'reactnativeui';

import { ExampleView } from '../components';

const _onPress = (buttonTitle: string) => {
  RNAlert.alert('React Native UI', `Button ${buttonTitle} Pressed`);
};

const basicButtons: Element[] = [
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-1`}
    onPress={() => _onPress('Left')}
    title="Left"
    variant="primary"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-2`}
    onPress={() => _onPress('Middle')}
    title="Middle"
    variant="primary"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-3`}
    onPress={() => _onPress('Right')}
    title="Right"
    variant="primary"
  />,
];

const mixedButtons: Element[] = [
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-1`}
    onPress={() => _onPress('Left')}
    title="Left"
    variant="danger"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-2`}
    onPress={() => _onPress('Middle')}
    title="Middle"
    variant="warning"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-3`}
    onPress={() => _onPress('Right')}
    title="Right"
    variant="success"
  />,
];

const verticalButtons: Element[] = [
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-1`}
    onPress={() => _onPress('Top')}
    title="Top"
    variant="primary"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-2`}
    onPress={() => _onPress('Middle')}
    title="Middle"
    variant="primary"
  />,
  <Button
    containerStyle={{ marginBottom: 0 }}
    key={`button-3`}
    onPress={() => _onPress('Bottom')}
    title="Bottom"
    variant="primary"
  />,
];

export default function Badges() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Button Groups</H1>

          <Text>Group a series of buttons with the ButtonGroup component.</Text>

          <H2>Basic example</H2>
          <Text>Use the buttons prop to render your buttons.</Text>
          <ExampleView>
            <ButtonGroup buttons={basicButtons} />
          </ExampleView>

          <H2>Mixed styles</H2>
          <Text>Use different types of buttons within a group.</Text>
          <ExampleView>
            <ButtonGroup buttons={mixedButtons} />
          </ExampleView>

          <H2>Center alignment</H2>
          <Text>Use additional props to center the buttons.</Text>
          <ExampleView>
            <ButtonGroup
              buttons={basicButtons}
              style={{ justifyContent: 'center' }}
            />
          </ExampleView>

          <H2>Vertical variation</H2>
          <Text>
            Make a set of buttons appear veritically stacked rather than
            horizontally.
          </Text>
          <ExampleView>
            <ButtonGroup buttons={verticalButtons} direction="column" />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
