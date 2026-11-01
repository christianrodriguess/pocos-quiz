import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Botao from '../components/Botao';
import Card from '../components/Card';

import questoesOriginais from '../data/questoes.json';

export default function QuizScreen() {
  const navigation = useNavigation();

  const [questoes] = useState(() => {
    return questoesOriginais
      .map((q) => ({
        ...q,
        opcoes: [...q.opcoes].sort(() => Math.random() - 0.5),
      }))
      .sort(() => Math.random() - 0.5);
  });
  const [questaoAtual, setQuestaoAtual] = useState(0);

  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [respostaCorreta, setRespostaCorreta] = useState(null);

  const salvarEstatistica = async (acertou) => {
    try {
      const salvo = await AsyncStorage.getItem('estatisticas');
      const dados = salvo ? JSON.parse(salvo) : { respondidas: 0, acertos: 0, erros: 0 };

      dados.respondidas += 1;
      if (acertou) dados.acertos += 1;
      else dados.erros += 1;

      await AsyncStorage.setItem('estatisticas', JSON.stringify(dados));
    } catch (e) {
      console.log('Erro ao salvar estatísticas:', e);
    }
  };

  const verificarResposta = (opcao) => {
    const correta = questoes[questaoAtual].resposta === opcao;

    setRespostaCorreta(correta);
    setMostrarExplicacao(true);

    const novosAcertos = correta ? acertos + 1 : acertos;
    const novosErros = !correta ? erros + 1 : erros;

    setAcertos(novosAcertos);
    setErros(novosErros);

    salvarEstatistica(correta);
  };

  const trocarQuestao = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      navigation.navigate('Resultado', {
        acertos,
        erros,
        total: questoes.length,
      });

      setAcertos(0);
      setErros(0);
      setQuestaoAtual(0);
    }
  };

  if (questoes.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.questao}>{questoes[questaoAtual].questao}</Text>

      {mostrarExplicacao ? (
        <Card style={{ alignItems: 'center' }}>
          <Text style={styles.tituloExplicacao}>
            {respostaCorreta ? '✅ Você acertou!' : '❌ Você errou!'}
          </Text>

          <Text style={styles.textoExplicacao}>{questoes[questaoAtual].explicacao}</Text>

          <Botao
            tipo={'primario'}
            texto={'Próxima'}
            acao={() => {
              setMostrarExplicacao(false);
              trocarQuestao();
            }}
          />
        </Card>
      ) : (
        <>
          {questoes[questaoAtual].opcoes.map((opcao, index) => (
            <Botao
              key={index}
              tipo={'secundario'}
              texto={opcao}
              acao={() => verificarResposta(opcao)}
            />
          ))}
        </>
      )}

      <Text style={styles.texto}>
        Pergunta {questaoAtual + 1} de {questoes.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAF9',
    flex: 1,
    padding: 20,
  },

  questao: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 25,
  },

  texto: {
    textAlign: 'center',
    color: '#666',
    marginTop: 30,
    fontSize: 14,
  },

  caixaExplicacao: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#E4E4E4',
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 20,
  },

  tituloExplicacao: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 10,
  },

  textoExplicacao: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
});
