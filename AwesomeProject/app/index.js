import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
const index = () => {
  return (
    <View style={styles.container}>
                    <Link href="/TicTac">
                        <Text style={[styles.menu,styles.text]}>
                        TicTac game
                        </Text>
                    </Link> 
                    <Link href="/movies">
                        <Text style={[styles.menu,styles.text]}>
                        Movies
                        </Text>
                    </Link> 
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    menu:{
backgroundColor:'lightblue',
borderRadius:10,

    },
    text:{
fontSize: 32
    },
    container:{
        alignItems: 'center',
        
    }
})