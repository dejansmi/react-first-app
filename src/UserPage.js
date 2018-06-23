import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderPage from './HeaderPage';
import ping from './logo.png';
import F from './F';
import TextField from '@material-ui/core/TextField';
import ButtonToggleDiv from './ButtonToggleDiv';


class UserPage extends React.Component {
    constructor(props) {
        super(props);
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
            address: this.props.global.user.address,
            houseNumber:  this.props.global.user.houseNumber,
            city:  this.props.global.user.city
        }
        this.oneClickFinallyAccept = this.oneClickFinallyAccept.bind(this);
        this.handleNoteContent = this.handleNoteContent.bind(this);
        this.handleCommentContent = this.handleCommentContent.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleHouseNumber = this.handleHouseNumber.bind(this);
        this.handleCity = this.handleCity.bind(this);
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

    handleAddress(e) {
        this.setState ({
            address: e.target.value
        });
    }
    handleHouseNumber(e) {
        this.setState ({
            houseNumber: e.target.value
        });
    }
    handleCity(e) {
        this.setState ({
            city: e.target.value
        });
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

        const {
            global
        } = this.props;


        const styleBasketBigFont = {
            fontSize: '2em'
        }

        let BankingAccountClass = (this.state.showBA) ?
            ("Container-Empty h-auto d-flex") : ("d-none");



        const PayingClass = classNames(
            (this.props.global.user !== "") ? ('d-flex') : ('d-none'),
            'flex-column',
            "m-2"
        );

        const neisporuceneNarudzbineTable =
            (global.user !== "" && global.ordersNotDelivered !== undefined &&
                (global.ordersNotDelivered[global.user.username] !== undefined)) ?
                (<table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Datum</th>
                            <th scope="col">Proizvod</th>
                            <th scope="col">Isporučilac</th>
                            <th scope="col">Kom</th>
                            <th scope="col">Faza</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(global.ordersNotDelivered[global.user.username]).map((key) =>

                            <tr>
                                <th scope="row"><F f="date" a={global.ordersNotDelivered[global.user.username][key].date} /></th>
                                <td>{global.ordersNotDelivered[global.user.username][key].productName}</td>
                                <td>{global.ordersNotDelivered[global.user.username][key].courier}</td>
                                <td>{global.ordersNotDelivered[global.user.username][key].quantity}</td>
                                <td>{global.ordersNotDelivered[global.user.username][key].deliveryPhase}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                ) : (null);

        const narudzbineTable = (global.user !== "" && global.basketHistory !== undefined &&
            (global.basketHistory[global.user.username] !== undefined)) ?
            (
                <table className="table table-sm col-12 O-X O-Y">
                    <thead className="col-12">
                        <tr className="col-12">
                            <th width="20%" scope="col">Datum</th>
                            <th width="5%" scope="col"></th>
                            <th width="30%" scope="col">Broj narudžbe</th>
                            <th width="10%" scope="col"></th>
                            <th width="30%" scope="col">Cena</th>
                        </tr>
                    </thead>
                    <tbody className="col-12">
                        {Object.keys(global.basketHistory[global.user.username]).map((key) =>
                            [
                                <tr className="col-12">
                                    <th scope="row"><F f="date" a={global.basketHistory[global.user.username][key].date} /></th>
                                    <td></td>
                                    <td>{key}</td>
                                    <td></td>
                                    <td><F f="$0" a={global.basketHistory[global.user.username][key].ammount} />&ensp;{global.basketHistory[global.user.username][key].currency}</td>
                                </tr>,

                                (global.basketHistory[global.user.username][key].basketList !== undefined) ? (
                                    Object.keys(global.basketHistory[global.user.username][key].basketList).map((index) =>
                                        <tr>
                                            <td> {global.basketHistory[global.user.username][key].basketList[index].productName}</td>
                                            <th scope="row" >#</th>
                                            <td> {global.basketHistory[global.user.username][key].basketList[index].company}</td>
                                            <td className="col-6"> {global.basketHistory[global.user.username][key].basketList[index].quantity}</td>
                                            <td> <F f="$0" a={global.basketHistory[global.user.username][key].basketList[index].totalPrice} /></td>
                                        </tr>

                                    )) : (null)
                            ]
                        )}
                    </tbody>
                </table>
            ) : (null);




        const forPaying = Number((this.props.global.basket - this.state.payed).toFixed(2));

        const notLogged = () => (this.props.global.user === "") ?
            (<div className="Container-Empty d-flex m-2 w-100 h-auto">Niste ulogovani na sistem. U tom slučaju možete platiti samo karticom ili virmanom. Takođe
                na taj način gubite dodatne mogućnosti kao što je Program lojalnosti, ponavljanje kupovine, nagradne
                igre.
                Preporučujemo da se ulogujete ukoliko imate nalog na klik Prijava ili ukoliko nemate nalog Preporučujemo
                da ga otvorite klikom na Novi korisnik.
        </div>) : ("");




        return (
            <div className="Container-Empty h-100 w-100 " >
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="d-flex flex-column m-2">
                    <div className="d-flex flex-row">
                        <div style={{ minWidth: "256px", maxWidth: "256px", maxHeight: "256px" }} className="O-X O-Y ">
                            <img className="img-fluid" src={this.props.global.user.image} alt="User" onClick={this.handleUserData} />
                        </div>
                        <div className="m-3 d-flex flex-column">
                            <h3><b>{global.user.name}</b></h3>
                            <h6>{global.user.address}&ensp;{global.user.houseNumber}</h6>
                            <h6>{global.user.city}</h6>
                        </div>
                    </div>
                    <div>
                        <div className="Container-Empty d-flex flex-row flex-wrap m-3 justify-content-between">

                            <div style={this.styleSize("Address")} classNames={PayingClass}>
                                <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                                    <spam>Kupovine</spam><spam></spam>
                                </div>
                                <ButtonToggleDiv className="O-X O-Y" name="Neisporučene narudžbine">
                                    {neisporuceneNarudzbineTable}
                                </ButtonToggleDiv>
                                <ButtonToggleDiv className="O-X O-Y" name="Narudžbine">
                                    {narudzbineTable}
                                </ButtonToggleDiv>
                            </div>
                            <div style={this.styleSize("Paying")} classNames={PayingClass}>
                                <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                                    <spam>Podešavanja</spam>
                                </div>
                                <ButtonToggleDiv className="O-X O-Y" name="Adresa">
                                    <TextField className="w-100" value={this.state.address} onChange={this.handleAddress} label="Adresa" />
                                    <TextField className="w-100" value={this.state.houseNumber} onChange={this.handleHouseNumber} label="Kućni broj" />
                                    <TextField className="w-100" value={this.state.city} onChange={this.handleCity} label="Mesto" />
                                </ButtonToggleDiv>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UserPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

UserPage.defaultProps = {
    tag: 'div'
};

export default UserPage;