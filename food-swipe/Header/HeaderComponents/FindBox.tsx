import { TextInput, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
export default function FindBox() {
  return (
    <View style={styles.FindBox}>
      <View style={styles.searchBox}>
        <Entypo name="magnifying-glass" size={40} style={styles.glassIcon} />
        <TextInput style={styles.searchBar} placeholder="Search for Food" />
      </View>
      {/* <View style={styles.iconContainer}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  FindBox: {
    width: "100%",
    height: 80,
    //backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    // height: 60,
    // borderBottomWidth: 70,
    // borderLeftWidth: 46,
    // borderLeftColor: "transparent",
    // borderRightColor: "transparent",
    // backgroundColor: "#FF0063",
    // marginRight: 10,

    width: 70,
    height: 0,
    borderBottomWidth: 50,
    borderBottomColor: "red",
    borderLeftWidth: 25,
    //borderLeftColor: "transparent",
    borderRightWidth: 0,
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginRight: 10,
    borderRadius: 12,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "purple",
    backgroundColor: "rgb(231,231,231)",
    width: "85%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: 10,
  },
  searchBar: {
    width: "95%",
    height: 60,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "rgb(231,231,231)",
    padding: 5,
    fontSize: 15,
  },
  glassIcon: {
    color: "rgb(163,163,163)",
    backgroundColor: "rgb(231,231,231)",
    //backgroundColor: "red",
    marginLeft: 5,
  },
});
