import { SafeAreaView, ScrollView } from 'react-native';
import {
  Card,
  Container,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  PressableTextButton,
  Text,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Cards() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Cards</H1>

          <Text>
            React Native UI's cards provide a flexible and extensible content
            container with multiple variants and options.
          </Text>

          <H2>Example</H2>
          <Text>
            Using as little markup as possible, but packed with features and
            flexibility.
          </Text>
          <ExampleView>
            <Card imageSource={require('../../assets/icon.png')}>
              <H5>Card title</H5>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eu rhoncus velit, ut ultricies dolor. Suspendisse nisl justo,
                commodo ut scelerisque eget, iaculis scelerisque metus.
              </Text>
              <PressableTextButton
                title="Button"
                variant="primary"
              ></PressableTextButton>
            </Card>
          </ExampleView>

          <H2>Basic example</H2>
          <Text>
            Starting with a simple example with no image, heading or button.
          </Text>
          <ExampleView>
            <Card>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eu rhoncus velit, ut ultricies dolor. Suspendisse nisl justo,
                commodo ut scelerisque eget, iaculis scelerisque metus.
              </Text>
            </Card>
          </ExampleView>

          <H2>Titles</H2>
          <Text>Use all the titles the same way you normally would.</Text>
          <ExampleView>
            <Card>
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eu rhoncus velit, ut ultricies dolor. Suspendisse nisl justo,
                commodo ut scelerisque eget, iaculis scelerisque metus.
              </Text>
            </Card>
          </ExampleView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
