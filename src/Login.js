import React from 'react';
import PropTypes from 'prop-types';
import  Link  from './Link';
import T from './T';



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
        const prijava = (this.props.global.user === "") ? <T id="Login.login" global={this.props.global}/> : <T id="Login.logout" global={this.props.global}/>;
        const noviKorisnik = (this.props.global.user === "") ? <Link className="Container-Empty" small to="/registracija"><T id="Login.newUser" global={this.props.global}/></Link> : <Link className="Container-Empty" small to="/userPage">{this.props.user.name}</Link>;
        const toWhere = (this.props.global.user === "") ? "/login" : "/";
        var loginInOut = (this.props.global.user === "") ?
        <Link className="Container-Empty" small to={toWhere} >{prijava}</Link>:
        <Link className="Container-Empty" small to={toWhere} onClick={this.handleLoginClick}>{prijava}</Link>;
        


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