import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { about, postData } from "../../data";
import {
  AntDesign,
  FontAwesome5,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
const pro = require("../../src/assets/img/prooo.jpg");
const Post = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  const postId = params.id;

  const data = postData.find((post) => post.id == postId);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);
  const likedBy = data.likedBy?.slice(0, 3) || [];

  const firstLike = likedBy.length > 0 ? likedBy[0].userId : "";
  const firstComment = data.comments?.length > 0 ? data.comments[0] : {};
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <View style={styles.postheader}>
          <Image source={pro} style={styles.pro} />
          <Text style={styles.headername}>maryisdaydreaming</Text>
        </View>
        <Image
          source={{ uri: data.img }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <View style={[styles.row, styles.gap13]}>
              <TouchableOpacity>
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="comment" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="save-alt" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.row, styles.gap13]}>
            <View style={styles.row}>
              {likedBy.map((user) => (
                <Image source={{ uri: user.img }} style={styles.proImg} />
              ))}
            </View>
            {firstLike && (
              <Text style={styles.likedByText}>
                Liked by <Text style={styles.boldText}>{firstLike}</Text>
                {""}
                and <Text style={styles.boldText}>others</Text>
              </Text>
            )}
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.userId}>{data.userId}</Text>
            <Text style={styles.desc}> {data.desc}</Text>
          </View>
          {/* Comm */}
          <Link
            href={{
              pathname: "/comment",
              params: { postId: postId },
            }}
            asChild
          >
            <TouchableOpacity>
              <Text style={styles.viewAll}>
                View all {data.comments.length} comments
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  descContainer: {
    flexDirection: "row",
  },
  pro: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
  },
  postheader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headername: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 12,
    gap: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  gap13: {
    gap: 13,
  },
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  descContainer: {
    flexDirection: "row",
  },
  proImg: {
    height: 29,
    width: 29,
    borderRadius: 29 / 2,
  },
  boldText: {
    fontWeight: "bold",
  },
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },

  likedByText: {
    fontSize: 15,
    fontWeight: "400",
  },
});
