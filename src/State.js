import React, { Component } from 'react';
import { listOfImg, users, userROL, ProductsData, topOffer, sport, sportMan, sportWoman, company } from './Data.js';
import Main from './Main';


class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      imgList: listOfImg,
      listOfImg: listOfImg,
      sport: sport,
      sportMan: sportMan,
      sportWoman: sportWoman,
      numMoreGoodOffers: 0,
      numLoyaltyBox: 0,
      user: "",
      setUser: this.setUser,
      users: users,
      usersROL: userROL,
      productsList: ProductsData,
      company: company,
      product: "",
      topOffer: topOffer,
      basket: 0,
      basketOrder: "",
      basketHowPay: "",
      basketList: [],
      basketHistory: [],
      addInBasketList: this.addInBasketList,
      basketCurrency: 'RSD',
      orderPayed: this.orderPayed,
      changeCurrentAccountBalance: this.changeCurrentAccountBalance,
      search: "",
      searchResult: [ProductsData[2], ProductsData[12], ProductsData[22]],
      startSearch: this.startSearch,
      searchButton: 'search',
      setSearchButton: this.setSearchButton
    };
    this.setUser = this.setUser.bind(this);
    this.addInBasketList = this.addInBasketList.bind(this);
    this.orderPayed = this.orderPayed.bind(this);
    this.changeCurrentAccountBalance = this.changeCurrentAccountBalance.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.setSearchButton = this.setSearchButton.bind(this);
  }

  /*
  componentDidMount() {
    this.timerID = setInterval(
      () => this.moveImgList(),
      this.state.inputValue
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  */


  moveImgList = (event) => {
    this.setState(prevState => ({
      imgList: [...prevState.imgList.slice(1), ...prevState.imgList.slice(0, 1)]
    }));
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  setSearchButton = (searchText) => {
    this.setState({
      searchButton: searchText,
    });

  }


  startSearch = (searchText) => {


    var searchExp;
    let xS = [];

    searchExp = searchText;
    this.state.productsList.map((productR, ind) => 
    {
      if (productR.productName.search(searchExp)>-1 ||
           productR.productType.search(searchExp)>-1 ||
           productR.description.search(searchExp)>-1
          ) {
        xS = [...xS,productR];
      }
      return true;
    }
    );


    this.setState({
      search: searchText,
      searchResult: xS
    });

  }

  orderPayed = () => {
    var one;
    one = {
      order: this.state.basketOrder,
      ammount: this.state.basket,
      howPay: this.state.basketHowPay,
      basketList: this.state.basketList

    }
    this.setState(prevState => ({
      basket: 0,
      basketHowPay: "",
      basketList: [],
      basketOrder: "",
      basketHistory: [...prevState.basketHistory, one]
    }));
  }

  changeCurrentAccountBalance = (ammountChange) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        currentAccount: {
          ...prevState.user.currentAccount,
          ammount: prevState.user.currentAccount.ammount + ammountChange
        }
      }
    }));
  }

  addInBasketList = (product, numberOfProduct, ammount) => {
    var one;
    one = {
      product: product,
      numberOfProduct: numberOfProduct,
      ammount: ammount
    }
    if (this.state.basketOrder === "") {
      // get order number
      var iRun = this.getRandomInt(10000) + "-" + this.getRandomInt(10000);
      this.setState(prevState => ({
        basketList: [...prevState.basketList, one],
        basket: (Number(prevState.basket) + Number(ammount)).toFixed(2),
        basketOrder: iRun
      }));

    } else {
      this.setState(prevState => ({
        basketList: [...prevState.basketList, one],
        basket: (Number(prevState.basket) + Number(ammount)).toFixed(2)
      }));
    }
  }


  setUser = (event, username, type) => {
    var userL, tO;
    if (type === "NewUserROL") {
      for (var userOne of this.state.usersROL) {
        if (userOne.username === username) {
          userL = userOne
          break;
        }
      }
      if (userL !== undefined) {
        if (userL.sex === "W") {
          tO = ProductsData[28];
        } else {
          tO = ProductsData[29];
        }
        this.setState(prevState => ({
          user: userL,
          users: [...prevState.users, userL],
          topOffer: tO
        }));


      }
    } else if (type === "Login") {
      for (userOne of this.state.users) {
        if (userOne.username === username) {
          userL = userOne
          break;
        }
      }
      if (userL !== undefined) {
        if (userL.sex === "W") {
          tO = ProductsData[28];
        } else {
          tO = ProductsData[29];
        }
        this.setState({
          user: userL,
          topOffer: tO
        });
        return true;
      } else {
        return false;
      }

    } else if (type === "LogOut") {
      this.setState({
        user: ""
      });

    }
  }

  render() {
    return (<Main global={this.state} />);
  }

}



export default State;