import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../components/Container';
import Card from '../components/Card';
import AppText from '../components/AppText';

import { colors } from '../theme';

export default function AboutScreen() {
  return (
    <Container>
      <AppText variant="title">Sobre nós</AppText>

      <Card>
        <View style={styles.line}>
          <Ionicons name="person-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>Christian Mateus da Silveira Rodrigues</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="person-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>Thauan Stanziola Souza Vieira</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="person-circle-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>Professor - Marcos Celso Rodrigues</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="briefcase-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>Projeto de Extensão III</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="hardware-chip-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>Técnico em Informática - 6º período</AppText>
        </View>

        <View style={styles.line}>
          <Ionicons name="school-outline" size={24} color={colors.icon} />
          <AppText style={styles.item}>IFSULDEMINAS - Campus Poços de Caldas</AppText>
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
    marginLeft: 5,
  },
});
