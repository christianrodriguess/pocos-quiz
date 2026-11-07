import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';

export default function ResultScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { totalQuestions, correctAnswersCount, wrongAnswersCount } = route.params;
  const accuracyPercentage =
    totalQuestions > 0 ? ((correctAnswersCount / totalQuestions) * 100).toFixed(1) : 0;

  return (
    <Container>
      <Title>Quiz Finalizado!</Title>

      <Card>
        <View style={styles.line}>
          <Ionicons name="checkmark" size={24} color="#16C60C" />
          <Text style={styles.item}>Acertos: {correctAnswersCount}</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="close" size={24} color="#B42B11" />
          <Text style={styles.item}>Erros: {wrongAnswersCount}</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="cellular" size={24} color="#0078D7" />
          <Text style={styles.item}>Taxa de acertos: {accuracyPercentage}%</Text>
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
