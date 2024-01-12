import './Statelesson26.css'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    
      setCount(count - 1);
    
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className='yes'>Таалагдсан:   {count}</p>
      <button className='inc' onClick={increment}>Increment</button>
      <button className='dec' onClick={decrement}>Decrement</button>
      <button className='re' onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

