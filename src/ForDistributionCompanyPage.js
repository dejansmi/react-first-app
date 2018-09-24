import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import './ForDeliveryCompanyPage.css';
import ProtoFormCompany from './ProtoFormCompany';
import F from './F';
import ButtonOKCancel from './ButtonOKCancel';
import T from './T';

class ForDistributionCompanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.to = "/";
        this.courier = "";
        this.state = {
            packageId: "",
            keyInBphase: "",
            keyUserInBphase: "",
            phase: 'A',
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



    backtophaseA(e) {
        this.setState({
            phase: 'A'
        });
    }



    handlePhaseAtoB(e, keyUser, key) {
        this.setState({
            phase: 'B',
            keyInBphase: key,
            keyUserInBphase: keyUser
        });
    }

    handlePhaseBtoA(e) {
        this.props.global.changeDeliveryPhase(this.state.keyUserInBphase, this.state.keyInBphase, 2, 3, undefined, undefined)
        this.setState({
            phase: 'A'
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


        const productData = (keyUser, key) =>
            <React.Fragment>
                <span> <T id="ForDistributionCompanyPage.productName" global={global}/> <b>{global.ordersNotDelivered[keyUser][key].productName}</b></span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.productCode" global={global}/> <b>{global.ordersNotDelivered[keyUser][key].productId}</b></span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.quantity" global={global}/> <b>{global.ordersNotDelivered[keyUser][key].quantity}</b></span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.orderId" global={global}/> {global.ordersNotDelivered[keyUser][key].orderId}</span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.name" global={global}/> {global.ordersNotDelivered[keyUser][key].name}</span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.date" global={global}/> <F f="date" a={global.ordersNotDelivered[keyUser][key].date} /></span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.address" global={global}/> {global.ordersNotDelivered[keyUser][key].address}</span>&ensp;
                <span>{global.ordersNotDelivered[keyUser][key].houseNumber}</span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.city" global={global}/> {global.ordersNotDelivered[keyUser][key].city}</span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.deliveryId" global={global}/> {global.ordersNotDelivered[keyUser][key].deliveryId}</span>&ensp;&ensp;&ensp;
                <span> <T id="ForDistributionCompanyPage.packageId" global={global}/> {global.ordersNotDelivered[keyUser][key].packageId}</span>&ensp;&ensp;&ensp;
                <span>{global.ordersNotDelivered[keyUser][key].company}</span>&ensp;&ensp;&ensp;
                <span>{global.ordersNotDelivered[keyUser][key].username}</span>&ensp;&ensp;&ensp;
                <span>{global.ordersNotDelivered[keyUser][key].deliveryPhase}</span>&ensp;&ensp;&ensp;
                <span>{global.ordersNotDelivered[keyUser][key].courier}</span>&ensp;&ensp;&ensp;
            </React.Fragment>



        return (
            <div>
                <ProtoFormCompany title={title} className="d-flex flex-column" global={this.props.global}>
                    {(this.state.phase === 'A') ?
                        (<div className="d-flex flex-row Search-Div O-Y">
                            <i className="material-icons align-self-center" onClick={this.startSearch}>{global.searchButton}</i>
                            <input className="Search-Input" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder={global.t("ForDistributionCompanyPage.searchParameters")} />
                        </div>) : (null)}
                    {(this.state.phase === 'A') ?
                        (<div className="d-flex flex-column m-4 ">
                            {Object.keys(global.ordersNotDelivered).map((keyUser) =>
                                <div className="d-flex flex-column ">
                                    {Object.keys(global.ordersNotDelivered[keyUser]).map((key) =>
                                        (global.user.company === global.ordersNotDelivered[keyUser][key].courier && global.ordersNotDelivered[keyUser][key].deliveryPhase === 2) ? (
                                            <div className="d-flex flex-row flex-wrap Products-Table align-items-center" onClick={(e) => this.handlePhaseAtoB(e, keyUser, key)}>
                                                {productData(keyUser, key)}
                                            </div>) : (null)
                                    )}
                                </div>
                            )}
                        </div>) : (null)
                    }
                    {(this.state.phase === 'B') ?
                        (<div id="fdcp-modal">
                            <div id="fdcp-center" className="d-flex flex-column">
                                <div>
                                    <h3>Potvrdite isporuku</h3>
                                </div>
                                <div className="d-inline">
                                    {productData(this.state.keyUserInBphase, this.state.keyInBphase)}
                                </div>
                                <div className="d-flex flex-row h-100">
                                    <ButtonOKCancel secondColor both center global={global} onClickCancel={(e) => this.backtophaseA(e)}
                                        onClickOK={(e) => this.handlePhaseBtoA(e)} />
                                </div>
                            </div>
                        </div>) : (null)
                    }
                </ProtoFormCompany>
            </div>
        )
    }
}

ForDistributionCompanyPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ForDistributionCompanyPage.defaultProps = {
    tag: 'div'
};

export default ForDistributionCompanyPage;