import { Alert, SafeAreaView, ScrollView } from 'react-native';
import { Container, H1, H2, PressableTextButton, Text } from 'reactnativeui';

import { ExampleView } from '../components';

export default function PressableTextPressableTextButtons() {
  function _onPress() {
    console.log('Pressable Text Button Pressed');
    Alert.alert('React Native UI', `Pressable Text Button Pressed`);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Pressable Text Buttons</H1>

          <Text>
            Use React Native UI's PressableTextButton styles for actions in
            forms, dialogues and more with support for multiple sizes and
            states.
          </Text>

          <H2>Base</H2>
          <Text>
            React Native UI has a base PressableTextButton that sets up basic
            styles such as margin, padding, and content alignment.
          </Text>
          <ExampleView>
            <PressableTextButton onPress={_onPress} title="Default" />
          </ExampleView>

          <H2>Variants</H2>
          <Text>
            React Native UI includes several PressableTextButton variants, each
            serving its own semantic purpose. Such as primary, secondary,
            success, and danger.
          </Text>
          <ExampleView>
            <PressableTextButton
              onPress={_onPress}
              title="Primary"
              variant="primary"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Secondary"
              variant="secondary"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Success"
              variant="success"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Danger"
              variant="danger"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Warning"
              variant="warning"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Info"
              variant="info"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Light"
              variant="light"
            />
            <PressableTextButton
              onPress={_onPress}
              title="Dark"
              variant="dark"
            />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
