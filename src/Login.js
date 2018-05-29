import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavLink from './NavLink';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleLoginClick(e) {
        this.props.global.setUser(e, "", "LogOut");
    }


    render() {
        const prijava = (this.props.global.user == "") ? "Prijava" : "Odjava";
        const noviKorisnik = (this.props.global.user == "") ? <NavLink className="Container-Empty" small to="/registracija">Novi korisnik</NavLink> : null;
        const toWhere = (this.props.global.user == "") ? "/login" : "/";

        return (
            <span className="Container-Empty h-100 w-100 ">
                <NavLink className="Container-Empty" small to={toWhere} onClick={() => this.handleLoginConnect()}>{prijava}</NavLink>
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