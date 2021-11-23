import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import effects from "../config/effects";
import colors from "../config/colors";
import Badge from "./Badge";

function Stats() {
  return (
    <View style={[styles.container, effects.shadow2]}>
      <View style={[styles.score, effects.shadow2]}>
        <Text style={styles.scoreNum}>score 301</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>statistics</Text>
        <Text style={styles.headerSubTitle}>in the last 7 days</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Image source={require("../assets/stats/trash.png")} />
          <Text style={styles.amount}> 10kg of plastic</Text>
          <Badge color={{ backgroundColor: "tomato" }}>↑50%</Badge>
        </View>

        <View style={styles.row}>
          <Image source={require("../assets/stats/steeringWheel.png")} />
          <Text style={styles.amount}>20 KgCo2e</Text>
          <Badge color={{ backgroundColor: "lawngreen" }}>↓10%</Badge>
        </View>

        <View style={styles.row}>
          <Image source={require("../assets/stats/electricity.png")} />
          <Text style={styles.amount}> 70 KgCo2e</Text>
          <Badge color={{ backgroundColor: "lawngreen" }}>↓10%</Badge>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 350,
    borderRadius: 35,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "space-between",
  },
  score: {
    backgroundColor: "dodgerblue",
    height: 70,
    width: 70,
    borderRadius: 90 / 2,
    position: "absolute",
    right: 35,
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreNum: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 25,
  },
  headerSubTitle: {
    fontSize: 12,
    color: colors.dark,
    paddingLeft: 20,
  },
  body: {
    justifyContent: "space-between",

    height: "70%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 18,
  },
});

export default Stats;
