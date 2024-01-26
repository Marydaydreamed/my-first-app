import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import About from "../../src/profile/About";
import Post from "../../src/profile/Post";
import Posts from "../../src/profile/Posts";
import { postData } from "../../data";
const proImg = require("../../src/assets/img/download.jpg");
const Profile = () => {
  const about = {
    name: "Mary",
    bio1: "⋆ ˚｡⋆୨🎀୧⋆ ˚｡⋆",
    followers: 230,
    following: 190,
    postNum: 6,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={proImg}
        name={about.name}
        bio1={about.bio1}
        followers={about.followers}
        following={about.following}
        postNum={about.postNum}
      />
      {/* Үндсэн пост хэсэг */}
      <Posts data={postData} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
