import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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
import T from './T';




class App extends Component {


  constructor(props) {
    super(props);
    this.mgo = 150;
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      numMoreGoodOffers: 3,
      numOtherOffers: 3,
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

  resize = () => {
    this.numLoyaltyBox();
    this.numMoreGoodOffers();
    this.otherOffers();
    this.forceUpdate();
  }

  componentDidMount() {
    this.numLoyaltyBox();
    this.numMoreGoodOffers();
    this.otherOffers();
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
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

  numMoreGoodOffers() {
    var element = document.getElementById('App-nMGO');
    if (element===null) return;
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width;
    let nMGO = Math.trunc((width / this.mgo));
    if (this.state.numMoreGoodOffers !== nMGO) {
      this.setState({
        numMoreGoodOffers: nMGO
      });
    }
  }

  otherOffers() {
    var element = document.getElementById('Left');
    if (element===null) return;
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width;
    let oO = Math.trunc((width / this.mgo));
    if (this.state.numOtherOffers !== oO) {
      this.setState({
        numOtherOffers: oO
      });
    }
  }


  numLoyaltyBox() {
    var element = document.getElementById('App-loyalty');
    if (element===null) return;
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width;
    let nLB = Math.trunc((width / (2 * this.mgo)));
    if (this.state.numLoyaltyBox !== nLB) {
      this.setState({
        numLoyaltyBox: nLB
      });
    }
  }




  render() {

    const {
      global
    } = this.props;


    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectTo} />
    }


    const rowBasket = this.props.global.basketList.map(one =>
      <div className="d-flex flex-row justify-content-between">
        <div className="width-exact-50 ">{one.product.productName}</div>
        <div className="width-exact-10 text-right ">{one.numberOfProduct}</div>
        <div className="d-flex  width-exact-40 justify-content-end"> <F f="$" a={one.ammount} /></div>
      </div>);


    return (


      <div className="App container-fluid">


        <HeaderPage bankLogo={global.env.logo} imgList={this.props.global.imgList} {...this.props} value={this.state.value} />
        <div className="Header-Size w-100"></div>
        <div className="Header-Size w-100"></div>

        <div className=" d-flex flex-row flex-wrap h-auto Container-Empty O-X m-3">
          {(this.props.global.search === "") ?
            (<div id="Left" className="  Container-Empty d-flex flex-column flex-wrap O-X justify-content-start " >
              <div id="UpLeft" className="d-flex flex-column pl-0  Container-Empty flex-wrap">
                <div id="TopOffer" className="O-Y  Container-Empty  flex-wrap">
                  <div id="TopOffersChild" className="Container-Empty O-Y O-X border border-warning">
                    <div className="h-10 Container-Empty "><h3><b><T id="App.topOffer" global={global}/></b></h3></div>
                    <BoxProduct className="h-90" product={this.props.global.topOffer} global={this.props.global} />
                  </div>
                  <div id="TOLoyalti" className="O-Y O-X Container-Empty">
                    <div id="App-nMGO" className="h-50 d-flex flex-column O-Y O-X w-100  Container-Empty">
                      <div className="h-10 Container-Empty "><h5><b><T id="App.moreGoodOffers" global={global}/></b></h5></div>
                      <div className="h-90 d-flex flex-row justify-content-center O-Y O-X w-100  Container-Empty">
                        <ListProduct id="App-moreGoodOffers" list={moreGoodOffers.slice(0, this.state.numMoreGoodOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                      </div>
                    </div>
                    <div id='App-loyalty' className="h-50 d-flex flex-column O-Y O-X w-100  Container-Empty">
                      <div className="h-10 Container-Empty "><h5><b><T id="App.loyaltyPaysOff" global={global}/></b></h5></div>
                      <div className="h-90 d-flex flex-row justify-content-center O-Y O-X w-100  Container-Empty">
                        <ListLoyalty list={loyaltyData.slice(0, this.state.numLoyaltyBox)} n={this.state.numLoyaltyBox} size="small" global={this.props.global} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {(this.props.global.user === "" || this.props.global.user.sex === "W") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty ">
                  <div className="h-10 Container-Empty "><h5><b><T id="App.lovedYourself" global={global}/></b></h5></div>
                  <div className=" h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={nakitList.slice(0, this.state.numOtherOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
              {(this.props.global.user === "") ?
                (<div className="otherGroupProduct col-12  flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b><T id="App.timeForSport" global={global}/></b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sport.slice(0, this.state.numOtherOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
              {(this.props.global.user !== "" && this.props.global.user.sex === "M") ?
                (<div className="otherGroupProduct col-12  flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b><T id="App.timeForSport" global={global}/></b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sportMan.slice(0, this.state.numOtherOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)}
              {(this.props.global.user !== "" && this.props.global.user.sex === "W") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b><T id="App.timeForSport" global={global}/></b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={this.props.global.sportWoman.slice(0, this.state.numOtherOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)
              }
              {(this.props.global.user !== "" && this.props.global.user.sex === "M") ?
                (<div className="otherGroupProduct col-12 flex-column  O-Y O-X Container-Empty">
                  <div className="h-10 Container-Empty "><h5><b><T id="App.lovedYourself" global={global}/></b></h5></div>
                  <div className="h-90 d-flex flex-row justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={nakitList.slice(0, this.state.numOtherOffers)} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
                </div>) : (null)
              }
              <div className="d-flex flex-column w-100 O-Y O-X Container-Empty">
                <h5><b><i><T id="App.atTheEnd" global={global}/></i></b></h5>
                <div className="h-90 d-flex flex-row flex-wrap justify-content-center  O-Y O-X w-100  Container-Empty">
                    <ListProduct list={global.productsList} className="h-100 d-flex flex-row O-Y O-X Container-Empty" size="small" global={this.props.global} />
                  </div>
              </div>
            </div>) :
            (
              <div id="SearchPage" className="d-flex flex-column  h-100 Container-Empty">
                <SearchPage global={this.props.global} />
              </div>
            )}
          <div id="Right" className="container-fluid  Container-Empty d-flex flex-column O-Y O-X">
            <div className="w-100">
              <Video />
            </div>
            <div className="d-flex flex-column w-100 Container-Empty ">
              <div id="BasketSaldo" className="Container-Empty d-flex flex-row col-12 justify-content-between align-items-center">
                <div id="BasketImage" className="Container-Empty  O-X O-Y "><Img className="img-fluid" src={Basket} alt="User" /></div>
                <h2 className="h-100 align-items-center "><F f="$" a={this.props.global.basket} /></h2>
              </div>
              <div className="d-flex flex-row justify-content-between ColorYellow">
                <div><T id="App.basketNameProduct" global={global}/></div><div><T id="App.basketPieces" global={global}/></div><div><T id="App.basketPrice" global={global}/></div>
              </div>
              {rowBasket}
              <Button className="ColorYellow" onClick={(e) => this.endOfBuying(e)}><T id="App.basketEndOfBuying" global={global}/></Button>
            </div>
            <div className="d-flex flex-column mt-5">
              <spam className="ColorYellow text-left w-100"><T id="App.basketBuyersSay" global={global}/></spam>
              <spam className="ColorYellow w-100 text-right"><i><T id="App.basketBuyersAreRight" global={global}/></i></spam>
              <BayerCommentShow global={this.props.global} />
            </div>
          </div>
        </div>


      </div>
    );

  }
}

export default App;
