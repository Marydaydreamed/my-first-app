import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

const Movie = () => {
    const [boxes, setBoxes] = useState(['','','',''])
  return (

    <View style={styles.container}>
        <Text style={styles.text}>Таньд санал болгох кино.</Text>
        <View style={styles.movie}>
     {boxes.map((box, i)=>
     <View style={styles.box}>
     </View>
     )}
      </View>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'white',
alignItems:'center'
},
box:{
    width:160,
    height:250,
    backgroundColor:'lightblue',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
   
    elevation: 24,

},
movie:{
    flexDirection:'row',
justifyContent:'space-between',
flexWrap:'wrap',
marginRight:20,
marginLeft:20
},
text:{
fontSize:20,
}
})