import { View, StatusBar } from 'react-native';

import Main from './src/components/main/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Main />
      <StatusBar barStyle= 'default' />
    </View>
  );
}