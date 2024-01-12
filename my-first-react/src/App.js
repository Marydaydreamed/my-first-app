// import './App.css';
// import Sneakers from './Component/Sneakers';
// import image1 from "./image1.png";
// import image2 from "./image2.png";
// import image3 from "./image3.png";
// import image4 from "./image4.png";
// import image5 from "./image5.png";
// import image6 from "./image6.png";
// const Puuznuud = () => {
//     const data = [
//         { name: "Nike Blazer Mid '77", desc:  'Classic sneakers with a vintage look.', image: image1 },
//         { name:  'Nike Air Max 270', desc: 'Air Max series with a comfortable and stylish design.', image: image2 },
//         { name: 'Nike React Element 55', desc: 'Modern design with React technology for a comfortable feel.', image: image3 },
//         { name: 'Nike Zoom Pegasus Turbo 2', desc: 'Lightweight and responsive running shoes.', image: image4 },
//         { name:  'Nike Air Force 1', desc: 'Timeless style and versatility.', image: image5 },
//         { name:  'Nike Joyride Run Flyknit', desc: 'Innovative cushioning for a smooth and comfortable run.', image: image6 },
//     ]
//     return (
//         <div className='mur'>
//             {data.map(puuz => <Sneakers name={puuz.name} desc={puuz.desc} image={puuz.image} />)}


//         </div>
//     )
// }

// export default Puuznuud

import logo from './logo.svg';
import './App.css';
import Star from './Component/StarRating'
import Starmap from './Component/Starmap';
  
   import ironman from './ironman.jpg';
   import thor from './thor_love_and_thunder_dc.jpg';
   import spiderman from './spiderman.jpg';
   import avengers from './avengers.jpg';
   import Movie from './Component/Movie';
   import React, { useState } from 'react'
 

   const App = () => {
     const numbers = [
     {
        
           img: avengers,
           name: 'The Avengers',
           description: 'Superheroes team up to save the world.'
       },
       {
      
           img: spiderman,
           name: 'Spider-Man: Into the Spider-Verse',
           description: 'An animated adventure with multiple Spider-People.'
       },
       {
           img: ironman,
           name: 'Iron man 3',
           description: 'Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man'
       },
        {
           img: thor,
           name: 'Thor: Love and Thunder',
           description: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
       }
   
     ];
     const [text, setText] = useState('')
     const filteredMovie = numbers.filter(
      number => number.name.toLowerCase().includes(text.toLowerCase()))
  console.log('filteredMovie', filteredMovie);
  const onTyping = (e) => {
      const text = e.target.value;
      console.log('Бичсэн текст бол: ' + text);
      setText(text)
  }

     return(
   <div>
     
     <div className='mm'> 
     <h1>Таньд санал болгох кино</h1> </div>
     <div className='search'><input type="text" placeholder='Хайлт' onChange={onTyping} />
     <button  type="submit"> <i>Search</i></button>
     </div>
     <div className='App'>
     {filteredMovie.map((number)=> (<Movie
      imageUrl={number.img}
      header={number.name}
      description={number.description}
      />
      
      ))
     }
   </div>
  </div>
   ); 
   };
   export default App;


// import React from 'react'
// import ToggleButton from './Component/ToggleButton'
// const App = () => {
//   return (
//     <div><ToggleButton/></div>
//   )
// }

// export default App

