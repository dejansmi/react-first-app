import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderPage from './HeaderPage';
import ping from './logo.png';
import TextField from '@material-ui/core/TextField';
import ButtonOKCancel from './ButtonOKCancel';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            username: "",
            password: "",
            to: "/",
            exit: false
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleConnect = this.handleConnect.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
 
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleConnect(e) {
        let userTypeTo, userType;
        userType = this.props.global.setUser(e, this.state.username,"Login");
        if (userType!=="") {
            if (userType==="company") {
                userTypeTo = "/company/admin";
            } else {
                userTypeTo = "/"
            }
            this.setState({
                to: userTypeTo, 
                password: "",
                exit: true
            });
        }

    }

    handleCancel(e) {
        this.setState({ password: "",
                        to:"/",
                        exit: true});
    }


    render() {

        console.log ("LOGIN "+this.state.to)

        if (this.state.exit === true) {
            return <Redirect to={this.state.to} />
        }


        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="H-SS" />
                <div className="w-100 ColorYellow display-4"><i><b>Prijava</b></i></div>
                <div className="H-SS" />
                <div>
                    <div className="H-SS" />
                    <div className="d-flex flex-row">
                        <TextField value={this.state.username} onChange={this.handleChangeUsername} defaultValue="" label="Korisničko ime" />
                        <div className="W-SS" />
                        <TextField type="password" defaultValue="" label="Lozinka" />
                    </div>
                    <div className="d-flex flex-row">
                        {this.state.textApprove}
                    </div>
                    <div className="H-SS" />
                    <div className="H-SS" />
                </div>
                <div>
                    <div className="d-flex flex-row">
                        <ButtonOKCancel OK onClick={() => this.handleConnect()}/>
                        <div className="W-SS"></div>
                        <ButtonOKCancel  onClick={() => this.handleCancel()}/>
                    </div>
                </div>
                <div className="H-SS" />
                <div className="H-SS" />
                <div className="H-SS ColorYellow w-100" />
            </div>
        )
    }
}

LoginPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

LoginPage.defaultProps = {
    tag: 'div'
};

export default LoginPage;