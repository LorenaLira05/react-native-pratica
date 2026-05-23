import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function App() {
  const celulares = {
    iPhone: {
      marca: "Apple",
      preco: "R$ 7.999",
    },

    Samsung: {
      marca: "Samsung",
      preco: "R$ 4.500",
    },

    Xiaomi: {
      marca: "Xiaomi",
      preco: "R$ 3.200",
    },
  };

  const [celular, setCelular] = useState("iPhone");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Loja de Celulares</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={celular}
          onValueChange={(itemValue) => setCelular(itemValue)}
        >
          <Picker.Item label="iPhone" value="iPhone" />
          <Picker.Item label="Samsung" value="Samsung" />
          <Picker.Item label="Xiaomi" value="Xiaomi" />
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>
          {celular}
        </Text>

        <Text style={styles.info}>
          Marca: {celulares[celular].marca}
        </Text>

        <Text style={styles.info}>
          Preço: {celulares[celular].preco}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 30,
    overflow: "hidden",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
});
