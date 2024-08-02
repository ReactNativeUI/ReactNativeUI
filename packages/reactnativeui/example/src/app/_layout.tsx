import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="index">
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />

        <Drawer.Screen
          name="typography"
          options={{
            drawerLabel: 'Typography',
            title: 'Typography',
          }}
        />

        <Drawer.Screen
          name="images"
          options={{
            drawerLabel: 'Images',
            title: 'Images',
          }}
        />

        <Drawer.Screen
          name="tables"
          options={{
            drawerLabel: 'Tables',
            title: 'Tables',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
