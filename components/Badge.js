import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Badge({ children, color }) {
  return (
    <View style={[styles.container, color]}>
      <Text style={styles.text}> {children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "navy",
  },
});
export default Badge;
