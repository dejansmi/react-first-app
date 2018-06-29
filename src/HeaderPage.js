import React, { Component } from 'react';
import ListImg from './ListImg';
import CheckBox from './CheckBox';
import Login from './Login';
import { Redirect } from "react-router-dom";
import classNames from 'classnames';
import Link from './Link';
import logoRaif from './Pictures/logoRaif.png';
import Img from './Img';
import ScreenMessage from './ScreenMessage';



class HeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            redirect: false,
            product: "",
            searchValue: this.props.global.search,
            inputValue: 1000,
            iPostition: 0,
            redirectSearch: false,
            searchButton: this.props.global.searchButton,
            redirectUser: false
        }
        this.iCorrect = 1;
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.startSearch = this.startSearch.bind(this);
        this.handleUserData = this.handleUserData.bind(this);
        this.goHome = this.goHome.bind(this);
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

    overMouse = (i) => {
        this.iCorrect = i;
    }

    moveImgList = () => {
        if (this.state.iCorrect > 0) { return };
        this.setState(prevStat => ({
            iPostition: prevStat.iPostition + this.iCorrect
        }));
        if (this.props.imgList.length <= this.state.iPostition) {
            this.setState({
                iPostition: 0
            });
        }
    }

    handleLoginClick(e) {
        this.props.global.setUser(e, "", "LogOut");
        this.setState ({
            redirectSearch: true
        });
    }

    startSearch(e) {
        if (this.props.global.searchButton === 'clear') {
            this.props.global.startSearch("");
            this.props.global.setSearchButton('search');
            this.setState({
                searchValue: ""
            });
        } else {
            this.props.global.startSearch(this.state.searchValue);
            this.props.global.setSearchButton('clear');
            this.setState({
                redirectSearch: true
            });
        }
    }

    goHome(e) {
        // exit and go to /
        this.setState({
            redirectSearch: true
        });
    }


    handleUserData = (event, product) => {
        this.setState({ redirectUser: true });
    }


    handleOnClick = (event, product) => {
        this.setState({ redirect: true });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });

    }

    render() {



        if (this.state.redirect === true) {
            return (

                <Redirect to={{
                    pathname: '/product',
                    state: { product: this.props.global.product }
                }} push />

            )
        }


        if (this.state.redirectSearch === true) {
            if (this.props.URL !== '/') {
                return (
                    <Redirect to={{
                        pathname: '/'
                    }} push />
                )
            }
        }


        if (this.state.redirectUser === true) {
            if (this.props.URL !== '/user') {
                return (
                    <Redirect to={{
                        pathname: '/user'
                    }} push />
                )
            }
        }


        const {
            bankLogo,
            global,
            imgList
        } = this.props;

        const userData = classNames(
            this.props.global.user !== "" ? 'd-flex' : '',
            'flex-row',
            'O-Y',
            'Container-Empty',
            this.props.global.user !== "" ? '' : 'd-none'
        )




        return (
            <div className="col-12 fixed-top container-fluid" >

                {(this.props.global.showScreenMessage) ? (
                    <ScreenMessage global={this.props.global} />
                ) : (null)}
                <div className="col-12 fixed-top container-fluid" >
                    <div onMouseOver={() => this.overMouse(0)} onMouseOut={() => this.overMouse(1)} className="col-12 d-none Color align-items-end Header-Size O-X" >
                        <img src={bankLogo} className=" Opacity " alt="Primer" />
                        <div id="BankRecomanded" className="col-2 d-flex align-items-end align-text-top">Preporučuje</div>
                        <ListImg list={imgList.slice(this.state.iPostition, imgList.length).concat(imgList)} from="HeaderPage" global={this.props.global} onClick={this.handleOnClick} />
                    </div>

                    <div className="col-12 d-flex ColorGray align-items-end Header-Size" >
                        <div className="h-100 O-X O-Y p-1 mr-auto">
                            <Img src={logoRaif} />
                        </div>
                        <div className="mr-auto whiteColor" >
                            <h2><b><i>eDigiComm</i></b></h2>
                        </div>
                        <div className="d-flex flex-column">
                            {(this.props.global.user !== "") ?
                                (<div className={userData}>
                                    <div style={{ minWidth: "60px", maxWidth: "60px", maxHeight: "50px" }} className="O-X O-Y ">
                                        <img className="img-fluid" src={this.props.global.user.image} alt="User" onClick={this.handleUserData} />
                                    </div>
                                    <div className="W-SS" />
                                    <div className="Container-Empty h-100 d-flex flex-column whiteColor">
                                        {this.props.global.user.name}
                                        <Link className="Container-Empty" small to={'/'} onClick={this.handleLoginClick}>Odjava</Link>
                                    </div>
                                </div>) : (
                                    <Login user={this.state.global.user} {...this.props} />
                                )}
                        </div>
                    </div>
                    <div className="col-12 d-flex ColorGray align-items-end Header-Size" >
                        <div className="row col-12 H80 mt-0 pt-0 d-flex  align-self-center">
                            <div className="d-flex flex-row col-12 justify-content-start">
                                <i className="material-icons align-self-center" onClick={this.goHome}>home</i>
                                <div className="ml-auto">
                                    <div className="col-3 col-sm-3 h-100 pt-0 pb-0 d-flex flex-column">
                                        <CheckBox label="Proizvodi" small checked />
                                        <CheckBox label="Kompanije" small />
                                    </div>
                                </div>


                                <div className="d-flex flex-row h-100 col-9 col-sm-6">
                                    <i className="material-icons align-self-center" onClick={this.startSearch}>{global.searchButton}</i>
                                    <input className="form-control" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Unesite želju da je ispunimo" />
                                </div>
                                <div className="h-100 ml-auto">{this.props.global.windowWidth}x{this.props.global.windowHeight}</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

HeaderPage.defaultProps = {
    from: "None",
    tag: 'div'
};


export default HeaderPage;