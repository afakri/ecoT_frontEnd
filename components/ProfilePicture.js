import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";
import effects from "../config/effects";

function ProfilePicture({ image, size }) {
  return (
    <View style={effects.shadow}>
      <Image source={image} style={[styles.image, size]} />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    borderRadius: 45,
    borderColor: colors.primary,
    borderWidth: 2,
  },
});
export default ProfilePicture;
