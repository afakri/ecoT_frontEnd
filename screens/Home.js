import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import HomeHeader from "../components/HomeHeader";
import NotifList from "../components/NotifList";
import Post from "../components/Post";
import PostList from "../components/PostList";
import PostSeperator from "../components/PostSeperator";
import NavBar from "../components/NavBar";
function Home({ navigation }) {
  return (
    <Screen>
      <PostList />
      <NavBar navigation={navigation} />
    </Screen>
  );
}

export default Home;
