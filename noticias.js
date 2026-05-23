import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Tecnologia transforma o mercado de trabalho
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.text}>
            A tecnologia vem mudando profundamente a forma como as pessoas
            trabalham, estudam e se conectam ao redor do mundo.

            Nos últimos anos, áreas como desenvolvimento web, inteligência
            artificial, ciência de dados e segurança digital cresceram de forma
            acelerada, criando novas oportunidades profissionais.

            Empresas buscam cada vez mais profissionais capacitados para atuar
            com soluções digitais, automações e desenvolvimento de sistemas.

            Além disso, o trabalho remoto se tornou uma realidade para milhões
            de pessoas, permitindo mais flexibilidade e novas formas de
            colaboração entre equipes.

            A tendência é que o setor continue crescendo nos próximos anos,
            tornando a tecnologia uma das áreas mais promissoras do mercado.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    color: "#222",
  },

  image: {
    width: "100%",
    height: 250,
  },

  content: {
    padding: 20,
  },

  text: {
    fontSize: 18,
    lineHeight: 30,
    color: "#444",
    textAlign: "justify",
  },
});
