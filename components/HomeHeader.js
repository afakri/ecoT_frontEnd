import React from "react";
import { StyleSheet } from "react-native";
import ProfilePicture from "./ProfilePicture";
import { View, Text } from "react-native";

function HomeHeader({ name, image }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello {name}!</Text>
      <ProfilePicture size={{ height: 90, width: 90 }} image={image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  welcome: {
    fontSize: 35,
  },
});
export default HomeHeader;
