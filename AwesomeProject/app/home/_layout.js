import { Tabs } from "expo-router/tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function HomeLayout() {
  const dmIcon = (
    <Link href={"/dm"} asChild>
      <TouchableOpacity style={styles.dmIcon}>
        <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => dmIcon,
          title: "Нүүр хуудас",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профайл",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dmIcon: {
    paddingRight: 5,
  },
});
