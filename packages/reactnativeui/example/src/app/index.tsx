// import { useEffect, useState } from "react";
import { View } from 'react-native';
import { H1, Text } from 'reactnativeui';

export default function Index() {
  // const [result, setResult] = useState<number | undefined>();

  // useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <H1>React Native UI Examples</H1>

      <Text>Use the top-left navigation bar to browse components.</Text>
      {/* 
      <Text>Result: {result}</Text> */}
    </View>
  );
}
