import React, { Component } from 'react';
import logo from './logo.svg';
import ping from './logo.png';
import NavLink from './NavLink.js';
import CheckBox from './CheckBox.js';
import Video from './Video.js';
import classNames from 'classnames';
import PripremaCarusel from './PripremaCarusel.js';
import BoxProduct from './BoxProduct';
import ListProduct from './ListProduct';
import ListLoyalty from './ListLoyalty';
import Login from './Login';
import HeaderPage from './HeaderPage';
import sliceOfImg from './State';
import './App.css';
import { moreGoodOffers, loyaltyData } from './Data.js';




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      numMoreGoodOffers: 0,
      numLoyaltyBox: 0
    };


    this.x = 0;
    this.y = 0;

    this.addToListArray = this.addToListArray.bind(this);

    // This binding is necessary to make `this` work in the callback
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }





  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  addToListArray = (event) => {
    this.setState(prevState => ({
      listArray: [...prevState.listArray, String.fromCharCode(66 + this.state.listArray.length)]
    }));
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  styleFunc(lId) {
    this.x = window.innerWidth;
    this.y = window.innerHeight;

    this.rw = 320;
    this.to = 280;
    this.mgo = 150;
    this.lb = 300;


    if (lId === "topOffers") {
      return {
        height: 450
      }
    } else if (lId === "topOffersChild") {
      return {
        width: this.to,
        minWidth: this.to
      }
    } else if (lId === "rightWindow") {
      return {
        width: this.rw,
        minWidth: this.rw
      }
    } else if (lId === "leftWindow") {
      return {
        width: this.x - this.rw,
        minWidth: this.x - this.rw
      }
    } else if (lId === "middleWindow") {
      this.w = this.x - this.rw - this.to;
      this.m = Math.trunc((this.w / this.mgo));
      this.state.numMoreGoodOffers = this.m;
      return {
        width: this.w,
        minWidth: this.w
      }
    } else if (lId === "moreGoodOffers") {
      return {
        height: 225,
        width: this.mgo,
        minWidth: this.mgo
      }
    } else if (lId === "loyaltyBox") {
      this.l = Math.trunc((this.w / this.lb));
      this.state.numLoyaltyBox = this.l;

      return {
        height: "225px",
        width: this.lb,
        minWidth: this.lb
      }

    }

    return {
      height: '100px'
    }
  }


  render() {

    const userData = classNames(
      this.props.global.user != "" ? 'd-flex' : '',
      'flex-row',
      'O-Y',
      this.props.global.user != "" ? '' : 'd-none'
    )


    return (

      <div className="App container-fluid">


        <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value={this.state.value} />
        <div className="Header-Size w-100"></div>
        <div className="Header-Size w-100"></div>

        <div className="d-flex flex-row Container-Empty border border-success h-rest O-X">
          <div style={this.styleFunc("leftWindow")} className=" pl-0 border border-danger h-100 Container-Empty">
            <div style={this.styleFunc("topOffers")} className="d-flex flex-row O-Y O-X border border-primary Container-Empty">
              <div style={this.styleFunc("topOffersChild")} className=" h-100 border border-primary O-Y O-X Color Container-Empty">
                <div className="h-10 Container-Empty "><h3><b>Top ponuda</b></h3></div>
                <BoxProduct className="h-90" product={this.props.global.listOfImg[4]} />
              </div>
              <div style={this.styleFunc("middleWindow")} className="h-100 d-flex flex-column  O-Y O-X Container-Empty">
                <div className="h-50 d-flex flex-column Color O-Y O-X w-100 border border-danger Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Još dobrih ponuda</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center Color O-Y O-X w-100  Container-Empty">
                    <ListProduct list={moreGoodOffers.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" />
                  </div>
                </div>
                <div className="h-50 d-flex flex-column Color O-Y O-X w-100 border border-danger Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Lojalnost se isplati</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center Color O-Y O-X w-100  Container-Empty">
                    <ListLoyalty list={loyaltyData.slice(0, this.state.numLoyaltyBox)} n={this.state.numLoyaltyBox} style={this.styleFunc("loyaltyBox")} size="small" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div style={this.styleFunc("rightWindow")} className="container-fluid border border-danger Container-Empty d-flex flex-column O-Y O-X">
            <div className={userData}>
              <div style={{  minWidth: "60px", maxWidth: "60px" }} className="O-X O-Y ">
                <img className="img-fluid" src={this.props.global.user.image} alt="User" />
              </div>
              <div className="W-SS" />
              {this.props.global.user.name}
            </div>
            <Video />
          </div>
        </div>
        <div className="container">
          <h1>Header 1</h1>
          <h2>Header 1.2</h2>
        </div>
        <input type="number" value={this.state.inputValue} onChange={this.updateInputValue} />
        <div>{this.state.inputValue}</div>
        <button onClick={this.addToListArray}>Dodaj u red</button>
        <button onClick={this.moveImgList}>Pomeri</button>
        <PripremaCarusel period={this.state.inputValue} listArray={this.state.listArray} />

        <div className="container">
          <h2>Contextual Link Colors</h2>
          <p>Hover over the links.</p>
          <nav className="navbar bg-dark fixed-bottom col-6">
            <NavLink active to="/prva" >Prva</NavLink>
            <NavLink active to="/druga">Druga</NavLink>
            <NavLink active to="/treca" >Treca</NavLink>
            <NavLink active to="/cetvrta">Cetvrta</NavLink>
            <span className="text-white">Postu kupovina srba</span>
          </nav>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo img-responsive" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>






      </div>
    );

  }
}

export default App;
