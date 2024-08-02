import { useState } from 'react';
import { Alert, SafeAreaView, ScrollView } from 'react-native';
import {
  Container,
  FormLabel,
  FormText,
  FormTextInput,
  H1,
  H2,
  PressableTextButton,
  Text,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Forms() {
  const [overviewEmail, setOverviewEmail] = useState('');
  const [overviewPassword, setOverviewPassword] = useState('');
  const [overviewPhone, setOverviewPhone] = useState('');

  function _onPress() {
    console.log('Submit Pressed');
    Alert.alert(
      'Submit Pressed',
      `Email: ${overviewEmail}\nPassword: ${overviewPassword}\nPhone: ${overviewPhone}`
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Forms</H1>

          <Text>
            Examples for forms, layout options, and custom components for
            creating a wide variety of forms.
          </Text>

          <H2>Overview</H2>
          <Text>
            Here's a quick example to demonstrate React Native UI's form
            components.{' '}
          </Text>
          <ExampleView>
            <FormLabel>Email:</FormLabel>
            <FormTextInput
              keyboardType="email-address"
              onChangeText={setOverviewEmail}
              placeholder="name@example.com"
              value={overviewEmail}
            />
            <FormText>This is some example help text.</FormText>

            <FormLabel>Password:</FormLabel>
            <FormTextInput
              onChangeText={setOverviewPassword}
              placeholder="P@$$w0rd"
              secureTextEntry
              value={overviewPassword}
            />
            <FormText>This is some example help text.</FormText>

            <FormLabel>Phone:</FormLabel>
            <FormTextInput
              keyboardType="numeric"
              onChangeText={setOverviewPhone}
              placeholder="1234567890"
              value={overviewPhone}
            />
            <FormText>This is some example help text.</FormText>

            <PressableTextButton
              onPress={_onPress}
              title="Submit"
              variant="primary"
            />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
