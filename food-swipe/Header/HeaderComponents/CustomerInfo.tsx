import { StyleSheet, Text, View, Image } from "react-native";

export default function CustomerInfo() {
  return (
    <View style={styles.customerInfo}>
      <View style={styles.customerName}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Tuong Nguyen</Text>
        <Text style={{ color: "grey" }}>What do you want to eat today?</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/avatar.png")}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customerInfo: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#FF0063",
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: "75%",
    height: "75%",
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#FF0063",
  },
  avatarContainer: {
    backgroundColor: "white",
    height: "100%",
    width: 70,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  customerName: {
    backgroundColor: "white",
    marginLeft: 10,
    height: "80%",
    justifyContent: "space-evenly",
  },
});
