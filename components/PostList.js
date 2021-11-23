import React from "react";
import Post from "./Post";
import { FlatList, StyleSheet, View } from "react-native";
import PostSeperator from "./PostSeperator";
import HomeHeader from "./HomeHeader";

const Data = [
  {
    id: 1,
    text: "The kids planted some trees",
    profile: require("../assets/profile.jpg"),
    pic: require("../assets/planting-trees.jpg"),
    time: "2min",
  },
  {
    id: 2,
    text: "The kids planted some trees",
    profile: require("../assets/profile.jpg"),
    pic: require("../assets/planting-trees.jpg"),
    time: "2min",
  },
  {
    id: 3,
    text: "The kids planted some trees",
    profile: require("../assets/profile.jpg"),
    pic: require("../assets/planting-trees.jpg"),
    time: "2min",
  },
];

function PostList() {
  const renderItem = ({ item }) => <Post />;
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <HomeHeader name="Ayman" image={require("../assets/profile.jpg")} />
        </>
      }
      data={Data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <PostSeperator />}
      keyExtractor={(item) => item.id.toString()}
      style={{ marginBottom: 70 }}
    />
  );
}

export default PostList;
