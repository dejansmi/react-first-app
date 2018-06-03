import React from 'react';

function Img(props) {
  const {
    src
  } = props;


    return (
      <img  src={src} className="img-fluid" alt="Book" />
     );
  }
  
export default Img;