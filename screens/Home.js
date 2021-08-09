import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import HomeHeader from "../components/HomeHeader";
import NotifList from "../components/NotifList";
import Post from "../components/Post";

function Home() {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <HomeHeader name="Ayman" image={require("../assets/profile.jpg")} />
        <NotifList />
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
export default Home;
