import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import AppText from '../components/AppText';

import initialQuestions from '../data/questions.json';

function fisherYates(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function QuizScreen() {
  const navigation = useNavigation();

  const [shuffledQuestions] = useState(() =>
    fisherYates(initialQuestions).map((question) => ({
      ...question,
      options: fisherYates(question.options),
    })),
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  const [isExplanationVisible, setExplanationVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const saveStats = async (isCorrect) => {
    try {
      const savedStats = await AsyncStorage.getItem('stats');
      const stats = savedStats
        ? JSON.parse(savedStats)
        : { totalQuestions: 0, correctAnswersCount: 0, wrongAnswersCount: 0 };

      stats.totalQuestions += 1;
      if (isCorrect) stats.correctAnswersCount += 1;
      else stats.wrongAnswersCount += 1;

      await AsyncStorage.setItem('stats', JSON.stringify(stats));
    } catch (e) {
      console.log('Erro ao salvar estatísticas:', e);
    }
  };

  const checkAnswer = (option) => {
    const isCorrect = shuffledQuestions[currentQuestionIndex].answer === option;

    setIsAnswerCorrect(isCorrect);
    setExplanationVisible(true);

    const newCorrectAnswers = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;
    const newWrongAnswers = !isCorrect ? wrongAnswersCount + 1 : wrongAnswersCount;

    setCorrectAnswersCount(newCorrectAnswers);
    setWrongAnswersCount(newWrongAnswers);

    saveStats(isCorrect);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Resultado', {
        totalQuestions: shuffledQuestions.length,
        correctAnswersCount,
        wrongAnswersCount,
      });

      setCorrectAnswersCount(0);
      setWrongAnswersCount(0);
      setCurrentQuestionIndex(0);
    }
  };

  if (shuffledQuestions.length === 0) return null;

  return (
    <Container>
      <AppText style={styles.question}>{shuffledQuestions[currentQuestionIndex].question}</AppText>

      {isExplanationVisible ? (
        <Card style={{ alignItems: 'center' }}>
          {isAnswerCorrect ? (
            <AppText style={styles.explanationTitle}>✅ Você acertou!</AppText>
          ) : (
            <>
              <AppText style={styles.explanationTitle}>❌ Você errou!</AppText>
              <AppText style={styles.correctAnswer}>Resposta Correta:</AppText>
              <AppText style={{ fontWeight: '600' }}>
                {shuffledQuestions[currentQuestionIndex].answer}
              </AppText>
            </>
          )}

          <AppText>{shuffledQuestions[currentQuestionIndex].explanation}</AppText>

          <Button
            variant={'primary'}
            onPress={() => {
              setExplanationVisible(false);
              goToNextQuestion();
            }}
          >
            Próxima
          </Button>
        </Card>
      ) : (
        <>
          {shuffledQuestions[currentQuestionIndex].options.map((option) => (
            <Button key={option} variant={'secondary'} onPress={() => checkAnswer(option)}>
              {option}
            </Button>
          ))}
        </>
      )}

      <AppText variant="caption">
        Pergunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
      </AppText>
    </Container>
  );
}

const styles = StyleSheet.create({
  question: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 25,
  },

  explanationTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },

  correctAnswer: {
    fontWeight: '600',
    padding: 2,
    borderRadius: 5,
    color: '#137333',
    backgroundColor: '#D1E7DD',
  },
});
