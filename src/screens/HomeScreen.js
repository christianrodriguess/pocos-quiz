import { useNavigation } from '@react-navigation/native';
import { Text, Image, StyleSheet } from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import CoatOfArms from '../../assets/coat-of-arms-pocos-de-caldas.png';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={CoatOfArms} resizeMode="contain" style={styles.logo} />
      <Text style={styles.title}>Poços Quiz</Text>

      <Button variant={'primary'} onPress={() => navigation.navigate('Quiz')}>
        Iniciar Quiz
      </Button>
      <Button variant={'secondary'} onPress={() => navigation.navigate('Estatisticas')}>
        Estatísticas
      </Button>
      <Button variant={'secondary'} onPress={() => navigation.navigate('Sobre')}>
        Sobre
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 1,
    height: 200,
    marginBottom: 25,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 30,
  },
});
