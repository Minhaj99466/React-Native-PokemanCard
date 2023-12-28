import { View, Text, Image, StyleSheet } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", emoji: "🌿" };
    default:
      return { borderColor: "#a0a0a0", emoji: "❓" };
  }
};

export default function Card({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.headPos}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.img}
        source={image}
        accessibilityLabel={`${name} pokeman`}
        resizeMode="contain"
      ></Image>
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.moves}>
        <Text style={styles.movesText}>Moves:{moves.join(", ")}</Text>
      </View>
      <View style={styles.weakness}>
        <Text style={styles.weaknessText}>
          Weakness:{weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "black",
    borderWidth: 2,
    padding: 16,
    margin: 16,
    borderRadius: 19,
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  name: {
    fontSize: 30,
    fontFamily: "Cochin",
    fontWeight: "700",
  },
  hp: {
    fontSize: 22,

    fontWeight: "700",
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  headPos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
  },
  emoji: {
    fontSize: 30,
    marginRight: 1,
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  moves: {
    marginBottom: 15,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weakness: {
    marginBottom: 15,
  },
  weaknessText: {
    fontSize: 22,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});
