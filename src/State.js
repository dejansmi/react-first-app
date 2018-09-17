import React, { Component } from 'react';
import {
  listOfImg, users, userROL, ProductsData, topOffer,
  sport, sportMan, sportWoman, company, basketHistory,
  OrdersNotDelivered, virman, banks, bankOrganizer, environment
} from './Data.js';
import Main from './Main';
import BuyersSay from './BuyersSey';
import { Today } from './Today';
import tr from "./TranslateData";




class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      env: environment['badin'],
      environmentList: environment,
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
      t: this.t,
      tt: this.tt,
      showScreenMessage: false,
      ShowScreenMessage: this.ShowScreenMessage,
      screenMessage: "",
      screenMessageType: 'info',
      getRandomInt: this.getRandomInt,
      changeDeliveryPhase: this.changeDeliveryPhase,
      checkExistsPhase3: this.checkExistsPhase3,
      setEnv: this.setEnv,
      virman: virman,
      banks: banks,
      bankOrganizer: bankOrganizer
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
    this.checkExistsPhase3 = this.checkExistsPhase3.bind(this);

  }

  /*
  componentDidMount() {
    this.timerID = setInterval(
      () => this.moveImgList(),
      this.state.inputValue
    );

  }

  componentWillUnmount() {4
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

  checkExistsPhase3 = (userName) => {
    let ret = false;
    console.log (userName)
    if (this.state.ordersNotDelivered[userName] !== undefined ) {
      console.log ("U IF")
      for (let order in this.state.ordersNotDelivered[userName]) {
        if (this.state.ordersNotDelivered[userName][order].deliveryPhase===3) {
          ret = true;
        }
      }
    }
    return ret;
  }


  changeAddress = (userName, address, houseNumber, city) => {
    if (this.state.user!=="") {
      let lUser = this.state.user;
      lUser.address = address;
      lUser.houseNumber = houseNumber;
      lUser.city = city;
      this.setState ({
        user: lUser
      });
    }
    let lUsers = this.state.users;
    if (lUsers[userName]!==undefined) {
      lUsers[userName].address = address;
      lUsers[userName].houseNumber = houseNumber;
      lUsers[userName].city = city;
    }

  }

  t = (inSent) => {
    var lang = this.state.env.lang;
    var forTrans = inSent + "." + lang;
    var ret = tr[forTrans];
    if (ret===undefined) {
        ret = "@!@"
    }
    return ret;
}

tt = (inSent,  tenant) => {
  var lang = this.state.env.lang;
  var forTrans = inSent + "." + lang;
  if (tenant) {
      if (tr[forTrans+'.'+this.state.env.id]!==undefined) {
          forTrans = forTrans+'.'+this.state.env.id;
      }
  }
  var ret = tr[forTrans];
  if (ret===undefined) {
      ret = "@!@"
  }
  return ret;
}



  startSearch = (searchText) => {


    var searchExp;
    let xS = [];

    searchExp = searchText;
    this.state.productsList.map((productR, ind) => {
      if (productR.productName.toUpperCase().search(searchExp.toUpperCase()) > -1 ||
        productR.productType.toUpperCase().search(searchExp.toUpperCase()) > -1 ||
        productR.description.toUpperCase().search(searchExp.toUpperCase()) > -1 ||
        productR.imageAlt.toUpperCase().search(searchExp.toUpperCase()) > -1 ||
        productR.company.toUpperCase().search(searchExp.toUpperCase()) > -1
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

  setEnv = (e, newEnv) => {
    console.log ("AAAAAA")
    this.setState({
      env: environment[newEnv]
    });

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
      if (stateAfter===4) {
        delete deliveryPhase[user][key];
      }
      this.setState({
        ordersNotDelivered: deliveryPhase
      });
    }
  }


  orderPayed = () => {
    var bHistory, ordersNotDelivered, today;
    let lUser, lAddres;
    var bList, dList, dId;

    ordersNotDelivered = this.state.ordersNotDelivered;
    if (this.state.user === "") {
      lUser = this.state.basketOrder;
      lAddres = {
        name: lUser,
        city: "Nis",
        houseNumber: "8/23",
        address: 'Narodnih heroja'
      }
    } else {
      lUser = this.state.user.username;
      lAddres = {
        name: this.state.user.name,
        city: this.state.user.city,
        houseNumber: this.state.user.houseNumber,
        address: this.state.user.address
      }
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
        dId = this.getRandomInt(1000) +"-"+ this.getRandomInt(1000);
        dList = {
          deliveryId: dId,
          orderId: this.state.basketOrder,
          productId: one.product.productId,
          productName: one.product.productName,
          quantity: one.numberOfProduct,
          company: one.product.company,
          username: lUser,
          name: lAddres.name,
          address: lAddres.address,
          houseNumber: lAddres.houseNumber,
          city: lAddres.city,
          deliveryPhase: 0,
          packageId: "",
          courier: one.product.company,
          date: today
        }

        if (ordersNotDelivered[lUser] === undefined) {
          ordersNotDelivered[lUser] = [];
        }    
        ordersNotDelivered[lUser][dId] = dList;
    

        return true;
      });

      if (bHistory[this.state.user.username]===undefined) {
        bHistory[this.state.user.username] = [];
      }
      bHistory[this.state.user.username][this.state.basketOrder] = {
        orderId: this.state.basketOrder,
        ammount: this.state.basket,
        currency: this.state.basketCurrency,
        basketList: bList,
        date: new Date()
      }
    }






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
    if (comment === undefined || comment ==="") return;
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
    // seting users
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
          tO = ProductsData[37];
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
            tO = ProductsData[37];
          }
        } else if (userL.userType === 'company') {
          tO = ProductsData[29];
        } else if (userL.userType === 'system') {
          tO = ProductsData[31];
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