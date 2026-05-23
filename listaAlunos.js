import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const alunos = [
    { id: "1", nome: "Lorena", curso: "ADS" },
    { id: "2", nome: "Carlos", curso: "Engenharia" },
    { id: "3", nome: "Marina", curso: "Sistemas" },
    { id: "4", nome: "Pedro", curso: "Ciência da Computação" },
    { id: "5", nome: "Ana", curso: "ADS" },
    { id: "6", nome: "João", curso: "Sistemas" },
    { id: "7", nome: "Beatriz", curso: "Engenharia" },
    { id: "8", nome: "Lucas", curso: "ADS" },
    { id: "9", nome: "Fernanda", curso: "Ciência da Computação" },
    { id: "10", nome: "Gabriel", curso: "Sistemas" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Alunos</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.curso}>
              Curso: {item.curso}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  curso: {
    fontSize: 16,
    color: "#666",
  },
});
