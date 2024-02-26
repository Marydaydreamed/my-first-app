import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="post/[id]"
        options={{
          title: "Posts",
        }}
      />

      <Stack.Screen
        name="comments"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          title: "Comments",
        }}
      />
      {/* Edit user */}
      <Stack.Screen
        name="edit"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
