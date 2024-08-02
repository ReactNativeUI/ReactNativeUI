import { SafeAreaView, ScrollView } from 'react-native';
import { Button, H1, H2, Text, View } from 'reactnativeui';

import { ExampleView } from '../components';

export default function Buttons() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
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
            <Button title="Button" />
          </ExampleView>

          <H2>Variants</H2>
          <Text>
            React Native UI includes several button variants, each serving its
            own semantic purpose. Such as primary, secondary, success, and
            danger.
          </Text>
          <ExampleView>
            <Button title="Primary" variant="primary" />
            <Button title="Secondary" variant="secondary" />
            <Button title="Success" variant="success" />
            <Button title="Danger" variant="danger" />
            <Button title="Warning" variant="warning" />
            <Button title="Info" variant="info" />
            <Button title="Light" variant="light" />
            <Button title="Dark" variant="dark" />
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
