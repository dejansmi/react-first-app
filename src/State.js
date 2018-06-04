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
      basketList: [],
      addInBasketList: this.addInBasketList,
      basketCurrency: 'RSD'
    };
    this.setUser = this.setUser.bind(this);
    this.addInBasketList = this.addInBasketList.bind(this);
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

  addInBasketList = (product, numberOfProduct, ammount) => {
    var one;
    one = {
      product: product,
      numberOfProduct: numberOfProduct,
      ammount: ammount
    }
    this.setState(prevState => ({
      basketList: [...prevState.basketList, one],
      basket: (Number(prevState.basket) + Number(ammount)).toFixed(2)
    }));
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
        if (userL.sex==="W") {
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
        if (userL.sex==="W") {
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