import { Text, StyleSheet } from 'react-native';

export default function Titulo({ children, style }) {
  return <Text style={[styles.titulo, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
  },
});
