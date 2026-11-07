import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Container from '../components/Container';
import Card from '../components/Card';
import AppText from '../components/AppText';

import { colors } from '../theme';

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
    stats.totalQuestions > 0
      ? ((stats.correctAnswersCount / stats.totalQuestions) * 100).toFixed(1)
      : 0;

  return (
    <Container>
      <AppText variant="title">Suas Estatísticas</AppText>

      <Card>
        <View style={styles.line}>
          <Ionicons name="help" size={24} color={colors.black} />
          <AppText style={styles.item}>Perguntas respondidas: {stats.totalQuestions}</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="checkmark" size={24} color={colors.success} />
          <AppText style={styles.item}>Acertos: {stats.correctAnswersCount}</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="close" size={24} color={colors.error} />
          <AppText style={styles.item}>Erros: {stats.wrongAnswersCount}</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="cellular" size={24} color={colors.neutral} />
          <AppText style={styles.item}>Taxa de acertos: {accuracyPercentage}%</AppText>
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
    marginBottom: 10,
  },
});
