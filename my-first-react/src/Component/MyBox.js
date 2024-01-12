import React from 'react';
import './Boxcustomize.css';
const MyBox = (props) => {
  return (
    <div className='box'>{props.text}</div>
    
  )
}

export default MyBox;