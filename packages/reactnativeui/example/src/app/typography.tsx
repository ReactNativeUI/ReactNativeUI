import { SafeAreaView, ScrollView } from 'react-native';
import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  View,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Typography() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <H1>Typography</H1>

          <H2>Headings</H2>
          <Text>
            All headings, &lt;H1&gt; through &lt;H6&gt;, are available.
          </Text>
          <ExampleView>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </ExampleView>

          <H2>Text elements</H2>
          <ExampleView>
            <Text>Styling for common text elements.</Text>
            <Text>This line rendered as normal text.</Text>
            <Text bold>This line rendered as bold text.</Text>
          </ExampleView>

          <H2>Blockquotes</H2>
          <Text>
            For quoting blocks of content from another source within your
            document. Wrap &lt;Blockquote&gt; around the text.
          </Text>
          <ExampleView>
            <Blockquote author="Someone famous">
              This is an example blockquote.
            </Blockquote>
          </ExampleView>

          <H2>Code</H2>
          <Text>lorem ipsum dolor</Text>
          <ExampleView>
            <Code>
              {`import { Button } from "reactnativeui";`}
              {`import { Button } from "reactnativeui";`}
            </Code>
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
