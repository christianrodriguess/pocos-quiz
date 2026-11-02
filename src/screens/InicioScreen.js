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

      <Botao tipo={'primario'} texto={'Iniciar Quiz'} acao={() => navigation.navigate('Quiz')} />
      <Botao
        tipo={'secundario'}
        texto={'Estatísticas'}
        acao={() => navigation.navigate('Estatisticas')}
      />
      <Botao tipo={'secundario'} texto={'Sobre'} acao={() => navigation.navigate('Sobre')} />
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
