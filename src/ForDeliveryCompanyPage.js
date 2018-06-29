import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import './ForPackagingCompanyPage.css';
import ProtoFormCompany from './ProtoFormCompany';
import F from './F';
import CheckBox from "./CheckBox";
import Button from './Button';
import Select from './Select';
import ButtonOKCancel from './ButtonOKCancel';

class ForDeliveryCompanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.to = "/";
        this.courier = "";
        this.state = {
            checkBoxRow: [],
            packageId: "",
            checkAll: false,
            phase: '0',
            to: "/",
            exit: false
        }

    }

    handleOnClickMenu = (e, url) => {
        this.to = url;
        this.setState({
            to: url,
            exit: true
        });
    }

    handleCheckBox(e, keyRow, keyUser) {
        var checkBoxRow;
        checkBoxRow = this.state.checkBoxRow;
        if (checkBoxRow[keyRow] === undefined) {
            checkBoxRow[keyRow] = {
                checked: false,
                keyUser: keyUser
            }
        }
        checkBoxRow[keyRow].checked = !checkBoxRow[keyRow].checked;
        this.setState({
            checkBoxRow: checkBoxRow
        });
    }

    setCheckBox(keyRow, keyUser) {
        var checkBoxRow;
        checkBoxRow = this.state.checkBoxRow;
        if (checkBoxRow[keyRow] === undefined) {
            checkBoxRow[keyRow] = {
                checked: false,
                keyUser: keyUser
            }

            this.setState({
                checkBoxRow: checkBoxRow
            });
        }
        return null;
    }

    handleCourier(e) {
        this.courier = e.target.value;
    }

    handleCheckBoxAll(e) {
        var checkBoxRow;
        checkBoxRow = this.state.checkBoxRow;
        Object.keys(checkBoxRow).map((key) => {
            checkBoxRow[key].checked = !this.state.checkAll;
            return true;
        })
        this.setState({
            checkAll: !this.state.checkAll,
            checkBoxRow: checkBoxRow
        });

    }

    backtophaseA(e) {
        this.setState({
            phase: 'A'
        });
    }


    handlePhase0toA(e) {
        if (this.courier === "") return;
        this.setState({
            phase: 'A'
        });

    }


    handlePhaseAtoB(e) {
        let packageId;
        if (this.state.phase === 'A') {
            if (this.state.packageId === "") {
                packageId = this.props.global.getRandomInt(1000) + "-" + this.props.global.getRandomInt(1000);
            }
            this.setState({
                packageId: packageId,
                checkBoxRow: this.state.checkBoxRow,
                phase: 'B'
            });
        }
    }

    handlePhaseBtoC(e) {
        if (this.courier === "") return true;
        Object.keys(this.state.checkBoxRow).map((key) =>
            (this.state.checkBoxRow[key].checked) ?
                (this.props.global.changeDeliveryPhase(this.state.checkBoxRow[key].keyUser, key, 1, 2, undefined, undefined)) : (null));
        this.setState({
            phase: 'C'
        });
    }



    render() {

        if (this.state.exit === true) {
            return <Redirect to={this.state.to} />
        }


        const {
            global,
            title
        } = this.props;

        const company = global.user.company;

        const selectCourier = () => {
            let lCouriers = [];
            if (global.company[company].delivery) {
                lCouriers.push({ value: company, label: global.company[company].name })
            }
            Object.keys(global.company[company].couriers).map((key) => {
                let courierId;
                courierId = global.company[company].couriers[key];
                lCouriers.push({ value: courierId, label: global.company[courierId].name })
                return true;
            });
            return lCouriers;
        };


        const checked = (key) => (this.state.checkBoxRow[key] !== undefined) ?
            (this.state.checkBoxRow[key].checked) : (false);

        return (
            <ProtoFormCompany title={title} className="d-flex flex-column" global={this.props.global}>
                {(this.state.phase === '0') ?
                    (
                        <div className="w-100 d-inline" >
                            Izaberite za kog distributera želite da pravite nalog za isporuku<br />
                            Kurir/Distributer <Select className="col-6" label="Izaberite distributera/kurira" options={selectCourier()} onChange={(e) => this.handleCourier(e)} />
                            <ButtonOKCancel both secondColor center onClickCancel={(e) => this.handleOnClickMenu(e, '/company/admin')} onClickOK={(e) => this.handlePhase0toA(e)} />
                        </div>
                    ) : (null)
                }
                {(this.state.phase === 'A') ?
                    (<div className="d-flex flex-row Search-Div O-Y">
                        <CheckBox checked={this.state.checkAll} onChange={(e) => this.handleCheckBoxAll(e)} />&ensp;&ensp;&ensp;
                    <i className="material-icons align-self-center" onClick={this.startSearch}>{global.searchButton}</i>
                        <input className="Search-Input" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Unesite parametre za pretragu" />
                        <Button className="h-100 align-middle" size="sm" onClick={(e) => this.handlePhaseAtoB(e)}>Napravi nalog</Button>
                    </div>) : (null)}
                {(this.state.phase === 'A') ?
                    (<div className="d-flex flex-column ">
                        {Object.keys(global.ordersNotDelivered).map((keyUser) =>
                            <div className="d-flex flex-column ">
                                {Object.keys(global.ordersNotDelivered[keyUser]).map((key) =>
                                    (global.user.company === global.ordersNotDelivered[keyUser][key].company && global.ordersNotDelivered[keyUser][key].deliveryPhase === 1
                                        && global.ordersNotDelivered[keyUser][key].courier === this.courier) ? (
                                            <div className="d-flex flex-row flex-wrap Products-Table align-items-center">
                                                {this.setCheckBox(global.ordersNotDelivered[keyUser][key].deliveryId, keyUser)}
                                                <CheckBox checked={checked(global.ordersNotDelivered[keyUser][key].deliveryId)} onChange={(e) => this.handleCheckBox(e, global.ordersNotDelivered[keyUser][key].deliveryId)} />&ensp;&ensp;&ensp;
                                            <span> Naziv proizvoda: <b>{global.ordersNotDelivered[keyUser][key].productName}</b></span>&ensp;&ensp;&ensp;
                                            <span> Šifra proizvoda: <b>{global.ordersNotDelivered[keyUser][key].productId}</b></span>&ensp;&ensp;&ensp;
                                            <span> Količina: <b>{global.ordersNotDelivered[keyUser][key].quantity}</b></span>&ensp;&ensp;&ensp;
                                            <span> Broj porudžbe: {global.ordersNotDelivered[keyUser][key].orderId}</span>&ensp;&ensp;&ensp;
                                            <span> Ime i prezime: {global.ordersNotDelivered[keyUser][key].name}</span>&ensp;&ensp;&ensp;
                                            <span> Datum: <F f="date" a={global.ordersNotDelivered[keyUser][key].date} /></span>&ensp;&ensp;&ensp;
                                            <span> Adresa: {global.ordersNotDelivered[keyUser][key].address}</span>&ensp;
                                            <span>{global.ordersNotDelivered[keyUser][key].houseNumber}</span>&ensp;&ensp;&ensp;
                                            <span> Grad: {global.ordersNotDelivered[keyUser][key].city}</span>&ensp;&ensp;&ensp;
                                            <span> Broj poružbe: {global.ordersNotDelivered[keyUser][key].deliveryId}</span>&ensp;&ensp;&ensp;
                                            <span>{global.ordersNotDelivered[keyUser][key].company}</span>&ensp;&ensp;&ensp;
                                            <span>{global.ordersNotDelivered[keyUser][key].username}</span>&ensp;&ensp;&ensp;
                                            <span>{global.ordersNotDelivered[keyUser][key].deliveryPhase}</span>&ensp;&ensp;&ensp;
                                            <span>{global.ordersNotDelivered[keyUser][key].courier}</span>&ensp;&ensp;&ensp;
                                    </div>) : (null)
                                )}
                            </div>
                        )};
                    </div>) : (null)
                }
                {(this.state.phase === 'B') ?
                    (<div className="d-flex flex-column m-3">
                        <div className="w-100 d-inline" >
                            Proverite podatke na izveštaju dole i potvrdom na Može ćete označiti da je roba sa spiska predata distributeru za isporuku.<br />
                            <ButtonOKCancel both secondColor center onClickCancel={(e) => this.backtophaseA(e)} onClickOK={(e) => this.handlePhaseBtoC(e)} />
                        </div>
                        <table className="table table-sm col-12 O-X O-Y m-3">
                            <thead className="col-12">
                                <tr className="col-12">
                                    <th width="40%" scope="col">Naziv proizvoda</th>
                                    <th width="40%" scope="col">Šifra proizvoda</th>
                                    <th width="20%" scope="col">Količina</th>
                                </tr>
                            </thead>
                            <tbody className="col-12">

                                {Object.keys(this.state.checkBoxRow).map((key) =>
                                    (this.state.checkBoxRow[key].checked) ?
                                        (<tr className="col-12">
                                            <th scope="row">{global.ordersNotDelivered[this.state.checkBoxRow[key].keyUser][key].productName}</th>
                                            <td>{key}</td>
                                            <td>{global.ordersNotDelivered[this.state.checkBoxRow[key].keyUser][key].quantity}</td>
                                        </tr>) : (null)
                                )}
                            </tbody>
                        </table>
                    </div>) : (null)
                }
                {(this.state.phase === 'C') ?
                    (
                        <div className="d-flex flex-column m-3">
                            <div className="w-100 d-inline" >
                                Nalozi za pakovanje biće poslati mail na adrese kako je podešeno. Ovim ste označili da je roba predata
                                distributeru za isporuku kojentu koji je naručio
                                <ButtonOKCancel continues secondColor center onClickCancel={(e) => this.backtophaseA(e)} onClick={(e) => this.handleOnClickMenu(e, '/company/admin')} />
                            </div>

                        </div>
                    ) : (null)
                }
            </ProtoFormCompany>
        )
    }
}

ForDeliveryCompanyPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ForDeliveryCompanyPage.defaultProps = {
    tag: 'div'
};

export default ForDeliveryCompanyPage;