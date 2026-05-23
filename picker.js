import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [curso, setCurso] = useState("ADS");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha seu curso</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={curso}
          onValueChange={(itemValue) => setCurso(itemValue)}
        >
          <Picker.Item label="ADS" value="ADS" />
          <Picker.Item label="Engenharia" value="Engenharia" />
          <Picker.Item label="Sistemas" value="Sistemas" />
          <Picker.Item
            label="Ciência da Computação"
            value="Ciência da Computação"
          />
        </Picker>
      </View>

      <Text style={styles.result}>
        Curso selecionado: {curso}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F4F6F8",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 30,
    overflow: "hidden",
  },

  result: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
