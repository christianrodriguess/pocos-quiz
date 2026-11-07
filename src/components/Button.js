import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

const buttonVariants = {
  primary: { backgroundColor: colors.primary, textColor: colors.white },
  secondary: { backgroundColor: colors.secondary, textColor: colors.text },
};

export default function Button({ variant = 'primary', style, onPress, children }) {
  const { backgroundColor, textColor } = buttonVariants[variant];

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
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

  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
