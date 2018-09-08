import React from 'react';

function Img(props) {
  const {
    src,
    style,
    onClick,
    ...atributtes
  } = props;



    return (
      <img className="m-0 p-0 img-fluid" src={src}  alt="Book" style={style} onClick={onClick} {...atributtes}/>
     );
  }

  
export default Img;