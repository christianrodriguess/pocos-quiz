import { View, StyleSheet } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignItems: 'start',
    backgroundColor: '#FFF',
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E4E4E4',
    marginVertical: 10,
  },
});
