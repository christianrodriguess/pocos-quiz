import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InicioScreen from '../screens/InicioScreen';
import QuizScreen from '../screens/QuizScreen';
import EstatisticasScreen from '../screens/EstatisticasScreen';
import ResultadoScreen from '../screens/ResultadoScreen';
import SobreScreen from '../screens/SobreScreen';

export default function Main() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{ headerShown: false }} component={InicioScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Estatisticas" component={EstatisticasScreen} />
        <Stack.Screen name="Resultado" component={ResultadoScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}