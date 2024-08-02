import { StyleSheet, Text as RNText, View as RNView } from 'react-native';

import { COLOURS, MARGINS, PADDINGS, TYPOGRAPHY } from '../config';

export function Blockquote({
  author,
  children,
}: {
  author?: string;
  children: string;
}) {
  return (
    <RNView style={styles.blockquote}>
      <RNText style={styles.blockquoteText}>{children}</RNText>
      {author && <RNText style={styles.blockquoteAuthor}>— {author}</RNText>}
    </RNView>
  );
}

const styles = StyleSheet.create({
  // Blockquotes

  blockquote: {
    marginBottom: MARGINS.MARGIN_BASE,
    paddingBottom: PADDINGS.PADDING_SMALL,
    paddingTop: PADDINGS.PADDING_SMALL,

    borderLeftColor: COLOURS.GRAY_200,
    borderLeftWidth: 4,
    paddingLeft: PADDINGS.PADDING_MEDIUM,
  },

  blockquoteAuthor: {
    color: COLOURS.GRAY_400,
  },

  blockquoteText: {
    fontSize: TYPOGRAPHY.BLOCKQUOTE_FONT_SIZE,
  },
});
