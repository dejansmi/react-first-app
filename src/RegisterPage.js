import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './Link';
import HeaderPage from './HeaderPage';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import ButtonOKCancel from './ButtonOKCancel';
import T from './T';



class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showROL: false,
            usernamePassword: true,
            approveMadeUser: false,
            phase: 0,
            username: "",
            password: "",
            textApprove: "",
            user: this.props.global.user,
            exit: false
        };
        this.handleROLClick = this.handleROLClick.bind(this);
        this.handleROLConnect = this.handleROLConnect.bind(this);
        this.handleROLCancel = this.handleROLCancel.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleROLClick(e) {
        this.setState({
            showROL: true,
            usernamePassword: true,
            approveMadeUser: false,
            phase: 0,
            username: "",
            textApprove: ""
        });
    }

    handleROLConnect(e) {
        if (this.state.password !== "a" && this.state.password !== "A") return;
        if (this.state.phase === 0) {
            if (this.state.username === "dejansm") {
                this.setState({
                    showROL: true,
                    usernamePassword: false,
                    approveMadeUser: true,
                    phase: 1,
                    textApprove: this.props.global.t("RegisterPage.usernameCorrect")
                });
            } else {
                this.setState({
                    showROL: true,
                    usernamePassword: false,
                    approveMadeUser: true,
                    phase: 2,
                    textApprove: this.props.global.t("RegisterPage.usernameFaild")
                });

            }
        } else if (this.state.phase === 1) {
            this.props.global.setUser(e, this.state.username, "NewUserROL");
            this.setState({
                showROL: false,
                usernamePassword: true,
                approveMadeUser: false,
                phase: 0,
                textApprove: "",
                exit: true
            });
        } else if (this.state.phase === 2) {
            this.setState({
                showROL: true,
                usernamePassword: true,
                approveMadeUser: false,
                phase: 0,
                textApprove: ""
            });

        }
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }


    handleROLCancel(e) {
        this.setState({ showROL: false });
    }

    handleExit(e) {
        this.setState({ exit: true });
    }




    render() {


        const {
            global
        } = this.props;

        
        const ROL = classNames(
            this.state.showROL ? 'd-flex' : '',
            'flex-column',
            'm-3',
            this.state.showROL ? '' : 'd-none'
        )

        const UserPass = classNames(
            this.state.usernamePassword ? 'd-flex' : '',
            'flex-row',
            this.state.usernamePassword ? '' : 'd-none',
            'justify-content-center'
        )

        const ApproveMadeUser = classNames(
            this.state.approveMadeUser ? 'd-flex' : '',
            'flex-row',
            this.state.approveMadeUser ? '' : 'd-none'
        )

        if (this.state.exit === true) {
            return <Redirect to='/' />
        }


        return (

            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={global.env.logo} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="Container-Empty m-2">
                    <h1 className="d-flex w-100 justify-content-center "><b><T id="RegisterPage.newUser" global={global}/></b></h1>
                    <p><T id="RegisterPage.newUser3Way" global={global}/></p>
                    <p><T id="RegisterPage.newUserIfYouHaveOnLine" tenant global={global}/></p>
                    <p><T id="RegisterPage.newUserYourEmail" global={global}/></p>
                    <p><T id="RegisterPage.newUserWithoutEmail" global={global}/>
                    </p>
                    <p><T id="RegisterPage.newUserContinue" global={global}/>
                    </p>
                </div>
                <div className="Container-Empty h-100  d-flex flex-row flex-wrap O-X O-Y m-3">
                    <div className="col-sm-12 d-flex justify-content-between flex-wrap">
                        <Button className="ColorYellow col-sm-auto col-12 col-sm-6 col-md-5 col-lg-4" onClick={() => this.handleROLClick()}><T id="RegisterPage.useOnLine" global={global}/></Button>
                        <Button className="ColorYellow col-sm-auto col-12 col-sm-6 col-md-5 col-lg-4"><T id="RegisterPage.useEmail" global={global}/></Button>
                    </div>
                    <div className="col-sm-9"></div>
                    <div className="col-sm-12 d-flex justify-content-between flex-wrap">
                        <Button className="ColorYellow col-sm-auto col-12 col-sm-6 col-md-5 col-lg-4"><T id="RegisterPage.newUsername" global={global}/></Button>
                        <Button className="ColorYellow col-sm-auto col-12 col-sm-6 col-md-5 col-lg-4" onClick={() => this.handleExit()}><T id="RegisterPage.unregistredUser" global={global}/></Button>
                    </div>
                </div>
                <div className={ROL} >
                    <div className="H-SS" />
                    <div className="w-100 ColorYellow display-4 text-center"><i><b><T id="RegisterPage.onLineSystem" global={global}/></b></i></div>
                    <div className="H-SS" /><div>
                        <div className="H-SS" />
                        <div className={UserPass}>
                            <TextField value={this.state.username} onChange={this.handleChangeUsername} label={global.t("LoginPage.userName")} />
                            <div className="W-SS" />
                            <TextField type="password" value={this.state.password} onChange={this.handleChangePassword} label={global.t("LoginPage.password")} />
                        </div>
                        <div className={ApproveMadeUser}>
                            {this.state.textApprove}
                        </div>
                        <div className="H-SS" />
                        <div className="H-SS" />
                    </div>
                    <div>
                        <div className="d-flex flex-row">
                            <ButtonOKCancel center both global={this.props.global} onClickOK={() => this.handleROLConnect()} onClickCancel={() => this.handleROLCancel()}/>
                        </div>
                    </div>
                    <div className="H-SS" />
                    <div className="H-SS" />
                    <div className="H-SS ColorYellow w-100" />

                </div>


                <Link className="Container-Empty" small to="/">Home</Link>
            </div>
        )
    }
}

RegisterPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

RegisterPage.defaultProps = {
    tag: 'div'
};

export default RegisterPage;