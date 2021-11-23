import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import ProfilePicture from "./ProfilePicture";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import effects from "../config/effects";
import colors from "../config/colors";
function NavBar({ navigation }) {
  return (
    <View style={[styles.container, effects.shadow, styles.navbar]}>
      <FontAwesome5 name="toolbox" size={50} color="black" />

      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <AntDesign name="home" size={50} color="black" />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        <ProfilePicture
          image={require("../assets/profile.jpg")}
          size={{ height: 50, width: 50 }}
        />
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    paddingBottom: 34,
  },
  navbar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
export default NavBar;
