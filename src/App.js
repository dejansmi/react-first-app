import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import ping from './logo.png';
import Video from './Video.js';
import BoxProduct from './BoxProduct';
import ListProduct from './ListProduct';
import ListLoyalty from './ListLoyalty';
import HeaderPage from './HeaderPage';
import Button from './Button';
import F from './F';
import './App.css';
import { moreGoodOffers, loyaltyData, nakitList } from './Data.js';
import Basket from './Pictures/basket.jpg';
import SearchPage from './SearchPage';




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      numMoreGoodOffers: 0,
      numLoyaltyBox: 0,
      redirect: false,
      redirectTo: ""
    };


    this.x = 0;
    this.y = 0;

    this.addToListArray = this.addToListArray.bind(this);

    // This binding is necessary to make `this` work in the callback
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  endOfBuying = (e) => {
    if (this.props.global.basket > 0) {
      this.setState({
        redirect: true,
        redirectTo: "/endofbuying"
      });
    }
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
    } else if (lId === "nakit" || lId === 'nakitM' || lId === 'sport' || lId === 'sportM' || lId === 'sportW') {
      var disp;
      if (this.props.global.user === "") {
        if (lId === "nakitM") {
          disp = 'none';
        } else if (lId === "nakit") {
          disp = 'd-flex';
        } else if (lId === "sport") {
          disp = 'd-flex';
        } else if (lId === "sportM") {
          disp = 'none';
        } else if (lId === "sportW") {
          disp = 'none';
        }
      } else if (this.props.global.user.sex === "W") {
        if (lId === "nakitM") {
          disp = 'none';
        } else if (lId === "nakit") {
          disp = 'd-flex';
        } else if (lId === "sport") {
          disp = 'none';
        } else if (lId === "sportM") {
          disp = 'none';
        } else if (lId === "sportW") {
          disp = 'd-flex';
        }
      } else if (this.props.global.user.sex === "M") {
        if (lId === "nakitM") {
          disp = 'd-flex';
        } else if (lId === "nakit") {
          disp = 'none';
        } else if (lId === "sport") {
          disp = 'none';
        } else if (lId === "sportM") {
          disp = 'd-flex';
        } else if (lId === "sportW") {
          disp = 'none';
        }
      } else {
        if (lId === "nakitM") {
          disp = 'none';
        } else if (lId === "nakit") {
          disp = 'd-flex';
        } else if (lId === "sport") {
          disp = 'd-flex';
        } else if (lId === "sportM") {
          disp = 'none';
        } else if (lId === "sportW") {
          disp = 'none';
        }
      }
      return {
        height: 225,
        minHeight: 225,
        display: disp
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
        minWidth: this.x - this.rw,
        minHeight: 450
      }
    } else if (lId === "middleWindow") {
      this.w = Math.trunc(0.94 * this.x) - this.rw - this.to;
      this.m = Math.trunc((this.w / this.mgo));
      if (this.m !== this.state.numMoreGoodOffers) {
        this.setState({
          numMoreGoodOffers: this.m
        });
      }
      //this.state.numMoreGoodOffers = this.m;

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
      if (this.l !== this.state.numLoyaltyBox) {
        this.setState({
          numLoyaltyBox: this.l
        });
      }

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

    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectTo} />
    }

    console.log("APP RENDER")

    const styleBasket = {
      maxWidth: '50px',
      maxHeight: '50px'
    }

    const styleBasketAmmount = {
      fontSize: '2em'
    }

    const rowBasket = this.props.global.basketList.map(one =>
      <div className="d-flex flex-row justify-content-between">
        <div className="width-exact-50 ">{one.product.productName}</div>
        <div className="width-exact-10 text-right">{one.numberOfProduct}</div>
        <div className="width-exact-40 text-right"> <F f="$" a={one.ammount} /></div>
      </div>);



    return (

    
      <div className="App container-fluid">


        <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value={this.state.value} />
        <div className="Header-Size w-100"></div>
        <div className="Header-Size w-100"></div>

        <div className="d-flex flex-row  Container-Empty  h-rest O-X m-3">
          {(this.props.global.search==="") ?
            (<div className="Container-Empty d-flex flex-column O-X justify-content-start">
              <div style={this.styleFunc("leftWindow")} className=" d-flex flex-column pl-0  h-100 Container-Empty">
                <div style={this.styleFunc("topOffers")} className="d-flex flex-row O-Y O-X  Container-Empty">
                  <div style={this.styleFunc("topOffersChild")} className=" h-100  O-Y O-X Container-Empty">
                    <div className="h-10 Container-Empty "><h3><b>Top ponuda</b></h3></div>
                    <BoxProduct className="h-90" product={this.props.global.topOffer} global={this.props.global} />
                  </div>
                  <div style={this.styleFunc("middleWindow")} className="h-100 d-flex flex-column  O-Y O-X Container-Empty">
                    <div className="h-50 d-flex flex-column O-Y O-X w-100  Container-Empty">
                      <div className="h-10 Container-Empty "><h5><b>Još dobrih ponuda</b></h5></div>
                      <div className="h-90 d-flex flex-row justify-content-center O-Y O-X w-100  Container-Empty">
                        <ListProduct list={moreGoodOffers.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                      </div>
                    </div>
                    <div className="h-50 d-flex flex-column O-Y O-X w-100  Container-Empty">
                      <div className="h-10 Container-Empty "><h5><b>Lojalnost se isplati</b></h5></div>
                      <div className="h-90 d-flex flex-row justify-content-center O-Y O-X w-100  Container-Empty">
                        <ListLoyalty list={loyaltyData.slice(0, this.state.numLoyaltyBox)} n={this.state.numLoyaltyBox} style={this.styleFunc("loyaltyBox")} size="small" global={this.props.global} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={this.styleFunc("nakit")} className="w-100 flex-column  O-Y O-X Container-Empty">
                <div className="h-10 Container-Empty "><h5><b>Obradujte najmilije i sebe</b></h5></div>
                <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                  <ListProduct list={nakitList.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                </div>
              </div>
              <div style={this.styleFunc("sport")} className="w-100  flex-column  O-Y O-X Container-Empty">
                <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                  <ListProduct list={this.props.global.sport.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                </div>
              </div>
              <div style={this.styleFunc("sportM")} className="w-100  flex-column  O-Y O-X Container-Empty">
                <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                  <ListProduct list={this.props.global.sportMan.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" />
                </div>
              </div>
              <div style={this.styleFunc("sportW")} className="w-100  flex-column  O-Y O-X Container-Empty">
                <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                  <ListProduct list={this.props.global.sportWoman.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" />
                </div>
              </div>
              <div style={this.styleFunc("nakitM")} className="w-100 flex-column  O-Y O-X Container-Empty">
                <div className="h-10 Container-Empty "><h5><b>Obradujte najmilije i sebe</b></h5></div>
                <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                  <ListProduct list={nakitList.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                </div>
              </div>
            </div>) :
            (<div>
              <div style={this.styleFunc("leftWindow")} className=" d-flex flex-column pl-0  h-100 Container-Empty">
                <SearchPage global={this.props.global}/>
            </div>
            </div>)}
          <div style={this.styleFunc("rightWindow")} className="container-fluid  Container-Empty d-flex flex-column O-Y O-X">
            <Video />
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between"><img style={styleBasket} className="img-fluid" src={Basket} alt="User" />
                <div style={styleBasketAmmount}><F f="$" a={this.props.global.basket} /></div>
              </div>
              <div className="d-flex flex-row justify-content-between ColorYellow">
                <div>Naziv proizvoda</div><div>Komada</div><div>Iznos</div>
              </div>
              {rowBasket}
              <Button className="ColorYellow " onClick={(e) => this.endOfBuying(e)}>Kraj kupovine</Button>
            </div>
          </div>
        </div>

      </div>
    );

  }
}

export default App;
