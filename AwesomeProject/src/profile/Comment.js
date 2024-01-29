import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Comment = ({ data }) => {
  return (
    <View style={[styles.row, styles.gap13]}>
      <Image source={{ uri: data.img }} style={styles.proImg} />
      <View>
        <Text style={styles.commentUser}>{data.userId}</Text>
        <Text style={styles.comment}>{data.comment}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  gap13: {
    gap: 13,
  },
  proImg: {
    height: 29,
    width: 29,
    borderRadius: 29 / 2,
  },
});
