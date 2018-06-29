import React from 'react';

function Img(props) {
  const {
    src
  } = props;



    return (
      <img className="m-0 p-0 img-fluid" src={src}  alt="Book" />
     );
  }

  
export default Img;