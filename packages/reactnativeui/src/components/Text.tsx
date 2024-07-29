import { Text as RNText } from 'react-native';

export default function Text({ children }: { children: React.ReactNode }) {
  return <RNText>{children}</RNText>;
}
