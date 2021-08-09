import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import Screen from "./Screen";
import ProfilePicture from "./ProfilePicture";
import effects from "../config/effects";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Post() {
  return (
    <Screen>
      <View style={[styles.container, effects.shadow]}>
        <View style={styles.header}>
          <ProfilePicture
            size={{ height: 70, width: 70 }}
            image={require("../assets/profile.jpg")}
          />
          <View style={styles.textHeader}>
            <Text style={styles.name}>Ayman Fakri</Text>
            <Text>2min ago</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
          />
        </View>

        <View style={styles.body}>
          <Text style={styles.textBody}>
            Took my kids to plant trees. Save The Trees Man!!!
          </Text>
          <Image
            source={require("../assets/planting-trees.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.footer}>
          <Entypo name="heart" size={40} color="black" />
          <FontAwesome name="commenting" size={40} color="black" />
          <Entypo name="share" size={40} color="black" />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 700,
    width: "95%",
    borderRadius: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  textHeader: {
    flex: 1,
    paddingLeft: 20,
  },
  name: {
    fontSize: 20,
  },
  body: {
    flex: 1,
    alignItems: "center",
    padding: 4,
  },
  textBody: {
    fontSize: 17,
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 40,
    paddingRight: 40,
  },
});
export default Post;
