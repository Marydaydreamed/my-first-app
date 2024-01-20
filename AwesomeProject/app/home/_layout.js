import { Tabs } from 'expo-router/tabs';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function AppLayout() {
  return (
    <Tabs  screenOptions={{headerShown : true}}>
     <Tabs.Screen name='index' options={{
    title: 'Home',
    tabBarIcon: ()=><AntDesign name="home" size={24} color="black" />
}}/>
     <Tabs.Screen name='search' options={{
    title: 'Search',
    tabBarIcon: ()=><Feather name="search" size={24} color="black" />
}}/>
     <Tabs.Screen name='newpost' options={{
    title: 'Create Post',
    tabBarIcon: ()=><AntDesign name="plussquareo" size={24} color="black" />
}}/>
     <Tabs.Screen name='notif' options={{
    title: 'Activity',
    tabBarIcon: ()=><AntDesign name="hearto" size={24} color="black" />
}}/>
 <Tabs.Screen name='profile' options={{
    title: 'Profile',
    tabBarIcon: ()=><AntDesign name="user" size={24} color="black" />
}}/>
    </Tabs>
  );
}
