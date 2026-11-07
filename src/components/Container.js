import { View, StyleSheet } from 'react-native';

import { colors } from '../theme';

export default function Container({ style, children }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
    flex: 1,
    padding: 20,
  },
});
