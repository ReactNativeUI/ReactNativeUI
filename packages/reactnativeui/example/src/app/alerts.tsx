import { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  Alert,
  Container,
  H1,
  H2,
  PressableTextButton,
  Text,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Alerts() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Alerts</H1>

          <Text>
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </Text>

          <H2>Base</H2>
          <Text>
            Alerts are available for any length of text, as well as an optional
            close button.
          </Text>
          <ExampleView>
            <Alert text="A simple default alert." />
          </ExampleView>

          <H2>Variants</H2>
          <Text>For proper styling, use one of the eight variants.</Text>
          <ExampleView>
            <Alert text="A simple primary alert." variant="primary" />
            <Alert text="A simple secondary alert." variant="secondary" />
            <Alert text="A simple success alert." variant="success" />
            <Alert text="A simple danger alert." variant="danger" />
            <Alert text="A simple warning alert." variant="warning" />
            <Alert text="A simple info alert." variant="info" />
            <Alert text="A simple light alert." variant="light" />
            <Alert text="A simple dark alert." variant="dark" />
          </ExampleView>

          <H2>Show and hide alerts</H2>
          <Text>
            Click the button below to show an alert, then dismiss it using the
            built-in close button.
          </Text>
          <ExampleView>
            <Alert
              showCloseButton
              setVisible={setAlertVisible}
              text="You triggered this alert with a very long message!"
              variant="success"
              visible={alertVisible}
            />
            <PressableTextButton
              onPress={() => setAlertVisible(true)}
              title="Show alert"
              variant="primary"
            />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
