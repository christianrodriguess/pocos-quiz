import { View, StyleSheet } from 'react-native';

import { colors } from '../theme';

export default function Card({ style, children }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.border,
    marginVertical: 10,
  },
});
