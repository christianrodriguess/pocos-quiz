import { Text } from 'react-native';

import { colors } from '../theme';

const variants = {
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text },
  body: { fontSize: 16, lineHeight: 24, color: colors.text },
  caption: { fontSize: 12, color: colors.textSecondary },
};

export default function AppText({ variant = 'body', style, children }) {
  return <Text style={[variants[variant], style]}>{children}</Text>;
}
