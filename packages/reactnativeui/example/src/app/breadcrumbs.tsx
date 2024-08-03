import { Alert as RNAlert, SafeAreaView, ScrollView } from 'react-native';
import { Breadcrumbs, Container, H1, H2, Text } from 'reactnativeui';

import { ExampleView } from '../components';

const breadcrumbs = [
  {
    link: () => {
      RNAlert.alert('React Native UI', 'Home Pressed');
    },
    text: 'Home',
  },

  {
    link: () => {
      RNAlert.alert('React Native UI', 'Breadcrumbs Pressed');
    },
    text: 'Breadcrumbs',
  },
];

export default function Badges() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Breadcrumbs</H1>

          <Text>
            Indicate the current page's location within a navigational hierarchy
            that automatically adds separators.
          </Text>

          <H2>Base</H2>
          <Text>Use an array of strings and links to create breadcrumbs.</Text>
          <ExampleView>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </ExampleView>

          <H2>Dividers</H2>
          <Text>
            Dividers can be customised with the `separator` prop. Make sure you
            escape any special characters.
          </Text>
          <ExampleView>
            <Breadcrumbs breadcrumbs={breadcrumbs} separator=">" />
            <Breadcrumbs breadcrumbs={breadcrumbs} separator=">>" />
            <Breadcrumbs breadcrumbs={breadcrumbs} separator="|" />
          </ExampleView>

          <Text>You can also remove the divider with an empty string.</Text>
          <ExampleView>
            <Breadcrumbs breadcrumbs={breadcrumbs} separator="" />
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
