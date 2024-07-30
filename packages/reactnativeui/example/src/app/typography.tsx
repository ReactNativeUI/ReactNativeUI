import { H1, H2, H3, H4, H5, H6, Text, View } from 'reactnativeui';

import { ExampleView } from '../components';

export default function Typography() {
  return (
    <View>
      <H1>Typography</H1>

      <H2>Headings</H2>
      <Text>
        All HTML headings, &lt;H1&gt; through &lt;H6&gt;, are available.
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
    </View>
  );
}
