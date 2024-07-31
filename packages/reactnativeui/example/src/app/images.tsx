import { SafeAreaView, ScrollView } from 'react-native';
import { H1, H2, Image, Text, View } from 'reactnativeui';

import { ExampleView } from '../components';

export default function Images() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <H1>Images</H1>

          <H2>Responsive images</H2>
          <Text>
            Images automatically scale to fit the width of their container.
          </Text>
          <ExampleView>
            <Image height={200} source={require('../../assets/icon.png')} />
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
