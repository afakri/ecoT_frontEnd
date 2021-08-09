import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import effects from "../config/effects";

function Achievement({ heading, body, icon1, icon2, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light}
      style={styles.touch}
    >
      <View style={[styles.container, effects.shadow]}>
        <View style={styles.row}>
          <Image source={icon1} style={styles.icon} />
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.body}>{body}</Text>
        </View>
        <View style={styles.row}>
          <Image source={icon2} style={styles.icon2} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 15,
    height: 161,
    marginTop: 5,
    marginLeft: 6,
    marginRight: 6,
    width: 166,
    borderRadius: 30,
  },
  touch: {
    borderRadius: 30,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 12,
  },
  icon: {
    height: 38.72,
    width: 38.72,
  },
  body: {
    textAlign: "center",
    zIndex: 3,
  },
  icon2: {
    height: 45,
    width: 45,
  },
});

export default Achievement;
