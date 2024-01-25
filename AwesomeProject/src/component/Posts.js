import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Post from "./post";
const Posts = ({ data }) => {
  const [selectedTab, setSetselectedTab] = useState(0);
  const onPageChange = (data) => {
    const pageNumber = data.nativeEvent.position;
    console.log(pageNumber);
    setSetselectedTab(pageNumber);
  };
  return (
    <View style={styles.container}>
      {/* Tab buttons */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, selectedTab === 0 && styles.active]}
        >
          <Ionicons name="apps-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, selectedTab === 1 && styles.active]}
        >
          <FontAwesome5 name="user-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Tab content */}
      <PagerView
        onPageSelected={onPageChange}
        style={styles.pagerView}
        initialPage={0}
      >
        {/* Zuragtai huudas */}
        <View key="1" style={styles.postContainer}>
          {data.map((post) => (
            <Link href={"/post/" + post.id} asChild>
              <TouchableOpacity style={styles.imgBtn}>
                <Image source={{ uri: post.img }} style={styles.image} />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  imgBtn: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  postContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 3,
    flexWrap: "wrap",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 14,
  },
  active: {
    borderBottomWidth: 2,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: { backgroundColor: "black" },
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
});
