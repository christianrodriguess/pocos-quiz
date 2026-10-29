import { View, StatusBar } from 'react-native';

import Main from './src/navigation/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Main />
      <StatusBar barStyle= 'default' />
    </View>
  );
}