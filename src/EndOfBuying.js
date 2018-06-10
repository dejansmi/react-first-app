import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderPage from './HeaderPage';
import Link from './Link';
import ping from './logo.png';
import Button from './Button';
import Basket from './Pictures/basket.jpg';
import OneClickCredit from './OneClickCredit';
import F from './F';
import BankingAccountPay from './BankingAccountPay';
import PayByCard from './PayByCard';


class EndOfBuying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            OneClickCreditClass: 'd-flex Container-Empty',
            OnLineCredit: false,
            PayByCard: false,
            exit: false,
            payed: 0,
            showBA: false
        }
        this.oneClickFinallyAccept = this.oneClickFinallyAccept.bind(this);
    }

    exit(e) {
        this.setState({
            exit: true
        });
    }

    // OCC OneClickCredit
    endOfBuyingOCC(e) {
        if (this.state.OneClickCreditClass === 'd-flex Container-Empty') {
            this.setState({
                OneClickCreditClass: 'd-none Container-Empty'
            });
        } else {
            this.setState({
                OneClickCreditClass: 'd-flex Container-Empty'
            });

        }
    }

    endOfBuyingBA(e) {
        this.setState({
            showBA: !this.state.showBA
        });

    }

    // OCC On-Line credit
    endOfBuyingOLC(e) {
        if (this.state.OnLineCredit) {
            this.setState({
                OnLineCredit: false
            });
        } else {
            this.setState({
                OnLineCredit: true
            });
        }
    }

    // PBC PayByCard
    endOfBuyingPBC(e) {
        if (this.state.PayByCard) {
            this.setState({
                PayByCard: false
            });
        } else {
            this.setState({
                PayByCard: true
            });
        }
    }
    // Teporary function in development phase
    endOfBuying(e) {
        console.log("EoB");
    }


    oneClickFinallyAccept2 = (payedAmmount, modeType) => {
        if (modeType === "ACCOUNT") {
            this.props.global.changeCurrentAccountBalance(-payedAmmount);
            this.oneClickFinallyAccept(payedAmmount);
        }
    }


    oneClickFinallyAccept = (payedAmmount) => {
        if ((this.props.global.basket - this.state.payed - payedAmmount).toFixed(2) === '0.00') {
            this.props.global.orderPayed();
            this.setState({
                payed: payedAmmount,
                OneClickCreditClass: 'd-none Container-Empty',
                exit: true
            });
        } else {
            this.setState({
                payed: payedAmmount
            });

        }
    }


    styleSize(lId) {
        this.x = window.innerWidth;
        this.y = window.innerHeight;

        if (lId === "Basket") {
            var wB;
            if (this.x < 576) {
                wB = this.x
            } else {
                wB = 500;
            }
            return {
                width: wB,
                maxWidth: wB,
                minWidth: wB,
                height: 'auto'
            }
        } else if (lId === "Paying") {
            var wP;
            if (this.x < 576) {
                wP = this.x
            } else {
                wP = 500;
            }
            return {
                width: wP,
                maxWidth: wP,
                minWidth: wP,
                height: 'auto'
            }
        } else if (lId === "Adress") {
            if (this.x < 576) {
                wP = this.x
            } else {
                wP = 500;
            }
            return {
                width: wP,
                maxWidth: wP,
                minWidth: wP,
                height: 'auto'
            }

        }

    }

    render() {


        if (this.state.exit === true) {
            return <Redirect to='/' />
        }

        const styleBasket = {
            maxWidth: '50px',
            maxHeight: '50px'
        }

        const styleBasketBigFont = {
            fontSize: '2em'
        }

        let BankingAccountClass = (this.state.showBA) ?
            ("Container-Empty h-auto d-flex") : ("d-none");


        const rowBasket = this.props.global.basketList.map(one =>
            <div className="d-flex flex-row justify-content-between">
                <div className="width-exact-50 ">{one.product.productName}</div>
                <div className="width-exact-10 text-right">{one.numberOfProduct}</div>
                <div className="width-exact-40 text-right"> <F f="$" a={one.ammount} /></div>
            </div>);

        const PayingClass = classNames(
            (this.props.global.user !== "") ? ('d-flex') : ('d-none'),
            'flex-column',
            "m-2"
        );

        const forPaying = Number((this.props.global.basket - this.state.payed).toFixed(2));

        const notLogged = () => (this.props.global.user === "") ?
            (<div className="Container-Empty d-flex m-2 w-100 h-auto">Niste ulogovani na sistem. U tom slučaju možete platiti samo karticom ili virmanom. Takođe
                na taj način gubite dodatne mogućnosti kao što je Program lojalnosti, ponavljanje kupovine, nagradne
                igre.
                Preporučujemo da se ulogujete ukoliko imate nalog na klik Prijava ili ukoliko nemate nalog Preporučujemo
                da ga otvorite klikom na Novi korisnik.
        </div>) : ("");

        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="Container-Empty d-flex flex-row flex-wrap m-3 justify-content-between">
                    <div style={this.styleSize("Basket")} className="d-flex flex-column">
                        <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                            <spam>Narudžbenica:</spam><spam>{this.props.global.basketOrder}</spam>
                        </div>
                        <div className="d-flex flex-row justify-content-between"><img style={styleBasket} className="img-fluid" src={Basket} alt="User" />
                            <div style={styleBasketBigFont}><F f='$' a={this.props.global.basket} /></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between ColorYellow">
                            <div>Naziv proizvoda</div><div>Komada</div><div>Iznos</div>
                        </div>
                        {rowBasket}
                        <Button className="ColorYellow " onClick={(e) => this.exit(e)}>Vrati se na kupovinu</Button>
                    </div>
                    <div style={this.styleSize("Adress")} classNames={PayingClass}>
                        <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                            <spam>Adrese</spam><spam></spam>
                        </div>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingOCC(e)}><b><i>Adresa za račun</i></b></Button>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingOCC(e)}><b><i>Adresa za isporuku</i></b></Button>
                    </div>
                    <div style={this.styleSize("Paying")} classNames={PayingClass}>
                        <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                            <spam>Za plaćanje:</spam><spam><F f="$0" a={forPaying} /></spam>
                        </div>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingOCC(e)}><b><i>OneClickCredit</i></b></Button>
                        <div className={this.state.OneClickCreditClass}>
                            {notLogged()}
                            <OneClickCredit ammount={this.props.global.basket} global={this.props.global} payingFunc={this.oneClickFinallyAccept} />
                        </div>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingOLC(e)}><b><i>On-line kredit</i></b></Button>
                        {(this.state.OnLineCredit) ?
                            (<div>{notLogged()}</div>) :
                            (null)}
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingBA(e)}><b><i>Sa tekućeg računa u Raiffeisen banci</i></b></Button>
                        {(this.state.showBA) ?
                            (<div className={BankingAccountClass}>
                                {notLogged()}
                                <BankingAccountPay global={this.props.global} payingFunc={this.oneClickFinallyAccept2} ammountPay={this.props.global.basket} />
                            </div>) :
                            (null)}
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingPBC(e)}><b><i>Platne kartice</i></b></Button>
                        {(this.state.PayByCard) ? 
                            (<div> <PayByCard /> </div>) :
                            (null)}
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>ePay Wallet</i></b></Button>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>Virmanom</i></b></Button>
                    </div>
                </div>

                <Link className="Container-Empty" small to="/">Home</Link>
            </div>
        )
    }
}

EndOfBuying.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

EndOfBuying.defaultProps = {
    tag: 'div'
};

export default EndOfBuying;