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
      from
    } = this.props;


    const listImg = list.map(imgN =>
      <img id="A" src={imgN.image} className="img-fluid" alt="Book" />
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