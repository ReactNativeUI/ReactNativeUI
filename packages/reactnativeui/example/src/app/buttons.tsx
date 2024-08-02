import { Alert, SafeAreaView, ScrollView } from 'react-native';
import { Button, Container, H1, H2, Text } from 'reactnativeui';

import { ExampleView } from '../components';

export default function Buttons() {
  function _onPress() {
    console.log('Button Pressed');
    Alert.alert('React Native UI', `Button Pressed`);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Buttons</H1>

          <Text>
            Use React Native UI's button styles for actions in forms, dialogues
            and more with support for multiple sizes and states.
          </Text>

          <H2>Base</H2>
          <Text>
            React Native UI has a base button that sets up basic styles such as
            margin, padding, and content alignment.
          </Text>
          <ExampleView>
            <Button onPress={_onPress} title="Button" />
          </ExampleView>

          <H2>Variants</H2>
          <Text>
            React Native UI includes several button variants, each serving its
            own semantic purpose. Such as primary, secondary, success, and
            danger.
          </Text>
          <ExampleView>
            <Button onPress={_onPress} title="Primary" variant="primary" />
            <Button onPress={_onPress} title="Secondary" variant="secondary" />
            <Button onPress={_onPress} title="Success" variant="success" />
            <Button onPress={_onPress} title="Danger" variant="danger" />
            <Button onPress={_onPress} title="Warning" variant="warning" />
            <Button onPress={_onPress} title="Info" variant="info" />
            <Button onPress={_onPress} title="Light" variant="light" />
            <Button onPress={_onPress} title="Dark" variant="dark" />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
