import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { postData } from "../../data";

const Post = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const postId = params.id;
  // Бүх постын жагсаалтаас харуулах датагаа хайж олно
  const data = postData.find((post) => post.id == postId);

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <Image
        source={{ uri: data.img }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      {/* Post tailbar */}
      <View style={styles.descContainer}>
        <Text style={styles.userId}>{data.userId}</Text>
        <Text style={styles.desc}> {data.desc}</Text>
      </View>
    </SafeAreaView>
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
});
