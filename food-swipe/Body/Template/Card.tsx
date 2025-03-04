import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/food.jpeg")}
        style={styles.foodThumb}
      />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        style={styles.gradient}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.foodText, { fontSize: 30 }]}>Smørrebrød</Text>
        <Text style={[styles.foodText, { fontSize: 20 }]}>€13.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  foodThumb: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    padding: 10,
    //backgroundColor: "green",
    width: "100%",
    height: "15%",
    bottom: 10,
  },
  foodText: {
    color: "#fff",
    fontWeight: "bold",
  },
  gradient: {
    height: "50%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
