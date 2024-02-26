import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { about, postData, users } from "../../data";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import PostDetail from "../../src/components/profile/PostDetail";
import About from "../../src/components/profile/About";
import Posts from "../../src/components/profile/Posts";

const Profile = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const profileId = params.id;

  const profileData = users.find((user) => user.userId == profileId);

  const myPosts = postData.filter((post) => post.userId === profileId);
  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: profileId,
    });
  }, [navigation]);

  return profileData ? (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={profileData.img}
        name={profileData.name}
        bio1={profileData.bio1}
        bio2={profileData.bio2}
        followers={profileData.followers}
        following={profileData.following}
        postNum={myPosts.length}
      />
      {/* Үндсэн пост хэсэг */}
      <Posts data={myPosts} />
    </ScrollView>
  ) : (
    <View style={styles.notfound}>
      <Text style={styles.notfoundText}> Хэрэглэгч олдсонгүй</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  notfound: { flex: 1, justifyContent: "center", alignItems: "center" },
  notfoundText: {
    textAlign: "center",
    fontSize: 24,
  },
});
