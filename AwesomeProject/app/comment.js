import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { about, postData } from "../data";
import { useEffect } from "react";
import Comment from "../src/profile/Comment";
export default function Modal() {
  const navigation = useNavigation();

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();

  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const postId = params.postId;

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  // Постын датаг id -р хайж олно
  const data = postData.find((post) => post.id == postId);
  const comments = data.comments;
  return (
    <View style={{ flex: 1 }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Comments */}
        {comments.map((comment) => (
          <Comment data={comment} />
        ))}

        {/* Write comment */}
        <View style={[styles.row, styles.gap13]}>
          <Image source={{ uri: about.img }} style={styles.proImg} />
          <View>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={"#858585"}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
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
});
