import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StoryItem from "./story/StoryItem";

const DmItem = ({ data }) => {
  // id: 1,
  // userId: "sunflower_power77",
  // img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
  // lastMsg: "Nice",
  // messageHistory: [{ text: "Nice", date: "19d" }],
  // seen: false,

  return (
    <TouchableOpacity style={styles.container}>
      {/* <Image source={{ uri: data.img }} /> */}
      <StoryItem data={{ img: data.img }} />
      <View style={{}}>
        <Text style={styles.userId}>{data.userId}</Text>
        <View style={styles.row}>
          <Text style={styles.text}>{data.lastMsg.text}</Text>
          <Text style={styles.date}>{data.lastMsg.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DmItem;

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    color: "gray",
  },
  text: {
    fontSize: 23,
  },
  userId: {
    fontSize: 23,
    fontWeight: 500,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
