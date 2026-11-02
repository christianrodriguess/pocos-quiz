import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Botao from '../components/Botao';
import Card from '../components/Card';
import Titulo from '../components/Titulo';

export default function ResultadoScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { acertos, erros, total } = route.params;
  const porcentagem = ((acertos / total) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <Titulo>Quiz Finalizado!</Titulo>

      <Card>
        <View style={styles.linha}>
          <Ionicons name="checkmark" size={24} color="#16C60C" />
          <Text style={styles.item}>Acertos: {acertos}</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="close" size={24} color="#B42B11" />
          <Text style={styles.item}>Erros: {erros}</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="cellular" size={24} color="#0078D7" />
          <Text style={styles.item}>Taxa de acertos: {porcentagem}%</Text>
        </View>
      </Card>

      <Botao tipo={'primario'} texto={'Jogar novamente'} acao={() => navigation.navigate('Quiz')} />

      <Botao
        tipo={'secundario'}
        texto={'Voltar ao início'}
        acao={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAF9',
    flex: 1,
    padding: 20,
  },

  linha: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },

  item: {
    fontSize: 20,
  },
});
