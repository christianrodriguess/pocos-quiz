import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../inicio/index';
import Quiz from '../quiz/index';
import Estatisticas from '../estatisticas/index';
import Resultado from "../resultado/index";
import Sobre from "../sobre/index";

export default function Main() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" options={{ headerShown: false }} component={Inicio} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Estatísticas" component={Estatisticas} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}