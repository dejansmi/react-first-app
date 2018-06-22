import React, { Component } from 'react';
import {
  listOfImg, users, userROL, ProductsData, topOffer,
  sport, sportMan, sportWoman, company, basketHistory,
  OrdersNotDelivered
} from './Data.js';
import Main from './Main';
import BuyersSay from './BuyersSey';
import { Today } from './Today';


class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
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
      users: users,
      setUser: this.setUser,
      usersROL: userROL,
      productsList: ProductsData,
      company: company,
      product: "",
      topOffer: topOffer,
      basket: 0,
      basketOrder: "",
      basketHowPay: "",
      basketList: [],
      basketHistory: basketHistory,
      addInBasketList: this.addInBasketList,
      basketCurrency: 'RSD',
      orderPayed: this.orderPayed,
      ordersNotDelivered: OrdersNotDelivered,
      changeCurrentAccountBalance: this.changeCurrentAccountBalance,
      search: "",
      searchResult: [ProductsData[2], ProductsData[12], ProductsData[22]],
      startSearch: this.startSearch,
      searchButton: 'search',
      setSearchButton: this.setSearchButton,
      bayersSay: BuyersSay,
      addComment: this.addComment,
      showScreenMessage: false,
      ShowScreenMessage: this.ShowScreenMessage,
      screenMessage: "",
      screenMessageType: 'info',
      getRandomInt: this.getRandomInt,
      changeDeliveryPhase: this.changeDeliveryPhase
    };
    this.setUser = this.setUser.bind(this);
    this.addInBasketList = this.addInBasketList.bind(this);
    this.orderPayed = this.orderPayed.bind(this);
    this.changeCurrentAccountBalance = this.changeCurrentAccountBalance.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.setSearchButton = this.setSearchButton.bind(this);
    this.addComment = this.addComment.bind(this);
    this.ShowScreenMessage = this.ShowScreenMessage.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.changeDeliveryPhase = this.changeDeliveryPhase.bind(this);

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

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  moveImgList = (event) => {
    this.setState(prevState => ({
      imgList: [...prevState.imgList.slice(1), ...prevState.imgList.slice(0, 1)]
    }));
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ShowScreenMessage = (message, type) => {
    if (type === "info") { }
    else if (type === 'error') { }
    else if (type === 'warning') { }
    else if (type === 'success') { }
    else type = 'info';
    this.setState({
      screenMessage: message,
      screenMessageType: type,
      showScreenMessage: !this.state.showScreenMessage
    });
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
    this.state.productsList.map((productR, ind) => {
      if (productR.productName.search(searchExp) > -1 ||
        productR.productType.search(searchExp) > -1 ||
        productR.description.search(searchExp) > -1
      ) {
        xS = [...xS, productR];
      }
      return true;
    }
    );


    this.setState({
      search: searchText,
      searchResult: xS
    });

  }

  productFind = (productId) => {
    for (let product of this.state.productsList) {
      if (product.productId === productId) {
        return product;
      }
    }
    return null;
  }

  changeDeliveryPhase = (user, key, stateBefore, stateAfter, packageId, courier) => {
    if (this.state.ordersNotDelivered === undefined) {
      return;
    }
    if (this.state.ordersNotDelivered[user][key].deliveryPhase === stateBefore) {
      let deliveryPhase = this.state.ordersNotDelivered;
      deliveryPhase[user][key].deliveryPhase = stateAfter;
      if (packageId !== undefined) {
        deliveryPhase[user][key].packageId = packageId;
      }
      if (courier !== undefined) {
        deliveryPhase[user][key].courier = courier;
      }
      this.setState({
        ordersNotDelivered: deliveryPhase
      });
    }
  }


  orderPayed = () => {
    var bHistory, ordersNotDelivered, today;
    let lUser, lAddres;
    var bList, dList;

    ordersNotDelivered = this.state.ordersNotDelivered;
    if (this.state.user === "") {
      lUser = this.state.basketOrder;
    } else {
      lUser = this.state.user.username;
    }
    lAddres = {
      city: "Nis",
      houseNumber: "8/23",
      address: 'Narodnih heroja'
    }


    today = Today();
    bList = []; //BasketList for History
    dList = []; //DeliveryList
    bHistory = this.state.basketHistory;
    if (this.state.user !== "") {
      let kop;
      kop = -1;
      let product = this.productFind(this.state.product.productId);
      this.state.basketList.map(one => {
        kop++;
        bList[kop] = {
          productName: one.product.productName,
          quantity: one.numberOfProduct,
          company: product.company,
          totalPrice: one.ammount
        }
        dList[kop] = {
          orderId: this.state.basketOrder,
          productId: one.product.productId,
          productName: one.product.productName,
          quantity: one.numberOfProduct,
          company: product.company,
          username: lUser,
          address: lAddres.address,
          houseNumber: lAddres.houseNumber,
          city: lAddres.city,
          deliveryPhase: 0,
          courier: product.company,
          date: today
        }
        return true;
      });

      bHistory[this.state.user.username][this.state.basketOrder] = {
        orderId: this.state.basketOrder,
        ammount: this.state.basket,
        currency: this.state.basketCurrency,
        basketList: bList,
        date: new Date()
      }
    }

    if (ordersNotDelivered[lUser] === undefined) {
      ordersNotDelivered[lUser] = [];
    }

    ordersNotDelivered[lUser] = [
      ...dList,
      ...ordersNotDelivered[lUser]
    ];






    this.setState(prevState => ({
      basket: 0,
      basketHowPay: "",
      basketList: [],
      basketOrder: "",
      ordersNotDelivered: ordersNotDelivered,
      basketHistory: bHistory
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


  addComment = (user, city, comment) => {
    var one;
    one = {
      user: user,
      city: city,
      comment: comment
    }

    this.setState(prevState => ({
      bayersSay: [...prevState.bayersSay, one]
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
          tO = ProductsData[24];
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
        if (userL.userType === 'client') {
          if (userL.sex === "W") {
            tO = ProductsData[24];
          } else {
            tO = ProductsData[29];
          }
        } else if (userL.userType === 'company') {
          tO = ProductsData[29];
        }
        this.setState({
          user: userL,
          topOffer: tO
        });
        return userL.userType;
      } else {
        return "";
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