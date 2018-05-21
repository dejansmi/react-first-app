import React from 'react';

function Img(props) {
    const image = props.src;
    return (
      <img id="A" src={image} className="img-fluid" alt="Book" />
     );
  }
  
export default Img;