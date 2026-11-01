import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre nós</Text>

      <Card>
        <View style={styles.linha}>
          <Ionicons name="person-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>
            Christian Mateus da Silveira Rodrigues
          </Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="person-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Thauan Stanziola Souza Vieira</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="person-circle-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Professor - Marcos Celso Rodrigues</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="briefcase-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Projeto de Extensão III</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="hardware-chip-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>Técnico em Informática - 6º período</Text>
        </View>

        <View style={styles.linha}>
          <Ionicons name="school-outline" size={24} color="#4CAF50" />
          <Text style={styles.item}>IFSULDEMINAS - Campus Poços de Caldas</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAF9",
    padding: 20,
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },

  linha: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },

  item: {
    color: "#333",
    fontSize: 18,
    marginLeft: 5,
  },
});
