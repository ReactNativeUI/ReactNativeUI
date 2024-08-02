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

        <Drawer.Screen
          name="forms"
          options={{
            drawerLabel: 'Forms',
            title: 'Forms',
          }}
        />

        <Drawer.Screen
          name="form-layout"
          options={{
            drawerLabel: 'Form Layout',
            title: 'Form Layout',
          }}
        />

        <Drawer.Screen
          name="buttons"
          options={{
            drawerLabel: 'Buttons',
            title: 'Buttons',
          }}
        />

        <Drawer.Screen
          name="pressable-text-buttons"
          options={{
            drawerLabel: 'Pressable Text Buttons',
            title: 'Pressable Text Buttons',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
