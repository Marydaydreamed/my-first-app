import React from 'react'
import Star from './StarRating'
import './StarRating.css'
const Starmap = () => {
    const data = [
       {dis :'☆' , like:'⭐'},
       {dis :'☆' , like:'⭐'}, 
       {dis :'☆' , like:'⭐'}, 
       {dis :'☆' , like:'⭐'},
       {dis :'☆' , like:'⭐'}
       
    ]
  return (
    <div className='Star'>{data.map(star => <Star dis={star.dis} like={star.like}  />)} </div>
  )
}

export default Starmap
