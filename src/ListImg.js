import React from 'react';

function ListImg(props) {
    const listImg = props.list;
    return (
      listImg.map(imgN =>
      <img id="A" src={imgN.image} className="img-fluid" alt="Book" />
    ) );
  }
  
export default ListImg;