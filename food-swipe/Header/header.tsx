import { StyleSheet, Text, View, Image } from "react-native";
import CustomerInfo from "./HeaderComponents/CustomerInfo";
import FindBox from "./HeaderComponents/FindBox";
export default function Header() {
  return (
    <View style={styles.header}>
      <CustomerInfo />
      <FindBox />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "20%",
    width: "100%",
    //backgroundColor: "purple",
  },
});
