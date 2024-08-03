import type { TextProps as RNTextProps } from 'react-native';

export type Breadcrumb = {
  link: RNTextProps['onPress'];
  text: string;
};

export type Breadcrumbs = Breadcrumb[];
