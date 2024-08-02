import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View as RNView,
} from 'react-native';
import {
  Container,
  FormLabel,
  FormText,
  FormTextInput,
  H1,
  H2,
  Text,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function FormLayout() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Form Layout</H1>

          <Text>
            Give your forms some structure - from inline to horizonal to custom
            grid.
          </Text>

          <H2>Form grid</H2>
          <Text>
            More complex forms can be built using flexbox. Use these flexbox for
            form layouts that require multiple columns, varied widths, and
            additional alignment options.
          </Text>
          <ExampleView>
            <RNView style={styles.container}>
              <RNView style={styles.column}>
                <FormLabel>Email:</FormLabel>
                <FormTextInput
                  keyboardType="email-address"
                  placeholder="name@example.com"
                />
                <FormText>This is some example help text.</FormText>
              </RNView>

              <RNView style={styles.column}>
                <FormLabel>Phone:</FormLabel>
                <FormTextInput
                  keyboardType="numeric"
                  placeholder="1234567890"
                />
                <FormText>This is some example help text.</FormText>
              </RNView>
            </RNView>
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },

  column: {
    flex: 1,
  },
});
