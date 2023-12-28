import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Welcome from "./Components/WelcomeComponent";
import Box from "./Components/Box";
import Card from "./Components/Card/Card";

export default function App() {
  // const [count, setCount] = useState(0);
  // const [modalVisible, setModalVisible] = useState(false);

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.centerbox}>
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <ScrollView>
        <Card {...pikachuData} />
        <Card {...squirtleData} />
        <Card {...charmanderData} />
        <Card {...bulbasaurData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerbox: {
    flex: 1,
    paddingTop: 30,
  },
});
