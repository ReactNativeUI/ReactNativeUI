import { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  FormLabel,
  FormText,
  FormTextInput,
  H1,
  H2,
  PressableTextButton,
  Text,
  View,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Forms() {
  const [overviewEmail, setOverviewEmail] = useState('');
  const [overviewPassword, setOverviewPassword] = useState('');
  const [overviewPhone, setOverviewPhone] = useState('');

  function _onPress() {
    console.log('Pressed');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
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
              value={overviewEmail}
            />
            <FormText>This is some example help text.</FormText>

            <FormLabel>Password:</FormLabel>
            <FormTextInput
              onChangeText={setOverviewPassword}
              value={overviewPassword}
            />
            <FormText>This is some example help text.</FormText>

            <FormLabel>Phone:</FormLabel>
            <FormTextInput
              keyboardType="numeric"
              onChangeText={setOverviewPhone}
              value={overviewPhone}
            />
            <FormText>This is some example help text.</FormText>

            <PressableTextButton
              onPress={_onPress}
              title="Submit"
              variant="primary"
            />
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
