import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Screen from "../components/Screen";
import ProfilePicture from "../components/ProfilePicture";
import NavBar from "../components/NavBar";
import colors from "../config/colors";
import Stats from "../components/Stats";

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.profile}>
        <ProfilePicture
          size={{ height: 90, width: 90 }}
          image={require("../assets/profile.jpg")}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}> Ayman Fakri</Text>
        <Text style={styles.country}> Morocco</Text>
      </View>
      <View style={styles.stats}>
        <Stats style={styles.stats} />
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light2,
    height: "100%",
  },
  background: {
    backgroundColor: "#c9a0dc",
    height: 150,
    width: "100%",
  },
  profile: {
    position: "absolute",
    top: 100,
    zIndex: 1,
  },
  info: {
    height: 120,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    fontSize: 25,
  },
  country: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 16,
  },
  stats: {
    marginTop: 40,
  },
});
export default Dashboard;
