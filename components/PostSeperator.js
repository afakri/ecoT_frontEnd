import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function PostSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.light,
    height: 10,
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
});
export default PostSeperator;
