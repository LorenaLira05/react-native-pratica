import React from "react";
import {
  SafeAreaView,
  View,
 Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const carros = [
    {
      id: "1",
      nome: "BMW M4",
      descricao: "Esportivo moderno e potente.",
      imagem:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },

    {
      id: "2",
      nome: "Audi R8",
      descricao: "Design elegante e alta performance.",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },

    {
      id: "3",
      nome: "Porsche 911",
      descricao: "Luxo e velocidade em um só carro.",
      imagem:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed de Carros</Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.image}
            />

            <View style={styles.content}>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.descricao}>
                {item.descricao}
              </Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Curtir
                </Text>
              </TouchableOpacity>
            </View>
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
    padding: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 20,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
