import React from "react";

import Achievement from "./Achievement";
import { StyleSheet, FlatList } from "react-native";

const Data = [
  {
    id: 1,
    heading: "you’re almost there!",
    body: "Two more activities to unlock a reward.",
    icon1: require("../assets/notifs/medal.png"),
    icon2: require("../assets/notifs/loading-bar.gif"),
    type: "notification",
  },
  {
    id: 2,
    heading: "you’re almost there!",
    body: "Two more activities to unlock a reward.",
    icon1: require("../assets/notifs/tree.png"),
    icon2: require("../assets/notifs/tree-planting.png"),
    type: "notification",
  },
  {
    id: 3,
    heading: "you’re almost there!",
    body: "Two more activities to unlock a reward.",
    icon1: require("../assets/notifs/medal.png"),
    icon2: require("../assets/notifs/loading-bar.gif"),
    type: "notification",
  },
];

function NotifList() {
  const renderItem = ({ item }) => (
    <Achievement
      heading={item.heading}
      body={item.body}
      icon1={item.icon1}
      icon2={item.icon2}
      onPress={() => console.log("test")}
    />
  );
  return (
    <FlatList
      renderItem={renderItem}
      data={Data}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
const styles = StyleSheet.create({
  list: {
    height: 150,
  },
});

export default NotifList;
