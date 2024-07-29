// import { useEffect, useState } from "react";
import { Text, View } from "react-native";
// import { multiply } from 'reactnativeui';

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
      <Text>React Native UI Examples</Text>

      <Text>Use the top-left navigation bar to browse components.</Text>
{/* 
      <Text>Result: {result}</Text> */}
    </View>
  );
}
