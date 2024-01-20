import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const  story3 = require ('../../src/assets/img/homepic1.png')
const story2 = require ('../../src/assets/img/homepic2.png')
const story1 = require ('../../src/assets/img/pro.png')
const story4 = require ('../../src/assets/img/earlier1.png')
const home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.igHead}>
        <Text style={styles.IG}>Instagram</Text>
        <Ionicons name="paper-plane-outline" size={35} color="black" style={styles.paperPlane}/>
      </View>
      <View style={styles.stories}>
      <Image source ={story1} style= {styles.story1}/>
      <Image source ={story2} style= {styles.story}/>
      <Image source ={story3} style= {styles.story}/>
      <Image source ={story4} style= {styles.story}/>
      </View>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
padding:8
  },
  igHead:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginLeft:30,
marginRight:10
  },
  IG:{
    fontSize:30,
    fontWeight:'700'
  },
  stories:{
flexDirection:'row',
justifyContent: 'space-around'
  },
  story1:{
    width:61,
    height:61
  },
  story:{
    width:67,
    height:67,
    borderRadius: 67/2
  }

})