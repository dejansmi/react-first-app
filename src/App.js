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
import BayerCommentShow from './BayerCommentShow';
import Img from './Img';




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      numMoreGoodOffers: 3,
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
      this.l = 1;
      if (this.l !== this.state.numLoyaltyBox) {
        this.setState({
          numLoyaltyBox: 1
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

    const rowBasket = this.props.global.basketList.map(one =>
      <div className="d-flex flex-row justify-content-between">
        <div className="width-exact-50 ">{one.product.productName}</div>
        <div className="width-exact-10 text-right ">{one.numberOfProduct}</div>
        <div className="d-flex border border-primary width-exact-40 justify-content-end"> <F f="$" a={one.ammount} /></div>
      </div>);


    return (


      <div className="App container-fluid">


        <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value={this.state.value} />
        <div className="Header-Size w-100"></div>
        <div className="Header-Size w-100"></div>

        <div className=" d-flex flex-row flex-wrap h-auto Container-Empty O-X m-3">
          {(this.props.global.search === "") ?
            (<div id="Left" className="  Container-Empty d-flex flex-column flex-wrap O-X justify-content-start " >
              <div id="UpLeft" className="d-flex flex-column pl-0  Container-Empty flex-wrap">
                <div id="TopOffer" className="O-Y  Container-Empty  flex-wrap">
                  <div id="TopOffersChild" className="Container-Empty O-Y O-X">
                    <div className="h-10 Container-Empty "><h3><b>Top ponuda</b></h3></div>
                    <BoxProduct className="h-90" product={this.props.global.topOffer} global={this.props.global} />
                  </div>
                  <div id="TOLoyalti" className="O-Y O-X Container-Empty">
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
              {(this.props.global.user === ""  || this.props.global.user.sex === "W") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty ">
                  <div className="h-10 Container-Empty "><h5><b>Obradujte najmilije i sebe</b></h5></div>
                  <div className=" h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={nakitList.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
              {(this.props.global.user === "") ?
                (<div className="otherGroupProduct col-12  flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sport.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
              {(this.props.global.user !== "" && this.props.global.user.sex === "M") ?
                (<div className="otherGroupProduct col-12  flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sportMan.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" />
                  </div>
                </div>) : (null)}
              {(this.props.global.user !== "" && this.props.global.user.sex === "W") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Vreme je za sport</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sportWoman.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" />
                  </div>
                </div>) : (null)}
              {(this.props.global.user !== "" && this.props.global.user.sex === "M") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b>Obradujte najmilije i sebe</b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={nakitList.slice(0, this.state.numMoreGoodOffers)} style={this.styleFunc("moreGoodOffers")} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
            </div>) :
            (<div>
              <div className="col-12 col-sm-6 col-md-1 d-flex flex-column pl-0  h-100 Container-Empty">
                <SearchPage global={this.props.global} />
              </div>
            </div>)}
          <div id="Right" className="container-fluid  Container-Empty d-flex flex-column O-Y O-X">
            <div className="w-100">
              <Video />
            </div>
            <div className="border border-primary d-flex flex-column col-12 Container-Empty">
              <div id="BasketSaldo" className="Container-Empty d-flex flex-row col-12 justify-content-between align-items-center">
                <div id="BasketImage" className="Container-Empty  O-X O-Y "><Img className="img-fluid" src={Basket} alt="User" /></div>
                <h2 className="h-100 align-items-center "><F f="$" a={this.props.global.basket} /></h2>
              </div>
              <div className="d-flex flex-row justify-content-between ColorYellow">
                <div>Naziv proizvoda</div><div>Komada</div><div>Iznos</div>
              </div>
              {rowBasket}
              <Button className="ColorYellow " onClick={(e) => this.endOfBuying(e)}>Kraj kupovine</Button>
            </div>
            <div className="d-flex flex-column mt-5">
              <spam className="ColorYellow text-left w-100">Kupci kažu...</spam>
              <spam className="ColorYellow w-100 text-right"><i>...a kupci su uvek u pravu</i></spam>
              <BayerCommentShow global={this.props.global} />
            </div>
          </div>
        </div>

      </div>
    );

  }
}

export default App;
