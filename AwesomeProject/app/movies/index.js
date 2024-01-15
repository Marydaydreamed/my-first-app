import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Movie from './movie'

const Movies = () => {
    const movies = [
         {
             name: 'Avengers1',
             desc: 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by ...',
             img: require('../../avengers (1).jpg')
         },
         {
             name: 'Iron man',
             desc: 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by ...',
             img: require('../../ironman (1).jpg')
         },
        {
            name: 'Thor: Love and Thunder',
            desc: 'Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. ',
            img: require('../../thor_love_and_thunder_dc (1).jpg')
        }
    ]
    return (
        <ScrollView>
          

            <ScrollView contentContainerStyle={styles.container}>
                {movies.map(movie =>
                    <Movie name={movie.name} desc={movie.desc} img={movie.img} />
                )}
            </ScrollView>
        </ScrollView>

    )
}

export default Movies

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})