import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import AppText from '../components/AppText';

import CoatOfArms from '../../assets/coat-of-arms-pocos-de-caldas.png';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={CoatOfArms} resizeMode="contain" style={styles.logo} />
      <AppText variant="title">Poços Quiz</AppText>

      <Button variant={'primary'} onPress={() => navigation.navigate('Quiz')}>
        Iniciar Quiz
      </Button>
      <Button variant={'secondary'} onPress={() => navigation.navigate('Stats')}>
        Estatísticas
      </Button>
      <Button variant={'secondary'} onPress={() => navigation.navigate('About')}>
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
