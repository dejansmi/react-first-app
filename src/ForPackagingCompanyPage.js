import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import './ForPackagingCompanyPage.css';
import ProtoFormCompany from './ProtoFormCompany';
import F from './F';



class ForPackagingCompanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.to = "/";
        this.state = {
            global: this.props.global,
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


    render() {

        const {
            global
        } = this.props;



        if (this.state.exit === true) {
            return <Redirect to={this.to} />
        }


        return (
            <ProtoFormCompany className="d-flex flex-column" global={this.props.global}>
                <div className="d-flex flex-row Search-Div">
                    <i className="material-icons align-self-center" onClick={this.startSearch}>{global.searchButton}</i>
                    <input className="Search-Input" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Unesite želju da je ispunimo" />
                </div>
                <div className="d-flex flex-column">
                    {Object.keys(global.ordersNotDelivered).map((keyUser) =>
                        <div>

                            {Object.keys(global.ordersNotDelivered[keyUser]).map((key) =>
                                (global.user.company===global.ordersNotDelivered[keyUser][key].company)?(
                                <div className="d-flex flex-row flex-wrap Products-Table">
                                    <span> Naziv proizvoda: <b>{global.ordersNotDelivered[keyUser][key].productName}</b></span>&ensp;&ensp;&ensp;
                                    <span> Sifra proizvoda: <b>{global.ordersNotDelivered[keyUser][key].productId}</b></span>&ensp;&ensp;&ensp;
                                    <span> Kolicina: <b>{global.ordersNotDelivered[keyUser][key].quantity}</b></span>&ensp;&ensp;&ensp;
                                    <span> Broj narudzbine: {global.ordersNotDelivered[keyUser][key].orderId}</span>&ensp;&ensp;&ensp;
                                    <span> Datum: <F f="date" a={global.ordersNotDelivered[keyUser][key].date}/></span>&ensp;&ensp;&ensp;
                                    <span> Adresa: {global.ordersNotDelivered[keyUser][key].address}</span>&ensp;
                                    <span>{global.ordersNotDelivered[keyUser][key].houseNumber}</span>&ensp;&ensp;&ensp;
                                    <span> Grad: {global.ordersNotDelivered[keyUser][key].city}</span>&ensp;&ensp;&ensp;
                                    <span>{global.ordersNotDelivered[keyUser][key].company}</span>&ensp;&ensp;&ensp;
                                    <span>{global.ordersNotDelivered[keyUser][key].username}</span>&ensp;&ensp;&ensp;
                                    <span>{global.ordersNotDelivered[keyUser][key].deliveryPhase}</span>&ensp;&ensp;&ensp;
                                    <span>{global.ordersNotDelivered[keyUser][key].courier}</span>&ensp;&ensp;&ensp;
                                </div>):(null)
                            )}
                        </div>
                    )};
                </div>
            </ProtoFormCompany>
        )
    }
}

ForPackagingCompanyPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ForPackagingCompanyPage.defaultProps = {
    tag: 'div'
};

export default ForPackagingCompanyPage;