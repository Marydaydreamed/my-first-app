import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
const weekImg = require ('../../src/assets/img/weekIMG.png')
const monthImg1 = require ('../../src/assets/img/monthImg2.png')
const monthImg2 = require ('../../src/assets/img/monthImg1.png')
const earlierImg1 = require ('../../src/assets/img/earlier1.png')
const earlierImg2 = require ('../../src/assets/img/earlier2.png')
const notif = () => {
  return (
    <View style={styles.contaier}>
     <View style={styles.bigText}>
        <Text style={styles.textOne}>
            This Week
        </Text>
     </View>
     <View style={styles.weekNotif}>
    <Image source ={weekImg} style= {styles.weekImg}/>
    <View style={styles.weekTexts}>
     <Text style={styles.weekTextOne}>aminulhoqueakib</Text>
     <View style={styles.weekText}>
     <Text style={styles.weekTextTwo}>mentioned you in a comment.</Text>
     <Text style={styles.day}>  4d</Text>
     </View>
     <View style={styles.weekTextTree}>
     <EvilIcons name="heart" size={24} color="black" style={styles.reply} />
     <Text style={styles.reply}>Reply</Text>
     </View>
     </View>
     
     </View>
     <View style={styles.bigText}>
        <Text style={styles.textOne}>
            This Month
        </Text>
     </View>
     <View style={styles.weekNotif}>
    <Image source ={monthImg1} style= {styles.weekImg}/>
    <View style={styles.weekTexts}>
     <Text style={styles.weekTextOne}>sharon_hawk</Text>
     <View style={styles.weekText}>
     <Text style={styles.weekTextTwo}>mentioned you in a comment.</Text>
     <Text style={styles.day}>  13d</Text>
     </View>
     <View style={styles.weekTextTree}>
     <EvilIcons name="heart" size={24} color="black" style={styles.reply} />
     <Text style={styles.reply}>Reply</Text>
     </View>
     </View>
     
     </View>
     <View style={styles.weekNotif}>
    <Image source ={monthImg2} style= {styles.weekImg}/>
    <View style={styles.weekTexts}>
     <Text style={styles.weekTextOne}>Drake Jr</Text>
     <View style={styles.weekText}>
     <Text style={styles.weekTextTwo}>liked your photo.</Text>
     <Text style={styles.day}>  17d</Text>
     </View>
     <View style={styles.weekTextTree}>
     <EvilIcons name="heart" size={24} color="black" style={styles.reply} />
     <Text style={styles.reply}>Reply</Text>
     </View>
     </View>
     
     </View>
     <View style={styles.bigText}>
        <Text style={styles.textOne}>
            Earlier
        </Text>
     </View>
     <View style={styles.weekNotif}>
    <Image source ={earlierImg1} style= {styles.weekImg}/>
    <View style={styles.weekTexts}>
     <Text style={styles.weekTextOne}>dav_id </Text>
     <View style={styles.weekText}>
     <Text style={styles.weekTextTwo}>mentioned you in a comment.</Text>
     <Text style={styles.day}> Feb 27, 2021
</Text>
     </View>
     <View style={styles.weekTextTree}>
     <EvilIcons name="heart" size={24} color="black" style={styles.reply} />
     <Text style={styles.reply}>Reply</Text>
     </View>
     </View>
     
     </View>
     <View style={styles.weekNotif}>
    <Image source ={earlierImg2} style= {styles.weekImg}/>
    <View style={styles.weekTexts}>
     <Text style={styles.weekTextOne}>marshaMollow</Text>
     <View style={styles.weekText}>
     <Text style={styles.weekTextTwo}>liked your photo.</Text>
     <Text style={styles.day}>   Feb 18, 2021</Text>
     </View>
     <View style={styles.weekTextTree}>
     <EvilIcons name="heart" size={24} color="black" style={styles.reply} />
     <Text style={styles.reply}>Reply</Text>
     </View>
     </View>
     
     </View>
    </View>
  )
}

export default notif

const styles = StyleSheet.create({
    container:{
        padding: 8
    },
    bigText:{
marginLeft: 8,
marginTop: 8

    },
    textOne:{
        fontSize:21,
        fontWeight:'500'
    },
    weekImg:{
        width:61,
        height:61,
        borderRadius:61/2
    },
    weekNotif:{
        flexDirection:'row',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 8
    },
    weekTexts:{
        width:265,
        height:50,
        marginHorizontal: 8,
       
    },
    weekTextOne:{
        fontWeight:'700',
        fontSize:17
    },
    day:{
        color:'#848484'
    },
    weekText:{
        flexDirection: 'row'
    },
    weekTextTree:{
flexDirection:'row',
    },
    reply:{
        color:'#979797'
    },
        
})