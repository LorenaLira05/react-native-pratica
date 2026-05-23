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
  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer",
      preco: "R$ 5.999",
      descricao: "Notebook potente para jogos e trabalho.",
      imagem:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },

    {
      id: 2,
      nome: "Smartphone",
      preco: "R$ 2.499",
      descricao: "Celular moderno com ótima câmera.",
      imagem:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      id: 3,
      nome: "Fone Bluetooth",
      preco: "R$ 399",
      descricao: "Som de alta qualidade sem fio.",
      imagem:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 4,
      nome: "Mouse Gamer",
      preco: "R$ 250",
      descricao: "Alta precisão para games.",
      imagem:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },

    {
      id: 5,
      nome: "Teclado Mecânico",
      preco: "R$ 450",
      descricao: "Conforto e velocidade na digitação.",
      imagem:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    },

    {
      id: 6,
      nome: "Monitor",
      preco: "R$ 1.299",
      descricao: "Tela Full HD de 27 polegadas.",
      imagem:
        "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    },

    {
      id: 7,
      nome: "Smartwatch",
      preco: "R$ 899",
      descricao: "Monitore sua saúde e atividades.",
      imagem:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 8,
      nome: "Tablet",
      preco: "R$ 1.799",
      descricao: "Ideal para estudos e entretenimento.",
      imagem:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    },

    {
      id: 9,
      nome: "Câmera",
      preco: "R$ 3.999",
      descricao: "Fotos profissionais em alta resolução.",
      imagem:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },

    {
      id: 10,
      nome: "Caixa de Som",
      preco: "R$ 599",
      descricao: "Áudio potente e portátil.",
      imagem:
        "https://horizonplay.fbitsstatic.net/img/p/caixa-de-som-bluetooth-jbl-boombox-3-original-cor-preto-150748/337342.jpg?w=670&h=670&v=no-value",
    },

    {
      id: 11,
      nome: "Controle Gamer",
      preco: "R$ 299",
      descricao: "Experiência mais confortável nos jogos.",
      imagem:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },

    {
      id: 12,
      nome: "Drone",
      preco: "R$ 4.200",
      descricao: "Imagens aéreas incríveis.",
      imagem:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    },

    {
      id: 13,
      nome: "HD Externo",
      preco: "R$ 350",
      descricao: "Armazene seus arquivos com segurança.",
      imagem:
        "https://images.unsplash.com/photo-1531492746076-161ca9bcad58",
    },

    {
      id: 14,
      nome: "Impressora",
      preco: "R$ 799",
      descricao: "Impressão rápida e eficiente.",
      imagem:
        "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/i/m/impressora-hp-multifuncional-deskjet-ink-advantage-2874_968648.webp",
    },

    {
      id: 15,
      nome: "Webcam",
      preco: "R$ 280",
      descricao: "Qualidade HD para chamadas de vídeo.",
      imagem:
        "https://lojaibyte.vteximg.com.br/arquivos/ids/192149-540-540/webcam-logitech-c922-usb-pro-stream-full-hd-1080p-preto-960-001087-5.png?v=637286855069430000",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Catálogo de Produtos
        </Text>

        {produtos.map((produto) => (
          <View key={produto.id} style={styles.card}>
            <Image
              source={{ uri: produto.imagem }}
              style={styles.image}
            />

            <Text style={styles.nome}>
              {produto.nome}
            </Text>

            <Text style={styles.descricao}>
              {produto.descricao}
            </Text>

            <Text style={styles.preco}>
              {produto.preco}
            </Text>
          </View>
        ))}
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
    textAlign: "center",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,

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
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  descricao: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },

  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F46E5",
  },
});
