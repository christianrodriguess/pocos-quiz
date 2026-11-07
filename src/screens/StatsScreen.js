import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Container from '../components/Container';
import Card from '../components/Card';
import Title from '../components/Title';

export default function StatsScreen() {
  const [stats, setStats] = useState({
    totalQuestions: 0,
    correctAnswersCount: 0,
    wrongAnswersCount: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const savedStats = await AsyncStorage.getItem('stats');
        if (savedStats) setStats(JSON.parse(savedStats));
      } catch (e) {
        console.log('Erro ao carregar estatísticas:', e);
      }
    };
    loadStats();
  }, []);

  const accuracyPercentage =
    stats.totalQuestions > 0 ? ((stats.correctAnswersCount / stats.totalQuestions) * 100).toFixed(1) : 0;

  return (
    <Container>
      <Title>Suas Estatísticas</Title>

      <Card>
        <View style={styles.line}>
          <Ionicons name="help" size={24} color="#333" />
          <Text style={styles.item}>Perguntas respondidas: {stats.totalQuestions}</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="checkmark" size={24} color="#16C60C" />
          <Text style={styles.item}>Acertos: {stats.correctAnswersCount}</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="close" size={24} color="#B42B11" />
          <Text style={styles.item}>Erros: {stats.wrongAnswersCount}</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="cellular" size={24} color="#0078D7" />
          <Text style={styles.item}>Taxa de acertos: {accuracyPercentage}%</Text>
        </View>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  line: {
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
