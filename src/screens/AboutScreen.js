import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../components/Container';
import Card from '../components/Card';
import Title from '../components/Title';

export default function AboutScreen() {
  return (
    <Container>
      <Title>Sobre nós</Title>

      <Card>
        <View style={styles.line}>
          <Ionicons name="person-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Christian Mateus da Silveira Rodrigues</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="person-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Thauan Stanziola Souza Vieira</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="person-circle-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Professor - Marcos Celso Rodrigues</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="briefcase-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Projeto de Extensão III</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="hardware-chip-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Técnico em Informática - 6º período</Text>
        </View>

        <View style={styles.line}>
          <Ionicons name="school-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>IFSULDEMINAS - Campus Poços de Caldas</Text>
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
    color: '#333',
    fontSize: 18,
    marginLeft: 5,
  },
});
