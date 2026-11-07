import { View, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      <StatusBar barStyle="default" />
    </View>
  );
}
