import React, { Component } from 'react';
import { listOfImg, users, userROL } from './Data.js';
import Main from './Main';


class State extends Component {
  constructor(props) {
    console.log ("State constructor")
    super(props);
    this.state = {
      inputValue: 1000,
      value: "",
      listArray: ["A", "B", "C"],
      imageName: "",
      imgList: listOfImg,
      listOfImg: listOfImg,
      numMoreGoodOffers: 0,
      numLoyaltyBox: 0,
      user: "",
      setUser: this.setUser,
      users: users,
      usersROL: userROL,
      product: "",
      basket: 0,
      basketList: [],
      addInBasketList: this.addInBasketList,
      basketCurrency: 'RSD'
    };
    this.setUser = this.setUser.bind(this);
    this.addInBasketList = this.addInBasketList.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.moveImgList(),
      this.state.inputValue
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

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
      basket: this.basket + ammount
    }));
  }


  setUser = (event, username, type) => {
    var userL;
    if (type == "NewUserROL") {
      for (var userOne of this.state.usersROL) {
        if (userOne.username == username) {
          userL = userOne
          break;
        }
      }
      if (userL != undefined) {
        this.setState(prevState => ({
          user: userL,
          users: [...prevState.users, userL]
        }));
    
    
      }
    } else if (type == "Login") {
      console.log (this.state.users)
      for (var userOne of this.state.users) {
        if (userOne.username == username) {
          userL = userOne
          break;
        }
      }
      if (userL != undefined) {
        this.setState({
          user: userL,
        });
        return true;
      } else {
        return false;
      }
      
    } else if (type == "LogOut") {
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