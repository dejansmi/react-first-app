import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderPage from './HeaderPage';
import ping from './logo.png';
import Button from './Button';
import Basket from './Pictures/basket.jpg';
import OneClickCredit from './OneClickCredit';
import F from './F';
import BankingAccountPay from './BankingAccountPay';
import PayByCard from './PayByCard';
import TextField from '@material-ui/core/TextField';
import ButtonToggleDiv from './ButtonToggleDiv';



class EndOfBuying extends React.Component {
    constructor(props) {
        super(props);
        let billAddress, billHouseNumber, billCity;
        let delAddress, dellHouseNumber, delCity;
        if (this.props.global.user === "") {
            billAddress = "";
            billHouseNumber = "";
            billCity = "";
            delAddress = "";
            dellHouseNumber = "";
            delCity = "";
        } else {
            billAddress = this.props.global.user.address;
            billHouseNumber = this.props.global.user.houseNumber;
            billCity = this.props.global.user.city;
            delAddress = this.props.global.user.address;
            dellHouseNumber = this.props.global.user.houseNumber;
            delCity = this.props.global.user.city;
        }
        this.state = {
            global: this.props.global,
            OneClickCreditClass: 'd-flex Container-Empty',
            OnLineCredit: false,
            PayByCard: false,
            exit: false,
            payed: 0,
            showBA: false,
            note: true,
            noteContent: "",
            comment: true,
            commentContent: "",
            billAddress: billAddress,
            billHouseNumber: billHouseNumber,
            billCity: billCity,
            deliveryAddress: delAddress,
            deliveryHouseNumber: dellHouseNumber,
            deliveryCity: delCity
        }
        this.oneClickFinallyAccept = this.oneClickFinallyAccept.bind(this);
        this.handleNoteContent = this.handleNoteContent.bind(this);
        this.handleCommentContent = this.handleCommentContent.bind(this);
        this.handleBillAddress = this.handleBillAddress.bind(this);
        this.handleBillHouseNumber = this.handleBillHouseNumber.bind(this);
        this.handleBillCity = this.handleBillCity.bind(this);
        this.handleDeliveryAddress = this.handleDeliveryAddress.bind(this);
        this.handleDeliveryHouseNumber = this.handleDeliveryHouseNumber.bind(this);
        this.handleDeliveryCity = this.handleDeliveryCity.bind(this);
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

    endOfBuyingNote(e) {
        this.setState({
            hote: !this.state.note
        });
    }

    endOfBuyingComment(e) {
        this.setState({
            comment: !this.state.comment
        });
    }

    handleNoteContent(e) {
        this.setState({
            noteContent: e.target.value
        });
    }
    handleCommentContent(e) {
        if (e.target.value.length < 140) {
            this.setState({
                commentContent: e.target.value
            });
        }
    }


    oneClickFinallyAccept2 = (payedAmmount, modeType) => {
        if (modeType === "ACCOUNT") {
            this.props.global.changeCurrentAccountBalance(-payedAmmount);
            this.props.global.addComment(this.props.global.user.name, this.props.global.user.city, this.state.commentContent);
            this.oneClickFinallyAccept(payedAmmount);
            this.props.global.ShowScreenMessage("Plaćanje je uspešno izvršeno. Možete pratiti tok isporuke. Hvala.", 'success');
        } else if (modeType === "CARD") {
            this.props.global.addComment(this.props.global.user.name, this.props.global.user.city, this.state.commentContent);
            this.oneClickFinallyAccept(payedAmmount);
            this.props.global.ShowScreenMessage("Plaćanje je uspešno izvršeno. Možete pratiti tok isporuke. Hvala.", 'success');
        } else if (modeType === "ONECLICKCREDIT") {
            this.props.global.addComment(this.props.global.user.name, this.props.global.user.city, this.state.commentContent);
            this.oneClickFinallyAccept(payedAmmount);
            this.props.global.ShowScreenMessage("Plaćanje je uspešno izvršeno. Možete pratiti tok isporuke. Hvala.", 'success');
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



    handleBillAddress(e) {
        this.setState({
            billAddress: e.target.value
        });
    }
    handleBillHouseNumber(e) {
        this.setState({
            billHouseNumber: e.target.value
        });
    }
    handleBillCity(e) {
        this.setState({
            billCity: e.target.value
        });
    }
    handleDeliveryAddress(e) {
        this.setState({
            deliveryAddress: e.target.value
        });
    }
    handleDeliveryHouseNumber(e) {
        this.setState({
            deliveryHouseNumber: e.target.value
        });
    }
    handleDeliveryCity(e) {
        this.setState({
            deliveryCity: e.target.value
        });
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
        } else if (lId === "Address") {
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

        const reference = () => <spam>{this.props.global.getRandomInt(100)}-{this.props.global.basketOrder}</spam>;


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
                    <div style={this.styleSize("Address")} classNames={PayingClass}>
                        <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                            <spam>Adrese</spam><spam></spam>
                        </div>
                        <ButtonToggleDiv name="Adresa za račun" >
                            <TextField className="w-100" value={this.state.billAddress} onChange={this.handleBillAddress} label="Adresa" />
                            <TextField className="w-100" value={this.state.billHouseNumber} onChange={this.handleBillHouseNumber} label="Kućni broj" />
                            <TextField className="w-100" value={this.state.billCity} onChange={this.handleBillCity} label="Grad" />
                        </ButtonToggleDiv>
                        <ButtonToggleDiv name="Adresa za isporuku" >
                            <TextField className="w-100" value={this.state.deliveryAddress} onChange={this.handleDeliveryAddress} label="Adresa" />
                            <TextField className="w-100" value={this.state.deliveryHouseNumber} onChange={this.handleDeliveryAddress} label="Kućni broj" />
                            <TextField className="w-100" value={this.state.deliveryCity} onChange={this.handleDeliveryCity} label="Grad" />
                        </ButtonToggleDiv>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingNote(e)}><b><i>Napomena</i></b></Button>
                        {(this.state.note) ?
                            (<TextField multiline className="w-100" value={this.state.noteContent} onChange={this.handleNoteContent} label="" />
                            ) : (null)}
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingComment(e)}><b><i>Komentar</i></b></Button>
                        {(this.state.comment) ?
                            ((this.props.global.user !== "") ? (<TextField multiline className="w-100" value={this.state.commentContent} onChange={this.handleCommentContent} label="" />
                            ) : (<div>
                                Komentare mogu da ostavljaju samo korisnici koji su prijavljeni na sistem. Preporučujemo prijavu
                                na sistem jer tako mozete ostvariti dodatne beneficije.
                                </div>
                                )) : (null)}
                    </div>
                    <div style={this.styleSize("Paying")} classNames={PayingClass}>
                        <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                            <spam>Za plaćanje:</spam><spam><F f="$0" a={forPaying} /></spam>
                        </div>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuyingOCC(e)}><b><i>OneClickCredit</i></b></Button>
                        <div className={this.state.OneClickCreditClass}>
                            {notLogged()}
                            <OneClickCredit ammount={this.props.global.basket} global={this.props.global} payingFunc={this.oneClickFinallyAccept2} />
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
                            (<div className="d-flex p-2"> <PayByCard payingFunc={this.oneClickFinallyAccept2} ammountPay={this.props.global.basket} global={this.props.global} /> </div>) :
                            (null)}
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>ePay Wallet</i></b></Button>
                        <ButtonToggleDiv name="Virman" >
                            <div className="d-flex flex-column w-100">
                                <div>
                                    Broj računa: <b>{this.props.global.virman.currentAccount}</b><br />
                                    Poziv na broj: 97-<b>{reference()}</b><br />
                                    Šifra plaćanja: 289<br />
                                    Svrha: Plaćanje po narudžbenici broj {this.props.global.basketOrder}<br />
                                    Iznos: <b><F f='$' a={this.props.global.basket} /></b><br />
                                </div>
                            </div>
                        </ButtonToggleDiv>
                    </div>
                </div>
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