import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import './ForPackagingCompanyPage.css';
import ProtoFormSystem from './ProtoFormSystem';

class BanksListPage extends React.Component {
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
            <ProtoFormSystem title={title} className="d-flex flex-column" global={this.props.global}>
                <div className="d-flex flex-column ">
                Samo tekst za sada
                </div>
            </ProtoFormSystem>
        )
    }
}

BanksListPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BanksListPage.defaultProps = {
    tag: 'div'
};

export default BanksListPage;