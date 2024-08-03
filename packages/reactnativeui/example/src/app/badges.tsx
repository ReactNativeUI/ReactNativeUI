import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Container, H1, H2, Text } from 'reactnativeui';

import { ExampleView } from '../components';

export default function Badges() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Badges</H1>

          <Text>Examples for badges.</Text>

          <H2>Base</H2>
          <Text>Badges are available for any length of text.</Text>
          <ExampleView>
            <Badge text="Default" />
          </ExampleView>

          <H2>Variants</H2>
          <Text>For proper styling, use one of the eight variants.</Text>
          <ExampleView>
            <View style={styles.variantsContainer}>
              <Badge text="Primary" variant="primary" />
              <Badge text="Secondary" variant="secondary" />
              <Badge text="Success" variant="success" />
              <Badge text="Danger" variant="danger" />
              <Badge text="Warning" variant="warning" />
              <Badge text="Info" variant="info" />
              <Badge text="Light" variant="light" />
              <Badge text="Dark" variant="dark" />
            </View>
          </ExampleView>

          <H2>Uppercase</H2>
          <Text>Use uppercase attribute to convert text to uppercase.</Text>
          <ExampleView>
            <View style={styles.variantsContainer}>
              <Badge text="Primary" uppercase variant="primary" />
              <Badge text="Secondary" uppercase variant="secondary" />
              <Badge text="Success" uppercase variant="success" />
              <Badge text="Danger" uppercase variant="danger" />
              <Badge text="Warning" uppercase variant="warning" />
              <Badge text="Info" uppercase variant="info" />
              <Badge text="Light" uppercase variant="light" />
              <Badge text="Dark" uppercase variant="dark" />
            </View>
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  variantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
