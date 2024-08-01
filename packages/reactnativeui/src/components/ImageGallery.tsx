import { StyleSheet, View as RNView } from 'react-native';

export function ImageGallery({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <RNView style={[styles.imageGallery, style]}>{children}</RNView>;
}

const styles = StyleSheet.create({
  imageGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
