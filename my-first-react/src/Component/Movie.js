import React from 'react';
import './Movie.css';
import Counter from './Statelesson26'
import StarRating from './StarRating'
import Starmap from './Starmap';
 const Movie = ({ imageUrl, header, description }) => {
     return (
       <div className="product-card">
         <img className="product-image" src={imageUrl} alt="Product" />
         <div className="product-details">
           <h2 className="product-header">{header}</h2>
           <p className="product-description">{description }</p>
           
         </div>
         <Starmap/>
         <Counter/>
       </div>
     );
   };

   export default Movie;

