import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const proImg = require ('../../src/assets/img/pro.png')
const post1 = require ('../../src/assets/img/1.png')
const post2 = require ('../../src/assets/img/2.png')
const post3 = require ('../../src/assets/img/3.png')
const post4 = require ('../../src/assets/img/4.png')
const post5 = require ('../../src/assets/img/5.png')
const post6 = require ('../../src/assets/img/6.png')
const profile = () => {


  return (
    <View style={styles.container}>
      {/*profile tolgoi*/}
      <View style={styles.proHeader}>
      <Image source={proImg} style={styles.proImg}/>
      <View style={styles.follower}>
        <View style={styles.followerItem}>
        <Text style={styles.followerText}>6</Text>
        <Text>Posts</Text>
        </View>
        <View style={styles.followerItem}>
        <Text style={styles.followerText}>147</Text>
        <Text>Followers</Text>
        </View>
        <View style={styles.followerItem}>
        <Text style={styles.followerText}>634</Text>
        <Text>Following</Text>
        </View>
      </View>
      
    </View>
    {/*profile bio*/}
    <View style={styles.bio}>
<Text style={styles.bioName}>Md Sazid</Text>
<Text style={styles.biosec}>insta chalai na temon -.- Btw Hi :V</Text>
<Text style={styles.biosec}>Byeeeeeeeeeee.</Text>
</View>
{/*profile edit*/}
<View style={styles.editSection}>
<TouchableOpacity style={styles.editBtn}>
  <Text style={styles.editText}>
    Edit Profile
    </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.editBtn}>
  <Text style={styles.editText}>
    Saved
    </Text>
</TouchableOpacity>

</View>
{/*profile highlight*/}
<View style={styles.highlight}>
  <Text style={styles.hlightText}>Suggested highlights</Text>
  <AntDesign name="down" size={24} color="black" />
</View>
{/*profile mid*/}
<View style={styles.promid}>

<TouchableOpacity style={styles.midBtn}>
  <Ionicons name="apps-outline" size={24} color="black" />
</TouchableOpacity>

<TouchableOpacity style={styles.midBtn}>
  <FontAwesome5 name="user-circle" size={24} color="black" />
</TouchableOpacity>
</View>
{/*profile post*/}
<View style={styles.post}>
<Image source={post1} style={styles.postImg}/>
<Image source={post2} style={styles.postImg}/>
<Image source={post3} style={styles.postImg}/>
<Image source={post4} style={styles.postImg}/>
<Image source={post5} style={styles.postImg}/>
<Image source={post6} style={styles.postImg}/>
</View>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
padding: 8
  },
  proHeader:{
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  proImg:{
    height: 107,
    width: 107,
    flex:1
   
  },
  follower:{
    flexDirection:'row',
    justifyContent: 'space-around',
    flex:3
  },
  followerText:{
    fontSize: 17,
    fontWeight: 'bold'
  },
  followerItem:{
    justifyContent: 'center',
    alignItems:'center'
  },
  bio:{
    marginBottom:8,
  },
  bioName:{
    fontSize:20,
    fontWeight:'bold'
  },
  biosec:{
    fontSize:20,
  },
  editSection:{
flexDirection:'row',
  },
  editBtn:{
    borderWidth:1,
    height:42,
    width:182,
    alignItems:'center',
    borderRadius:8,
    paddingVertical:8,
    marginHorizontal: 3,
    marginBottom: 5
  },
  editText:{
    fontSize:18,
    fontWeight:'400'
  },
  hlightText:{
    fontSize:20,
    fontWeight:'500'
  },
  highlight:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  promid:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  midBtn:{
    alignItems:'center',
    justifyContent:'center',
    height:46,
    width:195,
   
  },
  post:{
    flexWrap:'wrap',
    flexDirection:'row',
    width:416
  },
  postImg:{
    margin:1,
    width:125,
    height:125
  }




})