import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function EstatisticasScreen() {
  const [dados, setDados] = useState({
    respondidas: 0,
    acertos: 0,
    erros: 0,
  });

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const salvo = await AsyncStorage.getItem('estatisticas');
        if (salvo) setDados(JSON.parse(salvo));
      } catch (e) {
        console.log('Erro ao carregar estatísticas:', e);
      }
    };
    carregarDados();
  }, []);

  const porcentagem =
    dados.respondidas > 0 ? ((dados.acertos / dados.respondidas) * 100).toFixed(1) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Suas Estatísticas</Text>

      <Card>
        <View style={styles.linha}>
          <Ionicons name="help" size={24} color="#333" />
          <Text style={styles.item}>Perguntas respondidas: {dados.respondidas}</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="checkmark" size={24} color="#16C60C" />
          <Text style={styles.item}>Acertos: {dados.acertos}</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="close" size={24} color="#B42B11" />
          <Text style={styles.item}>Erros: {dados.erros}</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="cellular" size={24} color="#0078D7" />
          <Text style={styles.item}>Taxa de acertos: {porcentagem}%</Text>
        </View>
      </Card>
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

  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
  },

  linha: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  item: {
    color: '#333',
    fontSize: 18,
    marginBottom: 10,
  },
});
