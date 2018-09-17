import React, { Component } from 'react';
import Login from './Login';
import { Redirect } from "react-router-dom";
import classNames from 'classnames';
import Link from './Link';
import Img from './Img';
import ScreenMessage from './ScreenMessage';
import T from "./T";



class HeaderCompanyPage extends Component {
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
        this.iconCompany = this.iconCompany.bind(this);
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


    handleUserData = (event, product) => {
        //TODO: Kada se napravi page za koirsnike kompanija ovde treba intervenisati
        //this.setState({ redirectUser: true })

    }


    handleOnClick = (event, product) => {
        this.setState({ redirect: true });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });

    }

    iconCompany = () => {
        let company;
        if (this.props.global.user !== "" && this.props.global.user.company !== undefined) {
            company = this.props.global.user.company;
            return this.props.global.company[company].logo;
        }
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


        if (this.state.redirectSearch === true || this.props.global.user==="") {
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
            global
        } = this.props;

        const userData = classNames(
            this.props.global.user !== "" ? 'd-flex' : '',
            'flex-row',
            'O-Y',
            'Container-Empty',
            this.props.global.user !== "" ? '' : 'd-none'
        )



        return (
            <div className="col-12 fixed-top container-fluid " >

                {(global.showScreenMessage) ? (
                    <ScreenMessage global={global} />
                ) : (null)}
                <div className="col-12 fixed-top container-fluid" >

                    <div className="col-12 d-flex ColorGray align-items-end Header-Size" >
                        <div className="h-100 O-X O-Y p-1 mr-auto">
                            <Img src={this.iconCompany()} />
                        </div>
                        <div className="mr-auto whiteColor" >
                            <h2><b><i>{this.props.title}</i></b></h2>
                        </div>
                        <div className="d-flex flex-column">
                            {(global.user !== "") ?
                                (<div className={userData}>
                                    <div style={{ minWidth: "60px", maxWidth: "60px", maxHeight: "50px" }} className="O-X O-Y ">
                                        <img className="img-fluid" src={global.user.image} alt="User" onClick={this.handleUserData}/>
                                    </div>
                                    <div className="W-SS" />
                                    <div className="Container-Empty h-100 d-flex flex-column whiteColor">
                                        {global.user.name}
                                        <Link className="Container-Empty" small to={'/'} onClick={this.handleLoginClick}><T id="Login.logout" global={global}/></Link>
                                    </div>
                                </div>) : (
                                    <Login user={this.state.global.user} {...this.props} />
                                )}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

HeaderCompanyPage.defaultProps = {
    from: "None",
    tag: 'div'
};


export default HeaderCompanyPage;