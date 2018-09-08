import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderPage from './HeaderPage';
import TextField from '@material-ui/core/TextField';
import ButtonOKCancel from './ButtonOKCancel';
import NotOrderedItems from './NotOrderedItems';



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

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }


    handleConnect(e) {
        if (this.state.password!=='a' && this.state.password!=='A') return;
        let userTypeTo, userType, exit;
        exit = false;
        userType = this.props.global.setUser(e, this.state.username, "Login");
        if (userType !== "") {
            if (userType === "company") {
                userTypeTo = "/company/admin";
            } else if (userType === "system") {
                userTypeTo = "/system/admin";
            } else {
                userTypeTo = "/"
            }
            if (!this.props.global.checkExistsPhase3(this.state.username)){
                exit = true;
            }

            this.setState({
                to: userTypeTo,
                password: "",
                exit: exit
            });

        }

    }

    handleContinues(e) {
        this.setState({
            exit: true
        });
    }

    handleCancel(e) {
        this.setState({
            password: "",
            to: "/",
            exit: true
        });
    }


    render() {

        const {
            global
        } = this.props;

        console.log("LOGIN " + this.state.to)

        if (this.state.exit === true) {
            return <Redirect to={this.state.to} />
        }


        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={global.env.logo} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                {(global.user === "") ?
                    (<React.Fragment>
                        <div className="H-SS" />
                        <div className="w-100 ColorYellow display-4 m-3 text-center"><i><b>Prijava</b></i></div>
                        <div className="H-SS" />
                        <div className="m-3">
                            <div className="H-SS" />
                            <div className="d-flex flex-row justify-content-center">
                                <TextField value={this.state.username} onChange={(e) => this.handleChangeUsername(e)} label="Korisničko ime" />
                                <div className="W-SS" />
                                <TextField type="password" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} label="Lozinka" />
                            </div>
                            <div className="d-flex flex-row">
                                {this.state.textApprove}
                            </div>
                            <div className="H-SS" />
                            <div className="H-SS" />
                        </div>
                        <div className="m-3">
                            <div className="d-flex flex-row justify-content-center">
                                <ButtonOKCancel OK onClick={() => this.handleConnect()} />
                                <div className="W-SS"></div>
                                <ButtonOKCancel onClick={() => this.handleCancel()} />
                            </div>
                        </div>
                        <div className="H-SS" />
                        <div className="H-SS" />
                        <div className="H-SS ColorYellow w-100" />
                    </React.Fragment>) : (null)
                }
                {(global.user !== "") ?
                    (
                        (global.checkExistsPhase3(global.user.username)) ?
                            (<div className="d-flex flex-column w-100">

                                <React.Fragment>
                                    <NotOrderedItems toggle global={global} />
                                    <ButtonOKCancel center continues onClick={(e) => this.handleContinues(e)} />
                                </React.Fragment>
                            </div>) : (null)


                    ) : (null)
                }
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