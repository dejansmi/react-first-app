import React from 'react';

function ListImg(props) {
    const numbers = props.list;
    return (
      numbers.map((imgN) =>
      <img id="A" src={imgN} className="img-responsive" alt="Book" />
    ) );
  }
  
export default ListImg;