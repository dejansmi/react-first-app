import React, { Component } from 'react';
import { listOfImg, users, userROL } from './Data.js';
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
      numMoreGoodOffers: 0,
      numLoyaltyBox: 0,
      user: "",
      setUser: this.setUser,
      users: users,
      usersROL: userROL
    };
    this.setUser = this.setUser.bind(this);

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

  setUser = (event, username, type) => {
    var user;
    if (type == "NewUserROL") {
      for (var userOne of this.state.usersROL) {
        if (userOne.username == username) {
          user = userOne
          break;
        }
      }
      if (user != undefined) {

        this.setState({
          user: user,
          users: users.push(userOne) 
        });
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