import { useNavigation } from '@react-navigation/native';
import { Text, Image, StyleSheet } from 'react-native';

import Container from '../components/Container';
import Botao from '../components/Botao';
import brasao from '../../assets/brasao-pocos.png';

export default function InicioScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={brasao} resizeMode="contain" style={styles.logo} />
      <Text style={styles.titulo}>Poços Quiz</Text>

      <Botao tipo={'primario'} acao={() => navigation.navigate('Quiz')}>
        Iniciar Quiz
      </Botao>
      <Botao tipo={'secundario'} acao={() => navigation.navigate('Estatisticas')}>
        Estatísticas
      </Botao>
      <Botao tipo={'secundario'} acao={() => navigation.navigate('Sobre')}>
        Sobre
      </Botao>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 1,
    height: 200,
    marginBottom: 25,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 30,
  },
});
