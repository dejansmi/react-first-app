import React, { Component } from 'react';



class ListImg extends Component {



  /*
    return (
      listImg.map(imgN =>
        <div className=" Container-Empty d-flex Header-Image h-100">
          <img id="A" src={imgN.image} className="img-fluid" alt="Book" />
        </div>
      ));
  */
  render() {

    const {
      list,
      onClick
    } = this.props;


    const listImg = list.map(imgN =>
      <img src={imgN.image} className="img-fluid" alt="Book" onClick={(e) => onClick(e,imgN)} />
    )


    return (
      <div className=" Container-Empty d-flex flex-row Header-Image h-100">
        {listImg}
      </div>
    );

  };
}

ListImg.defaultProps = {
  from: "None",
  tag: 'div'
};


export default ListImg;