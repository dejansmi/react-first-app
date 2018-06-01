import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavLink from './NavLink';
import  Link  from './Link';
import {  Redirect } from "react-router-dom";
import Button from './Button';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);


    }
    handleLoginClick(e) {
        this.props.global.setUser(e, "", "LogOut");
    }



    render() {
        const prijava = (this.props.global.user == "") ? "Prijava" : "Odjava";
        const noviKorisnik = (this.props.global.user == "") ? <Link className="Container-Empty" small to="/registracija">Novi korisnik</Link> : null;
        const toWhere = (this.props.global.user == "") ? "/login" : "/";
        var loginInOut = (this.props.global.user == "") ?
        <Link className="Container-Empty" small to={toWhere} >{prijava}</Link>:
        <Link className="Container-Empty" small to={toWhere} onClick={this.handleLoginClick}>{prijava}</Link>        ;
        


        return (
            <span className="Container-Empty d-flex flex-column h-100 w-100 ">
                {loginInOut}
                {noviKorisnik}
            </span>
        )
    }
}

Login.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Login.defaultProps = {
    tag: 'div'
};

export default Login;