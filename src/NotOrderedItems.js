import React from 'react';
import F from './F';
import ButtonToggleDiv from './ButtonToggleDiv';
import ButtonOKCancel from './ButtonOKCancel';
import PhaseIcons from './PhaseIcons';
import Link from './Link';


class NotOrderedItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoPhases: false
        }
    }


    setOrderderToMe = (username, key) => {
        if (!this.state.orderderToMe) {
            if (this.props.global.ordersNotDelivered[username][key].deliveryPhase === 3) {
                this.setState({
                    orderderToMe: true
                });
            }
        }
    }
    onClickOrderderToMe = (e, username, key) => {
        if (this.props.global.ordersNotDelivered[username][key].deliveryPhase === 3) {
            this.setState({
                ordersNotDelivered: this.props.global.ordersNotDelivered[username][key],
                changePhase3: true
            });
        }
    }


    handleCancelChangePhase3 = (e) => {
        this.setState({
            changePhase3: false
        });
    }
    handleOKChangePhase3 = (e) => {
        let p = this.state.ordersNotDelivered;
        this.props.global.changeDeliveryPhase(p.username, p.deliveryId, 3, 4, undefined, undefined);
        this.setState({
            changePhase3: false
        });

    }

    infoPhases = (e) => {
        this.setState({
            infoPhases: true
        });
    }

    onClickInfoPhases = (e) => {
        this.setState({
            infoPhases: false
        });
    }



    render() {

        const {
            global,
            toggle
        } = this.props;

        const trClasses = (key) => (global.ordersNotDelivered[global.user.username][key].deliveryPhase === 3) ?
            ("ColorGray") : ("");


        const infoPhases = (this.state.infoPhases) ? (
            <div className="UserP-infoFull" onClick={(e) => this.onClickInfoPhases(e)}>
                <div className="UserP-info d-flex flex-row">
                    <PhaseIcons phase={0} />
                    <div>Status 0: Klijent je naručio proizvode on-line </div>
                    <PhaseIcons phase={1} />
                    <div>Status 1: Kompanija je spakvala proizvode </div>
                    <PhaseIcons phase={2} />
                    <div>Status 2: Proizvodi su kod kurira </div>
                    <PhaseIcons phase={3} />
                    <div>Status 3: Kurir je isporučio klijentu </div>
                    <PhaseIcons phase={4} />
                    <div>Status 4: Klijent potvrdio prijem proizvoda </div>
                </div>
            </div>
        ) : (null);


        const changePhase3 = (this.state.changePhase3) ?
            (<div id="UserP-cp3" onClick={(e) => { }}>
                <div id="UserP-cp3Center" className="d-flex flex-column">
                    <h4 className="text-center">Ovim potvrđujete da ste primili sledeće proizvode</h4>
                    <p />
                    <div>Naziv proizvoda: <b>{this.state.ordersNotDelivered.productName}</b></div>
                    <div>Količina: <b>{this.state.ordersNotDelivered.quantity}</b></div>
                    <div>Datum naručivanja: <b><F f="date" a={this.state.ordersNotDelivered.date} /></b></div>
                    <div>Kompanija: {this.state.ordersNotDelivered.company}</div>
                    <div>Isporučilac: <b>{this.state.ordersNotDelivered.courier}</b></div>
                    <div>Poslato na adresu:</div>
                    <div>Ulica i broj: {this.state.ordersNotDelivered.address}&ensp;{this.state.ordersNotDelivered.houseNumber}</div>
                    <div>Grad: {this.state.ordersNotDelivered.city}</div>
                    <div>Šifre:</div>
                    <div>proizvoda: {this.state.ordersNotDelivered.productId}</div>
                    <div>isporuke: {this.state.ordersNotDelivered.orderId}</div>
                    <div>pakovanja: {this.state.ordersNotDelivered.packageId}</div>
                    <p>
                        Ukoliko isporuka nije obaveljana, odnosno niste dobili proizvod kao što je 
                        naznačeno u podacima gore, možete podneti <Link className="Container-Empty" color="primary" >reklamaciju</Link>
                    </p>
                    <ButtonOKCancel both center onClickOK={(e) => this.handleOKChangePhase3(e)} onClickCancel={(e) => this.handleCancelChangePhase3(e)} />
                </div>
            </div>) : (null);



        const NotOrderedTable =
            (global.user !== "" && global.ordersNotDelivered !== undefined &&
                (global.ordersNotDelivered[global.user.username] !== undefined)) ?
                (<div className="d-flex flex-column">
                    {changePhase3}
                    {infoPhases}
                    {(this.state.orderderToMe) ?
                        (<div>
                            Postoje proizvodi koji su Vam isporučeni prema evidenciji. Označeni su
                            sivom pozadinom. Molimo da potvrdite da li ste ih primili klikom na taj red.
                            Potvrdom povećavate efikasnost i tačnost sistema, omogućavate praćenje tačnosti isporuke
                    </div>) : (null)}
                    <table className="UserP-table">
                        <thead>
                            <tr>
                                <th scope="col">Datum</th>
                                <th scope="col">Proizvod</th>
                                <th scope="col">Isporučilac</th>
                                <th scope="col">Kom</th>
                                <th className="d-flex flex-row" scope="col">Faza<i className="material-icons font-normal" onClick={(e) => this.infoPhases(e)}>help</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(global.ordersNotDelivered[global.user.username]).map((key) =>

                                <tr className={trClasses(key)} onClick={(e) => this.onClickOrderderToMe(e, global.user.username, key)}>
                                    {this.setOrderderToMe(global.user.username, key)}
                                    <th scope="row"><F f="date" a={global.ordersNotDelivered[global.user.username][key].date} /></th>
                                    <td>{global.ordersNotDelivered[global.user.username][key].productName}</td>
                                    <td>{global.ordersNotDelivered[global.user.username][key].courier}</td>
                                    <td>{global.ordersNotDelivered[global.user.username][key].quantity}</td>
                                    <td className="O-Y UserP-maxh30 Container-Empty " ><PhaseIcons phase={global.ordersNotDelivered[global.user.username][key].deliveryPhase} /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                ) : (null);





        return (
            <ButtonToggleDiv toggle={toggle} className="O-X O-Y" name="Neisporučene narudžbine">
                {NotOrderedTable}
            </ButtonToggleDiv>

        )
    }

}

export default NotOrderedItems;