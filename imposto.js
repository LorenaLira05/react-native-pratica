import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Slider from "@react-native-community/slider";

export default function App() {
  const [salario, setSalario] = useState(5000);

  const imposto = salario * 0.15;

  const salarioLiquido = salario - imposto;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Simulador de Salário
        </Text>

        <Text style={styles.label}>
          Salário Atual
        </Text>

        <Text style={styles.salary}>
          R$ {Math.round(salario)}
        </Text>

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={1000}
          maximumValue={20000}
          step={100}
          value={salario}
          onValueChange={(valor) => setSalario(valor)}
        />

        <View style={styles.infoBox}>
          <Text style={styles.info}>
            Imposto: R$ {imposto.toFixed(2)}
          </Text>

          <Text style={styles.info}>
            Salário Líquido: R$ {salarioLiquido.toFixed(2)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  salary: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F46E5",
    marginBottom: 20,
  },

  infoBox: {
    marginTop: 25,
    gap: 10,
  },

  info: {
    fontSize: 20,
    textAlign: "center",
  },
});
