import { Text, StyleSheet } from 'react-native';

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
  },
});
