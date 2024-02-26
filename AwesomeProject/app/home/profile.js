import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import About from "../../src/components/profile/About";
import Post from "../../src/components/profile/PostImage";
import Posts from "../../src/components/profile/Posts";
import { about, postData } from "../../data";
import { getAuth } from "firebase/auth";
import { getUserData } from "../../src/service/users";
const Profile = () => {
  // Nevtersen hereglegchin medeelel
  const currentUser = getAuth().currentUser;

  const myPost = postData.filter((post) => post.userId === about.userId);

  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await getUserData(currentUser.email);
    console.log("USER", user);
    if (user) setUser(user);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={user.img}
        name={user.name}
        bio1={user.bio1}
        bio2={user.bio2}
        followers={user.followers}
        following={user.following}
        postNum={myPost.length}
      />
      {/* Үндсэн пост хэсэг */}
      <Posts data={myPost} />
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
