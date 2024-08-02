import { SafeAreaView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Button, Code, H1, H2, Text, View } from 'reactnativeui';
import { useNavigation } from 'expo-router';

export default function Index() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <H1>React Native UI</H1>

        <H2>Build fast, easy mobile UIs with React Native UI.</H2>

        <Text>
          Powerful and feature-packed mobile frontend toolkit. Build and
          customise your React Native UI components.
        </Text>

        <Text>
          This example application has been built using React Native UI.
        </Text>

        <Code>$ npm i @reactnativeui/reactnativeui</Code>

        <Button
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          title="View Components"
        />
      </View>
    </SafeAreaView>
  );
}
