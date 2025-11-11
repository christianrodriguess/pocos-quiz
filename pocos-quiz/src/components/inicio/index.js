import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import brasao from '../../image/brasao.png';

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={brasao} resizeMode="contain" style={styles.logo}/>
      <Text style={styles.titulo}> Poços Quiz </Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.botaoTexto}> Iniciar Quiz </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => navigation.navigate('Estatísticas')}
      >
        <Text style={[styles.botaoTexto, { color: '#000' }]}> Estatísticas </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={[styles.botaoTexto, { color: '#000' }]}> Sobre </Text>
      </TouchableOpacity>
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

  botao: {
    alignItems: 'center',
    width: '85%',
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
  },

  botaoSecundario: {
    backgroundColor: '#E0E0E0',
  },
  
  botaoTexto: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 18,
  },
});