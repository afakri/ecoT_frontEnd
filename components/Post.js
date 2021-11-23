import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import Screen from "./Screen";
import ProfilePicture from "./ProfilePicture";
import effects from "../config/effects";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function Post() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfilePicture
            size={{ height: 50, width: 50 }}
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
        <View>
          <View style={styles.sepContainer}>
            <View style={styles.seperator} />
          </View>
          <View style={styles.icons}>
            <Entypo name="heart" size={35} color="black" />
            <FontAwesome name="commenting" size={35} color="black" />
            <Entypo name="share" size={35} color="black" />
          </View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 700,
    width: "100%",
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
    height: "90%",
    width: "100%",
  },
  seperator: {
    height: 1,
    width: "90%",
    backgroundColor: colors.light,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 40,
    paddingRight: 40,
  },
  sepContainer: {
    alignItems: "center",
  },
});
export default Post;
