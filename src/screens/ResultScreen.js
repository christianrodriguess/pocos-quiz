import { useNavigation, useRoute } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import AppText from '../components/AppText';

import { colors } from '../theme';

export default function ResultScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { totalQuestions, correctAnswersCount, wrongAnswersCount } = route.params;
  const accuracyPercentage =
    totalQuestions > 0 ? ((correctAnswersCount / totalQuestions) * 100).toFixed(1) : 0;

  return (
    <Container>
      <AppText variant="title">Quiz Finalizado!</AppText>

      <Card>
        <View style={styles.line}>
          <Ionicons name="checkmark" size={24} color={colors.success} />
          <AppText style={styles.item}>Acertos: {correctAnswersCount}</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="close" size={24} color={colors.error} />
          <AppText style={styles.item}>Erros: {wrongAnswersCount}</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="cellular" size={24} color={colors.neutral} />
          <AppText style={styles.item}>Taxa de acertos: {accuracyPercentage}%</AppText>
        </View>
      </Card>

      <Button variant={'primary'} onPress={() => navigation.navigate('Quiz')}>
        Jogar novamente
      </Button>

      <Button variant={'secondary'} onPress={() => navigation.navigate('Inicio')}>
        Voltar ao início
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  line: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },

  item: {
    fontSize: 20,
  },
});
