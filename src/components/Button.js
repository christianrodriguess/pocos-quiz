import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

const buttonVariants = {
  primary: { backgroundColor: colors.green, text: colors.white },
  secondary: { backgroundColor: colors.gray, text: colors.black },
};

export default function Button({ children, variant = 'primary', onPress, style }) {
  const { backgroundColor, text: textColor } = buttonVariants[variant];

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '85%',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginVertical: 10,
  },

  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
