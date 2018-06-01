import React from 'react';
import { Router, Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavLink from './NavLink';
import Link from './Link';
import ping from './logo.png';
import HeaderPage from './HeaderPage'
import sliceOfImg from './State';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import App from './App'
import './App.css';



class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showROL: false,
            usernamePassword: true,
            approveMadeUser: false,
            phase: 0,
            username: "",
            textApprove: "",
            user: this.props.global.user,
            exit: false
        };
        this.handleROLClick = this.handleROLClick.bind(this);
        this.handleROLConnect = this.handleROLConnect.bind(this);
        this.handleROLCancel = this.handleROLCancel.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);

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
        if (this.state.phase == 0) {
            if (this.state.username == "dejansm") {
                this.setState({
                    showROL: true,
                    usernamePassword: false,
                    approveMadeUser: true,
                    phase: 1,
                    textApprove: "Korisničko ime je slobodno. Kada potvrdite odluku pritiskom na taster Može, potvrđujete kreiranje naloga u eDigiComm sistemu \
                    sa istim korisničkim imenom kao i Raiffeisen On-Line sistemu. I ubuduće će logovanje na sistem \
                    eDigiComm u stvari biti logovanje na ROL pa je lozinka u stvari ista."
                });
            } else {
                this.setState({
                    showROL: true,
                    usernamePassword: false,
                    approveMadeUser: true,
                    phase: 2,
                    textApprove: "Korisničko ime koje ste uneli nije ispravno. Korigujte unos pritiskom na taster Može "
                });

            }
        } else if (this.state.phase == 1) {
            this.props.global.setUser(e, this.state.username,"NewUserROL");
            this.setState({
                showROL: false,
                usernamePassword: true,
                approveMadeUser: false,
                phase: 0,
                textApprove: "",
                exit: true
            });
        } else if (this.state.phase == 2) {
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

    handleROLCancel(e) {
        this.setState({ showROL: false });
    }





    render() {
        const ROL = classNames(
            this.state.showROL ? 'd-flex' : '',
            'flex-column',
            this.state.showROL ? '' : 'd-none'
        )

        const UserPass = classNames(
            this.state.usernamePassword ? 'd-flex' : '',
            'flex-row',
            this.state.usernamePassword ? '' : 'd-none'
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
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>

                <p className="d-flex w-100 justify-content-center"><h1><b>Novi korisnik</b></h1></p>
                <p>Da biste postali novi korisnik, to možete uraditi na 3 načina:</p>
                <p>1. Ukoliko imate Raiffeisen ON-LINE, možete se ulogovati kroz on-line sistem, i
                   i tada ćeto dobiti username isti kao u ROL ukoliko nije zauzet. Ukoliko nije moguće možete birati username.
                   Ukoliko izabere ovaj način stičete pravo razne pogodnosti, kao što je plaćanje direktno sa tekućeg računa po vrlo povoljnim uslovima</p>
                <p>2. Vaš email je username. U ovom slučaju potrebno je da posedujete liči email (email koji samo vi koristite)</p>
                <p>3. Ukoliko ne posedujete email, a posedujete mobilni telefon možete otvoriti nalog u kome birate slobodan (da neko
                    nije već iskoristio) username
                </p>
                <p> Takođe možete nastaviti da koristite sistem i bez registracije ali u tom slučaju gubite veliku
                    pogodnost sistema vernosti (loyalty system) koji Vam donosi velike uštede i pododnosti
                </p>
                <div className="Container-Empty h-100  d-flex flex-row flex-wrap O-X O-Y">
                    <div className="col-md-9 col-sm-12 d-flex justify-content-between flex-wrap">
                        <Button className="ColorYellow col-sm-auto col-12" onClick={() => this.handleROLClick()}>Koristite Raiffeisen ON-LINE</Button>
                        <Button className="ColorYellow col-sm-auto col-12">Koristite email kao username</Button>
                    </div>
                    <div className="col-sm-9"></div>
                    <div className="col-md-9 col-sm-12 d-flex justify-content-between flex-wrap">
                        <Button className="ColorYellow col-sm-auto col-12">Napravite novi username</Button>
                        <Button className="ColorYellow col-sm-auto col-12">Nastavite kao neregistrovani koirsnik</Button>
                    </div>
                </div>
                <div className={ROL} >
                    <div className="H-SS" />
                    <div className="w-100 ColorYellow display-4"><i><b>Raiffeisen On-Line</b></i></div>
                    <div className="H-SS" />
                    <div>
                        <div className="H-SS" />
                        <div className={UserPass}>
                            <TextField value={this.state.username} onChange={this.handleChangeUsername} defaultValue="" label="Korisničko ime" />
                            <div className="W-SS" />
                            <TextField type="password" defaultValue="" label="Lozinka" />
                        </div>
                        <div className={ApproveMadeUser}>
                            {this.state.textApprove}
                        </div>
                        <div className="H-SS" />
                        <div className="H-SS" />
                    </div>
                    <div>
                        <div className="d-flex flex-row">
                            <Button className="ColorYellow col-4 col-sm-1" onClick={() => this.handleROLConnect()}>Može</Button>
                            <div className="W-SS"></div>
                            <Button className="ColorYellow col-4 col-sm-1" onClick={() => this.handleROLCancel()}>Odustani</Button>
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