import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import StatsScreen from '../screens/StatsScreen';
import ResultScreen from '../screens/ResultScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, title: 'Início' }}
        />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} options={{ title: 'Estatísticas' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Resultado', headerLeft: () => null, gestureEnabled: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
