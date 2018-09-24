import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderPage from './HeaderPage';
import F from './F';
import TextField from '@material-ui/core/TextField';
import ButtonToggleDiv from './ButtonToggleDiv';
import './UserPage.css';
import NotOrderedItems from './NotOrderedItems';
import T from './T';
import Select from './Select';


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
            orderderToMe: false,
            changePhase3: false,
            ordersNotDelivered: "",
            infoPhases: false,
            showBA: false,
            note: true,
            noteContent: "",
            comment: true,
            commentContent: "",
            address: this.props.global.user.address,
            houseNumber: this.props.global.user.houseNumber,
            city: this.props.global.user.city,
            email: this.props.global.user.email,
            mobile: this.props.global.user.mobile
        }
        this.oneClickFinallyAccept = this.oneClickFinallyAccept.bind(this);
        this.handleNoteContent = this.handleNoteContent.bind(this);
        this.handleCommentContent = this.handleCommentContent.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleHouseNumber = this.handleHouseNumber.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
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
        this.setState({
            address: e.target.value
        });
    }
    handleHouseNumber(e) {
        this.setState({
            houseNumber: e.target.value
        });
    }
    handleCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    handleMobile(e) {
        this.setState({
            mobile: e.target.value
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
            this.props.global.ShowScreenMessage(global.t(UserPage.payingMessage), 'success');
        } else if (modeType === "CARD") {
            this.props.global.addComment(this.props.global.user.name, this.props.global.user.city, this.state.commentContent);
            this.oneClickFinallyAccept(payedAmmount);
            this.props.global.ShowScreenMessage(global.t(UserPage.payingMessage), 'success');
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
            } else if (this.x < 801) {
                wP = 400;
            } else {
                wP = Math.trunc(this.x / 2 - 50);
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
            } else if (this.x < 801) {
                wP = 400;
            } else {
                wP = Math.trunc(this.x / 2 - 50);
            }
            return {
                width: wP,
                maxWidth: wP,
                minWidth: wP,
                height: 'auto'
            }


        }

    }

    handleLang(e) {
        this.props.global.setLang(this.props.global.user.username, e.target.value);
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




        const PayingClass = classNames(
            (this.props.global.user !== "") ? ('d-flex') : ('d-none'),
            'flex-column',
            "m-2"
        );




        const narudzbineTable = (global.user !== "" && global.basketHistory !== undefined &&
            (global.basketHistory[global.user.username] !== undefined)) ?
            (
                <table className="table table-sm col-12 O-X O-Y">
                    <thead className="col-12">
                        <tr className="col-12">
                            <th width="20%" scope="col"><T id="UserPage.tableDate" global={global}/></th>
                            <th width="5%" scope="col"></th>
                            <th width="30%" scope="col"><T id="UserPage.tableOrderNumber" global={global}/></th>
                            <th width="10%" scope="col"></th>
                            <th width="30%" scope="col"><T id="UserPage.tablePrice" global={global}/></th>
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


        const selectLang = () => {
            let lLang = [{ value: 'en', label: 'English' },
                         { value: 'sr', label: 'Srpski' }];
            return lLang;
        };


        return (
            <div className="Container-Empty h-100 w-100 " >
                <HeaderPage bankLogo={global.env.logo} imgList={this.props.global.imgList} {...this.props} value="" />
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
                        <div className="m-3 d-flex flex-column">
                            <h3><b><T id="UserPage.contacts" global={global}/></b></h3>
                            <h6>{global.user.email}</h6>
                            <h6>{global.user.mobile}</h6>
                        </div>
                    </div>
                    <div>
                        <div className="Container-Empty d-flex flex-row flex-wrap m-3 justify-content-between">

                            <div style={this.styleSize("Address")} classNames={PayingClass}>
                                <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                                    <spam><T id="UserPage.shopping" global={global}/> </spam><spam></spam>
                                </div>
                                <NotOrderedItems global={global} />
                                <ButtonToggleDiv className="O-X O-Y" name={global.t("UserPage.orders")}>
                                    {narudzbineTable}
                                </ButtonToggleDiv>
                            </div>
                            <div style={this.styleSize("Paying")} classNames={PayingClass}>
                                <div style={styleBasketBigFont} className="d-flex flex-row justify-content-between">
                                    <spam>{global.t("UserPage.settings")}</spam>
                                </div>
                                <ButtonToggleDiv className="O-X O-Y" name={global.t("UserPage.contacts")}>
                                    <TextField className="w-100" value={this.state.email} onChange={this.handleEmail} label={global.t("UserPage.email")} />
                                    <TextField className="w-100" value={this.state.mobile} onChange={this.handleMobile} label={global.t("UserPage.mobileNumber")} />
                                </ButtonToggleDiv>
                                <ButtonToggleDiv className="O-X O-Y" name={global.t("UserPage.address")}>
                                    <TextField className="w-100" value={this.state.address} onChange={this.handleAddress} label={global.t("UserPage.address")} />
                                    <TextField className="w-100" value={this.state.houseNumber} onChange={this.handleHouseNumber} label={global.t("UserPage.houseNumber")} />
                                    <TextField className="w-100" value={this.state.city} onChange={this.handleCity} label={global.t("UserPage.city")} />
                                </ButtonToggleDiv>
                                <ButtonToggleDiv className="O-X O-Y" name={global.t("UserPage.parameters")}>
                                    <T id="UserPage.lang" global={global}/> <Select className="col-2" value={global.user.lang} label={global.t("UserPage.langChoose")} options={selectLang()} onChange={(e) => this.handleLang(e)} />
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