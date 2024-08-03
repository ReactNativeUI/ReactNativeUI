import {
  Pressable as RNPressable,
  StyleSheet,
  Text as RNText,
  View as RNView,
} from 'react-native';

import { COLOURS, MARGINS, TYPOGRAPHY } from '../config';
import type { Breadcrumbs } from '../types';

export function Breadcrumbs({
  breadcrumbs,
  separator = '/',
}: {
  breadcrumbs: Breadcrumbs;
  separator?: string;
}) {
  return (
    <RNView style={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <RNView key={`breadcrumb-${index}`} style={styles.breadcrumbContainer}>
          {index > 0 && (
            <RNText style={styles.breadcrumbSeparator}>{separator}</RNText>
          )}

          <RNPressable onPress={breadcrumb.link}>
            <RNText
              style={[
                styles.breadcrumbText,
                index === breadcrumbs.length - 1 && styles.breadcrumbActiveText,
              ]}
            >
              {breadcrumb.text}
            </RNText>
          </RNPressable>
        </RNView>
      ))}
    </RNView>
  );
}

const styles = StyleSheet.create({
  breadcrumbs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  breadcrumbContainer: {
    flexDirection: 'row',
    marginBottom: MARGINS.MARGIN_BASE,
    marginRight: MARGINS.MARGIN_SMALL,
  },

  breadcrumbText: {
    color: COLOURS.BREADCRUMB_TEXT_COLOR,
    fontSize: TYPOGRAPHY.BREADCRUMB_FONT_SIZE,
    textDecorationLine: 'underline',
  },

  breadcrumbActiveText: {
    color: COLOURS.BREADCRUMB_ACTIVE_TEXT_COLOR,
    textDecorationLine: 'none',
  },

  breadcrumbSeparator: {
    marginRight: MARGINS.MARGIN_SMALL,

    color: COLOURS.BREADCRUMB_SEPARATOR_COLOR,
  },
});
