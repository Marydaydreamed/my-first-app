import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack screenOptions={{headerShown : false}}>
<Stack.Screen name='profile' options={{
    title: 'Профайл'
}}/>
<Stack.Screen name='home/index' options={{
    title: 'Нүүр хуудас'
}}/>
<Stack.Screen name='home/newpost' options={{
    title: 'New Post'
}}/>
<Stack.Screen name='home/notif' options={{
    title: 'Notification'
}}/>
<Stack.Screen name='home/search' options={{
    title: 'Search'
}}/>
  </Stack>;
   }