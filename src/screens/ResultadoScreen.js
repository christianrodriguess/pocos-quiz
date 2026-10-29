import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ResultadoScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { acertos, erros, total } = route.params;
  const porcentagem = ((acertos / total) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Quiz Finalizado! </Text>

      <View style={styles.caixa}>
        <View style={styles.linha}>
          <Ionicons name="checkmark" size={24} color="#16C60C" />
          <Text style={styles.item}> Acertos: {acertos} </Text>
        </View>

        <View style={styles.linha}>
         <Ionicons name="close" size={24} color="#B42B11" />
         <Text style={styles.item}> Erros: {erros} </Text>
        </View>

        <View style={styles.linha}>
         <Ionicons name="cellular" size={24} color="#0078D7" />
         <Text style={styles.item}> Taxa de acertos: {porcentagem}% </Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.botaoTexto}> Jogar Novamente </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoCinza]} 
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={[styles.botaoTexto, { color: '#000' }]}> Voltar ao início </Text>
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

  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
  },

  caixa: {
    width: '90%',
    backgroundColor: '#fff',
    borderColor: '#E4E4E4',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 30,
  },

  linha: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },

  item: {
    fontSize: 20,
  },

  botao: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  botaoCinza: {
    backgroundColor: '#ddd',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 18,
  },
});