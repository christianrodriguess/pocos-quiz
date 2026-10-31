import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { cores } from "../theme";

const variantes = {
  primario: { fundo: cores.verde, texto: cores.branco },
  secundario: { fundo: cores.cinza, texto: cores.preto },
};

export default function Botao({ tipo = "primario", texto, acao }) {
  const { fundo, texto: corTexto } = variantes[tipo];

  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: fundo }]}
      onPress={acao}
    >
      <Text style={[styles.texto, { color: corTexto }]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: "center",
    width: "85%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  texto: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
});
