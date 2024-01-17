import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
const index = () => {
  return (
    <View style={styles.container}>
  <Link href="/TicTac" asChild>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>
                        TicTac game
                    </Text>
                </TouchableOpacity>
            </Link>

            <Link href="/movies" asChild>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.text}>
                        Movie List
                    </Text>
                </TouchableOpacity>
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