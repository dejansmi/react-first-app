import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import F from './F';
import ButtonOKCancel from './ButtonOKCancel';
import T from './T';


class BankingAccountPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            ammount: 0,
            haveMoney: false,
            showAB: false
        }
        this.accountBalance = this.accountBalance.bind(this);
    }
    readAllOneClickCredit(e) {
        this.setState({
            finallyAcceptOCC: true
        });
    }

    oneClickMoze = (e) => {
        this.setState({
            startProcess: true
        });
    }

    accountBalance = (e) => {
        this.setState({
            showAB: true
        });
 
    }


    render() {
        var amm, hM, notDef;
        const {
            ammountPay,
            global,
            payingFunc,
            small
        } = this.props;

        notDef = false;
        if (global.user !== "" && global.user.currentAccount !== undefined &&
            global.user.currentAccount.ammount > 0) {
            amm = global.user.currentAccount.ammount;
            if (ammountPay > amm) {
                hM = false; // it's don't have enough money to account
            } else {
                hM = true;
            }
        } else {
            notDef = true;
        }
        if (this.state.user !== global.user ||
            this.state.ammount !== amm ||
            this.state.haveMoney !== hM ||
            this.state.haveROL !== !notDef) {
            this.setState ({
                user: global.user,
                ammount: amm,
                haveMoney: hM,
                haveROL: !notDef
            });
        }

        const classes = classNames(
            'Container-Empty',
            (this.state.haveMoney) ? ('d-flex') : ('d-none'),
            'flex-column',
            small ? 'Small-text' : ''
        );
        const classes2Phase = classNames(
            'Container-Empty',
            (!this.state.haveMoney &&
                this.state.haveROL)  ? ('d-flex') : ('d-none'),
            'flex-column',
            small ? 'Small-text' : ''
        );
        const classes3Phase = classNames(
            'Container-Empty',
            (global.user !== "" && !this.state.haveROL)  ? ('d-flex') : ('d-none'),
            'flex-row',
            small ? 'Small-text' : ''
        );

        const finallyAcceptOCC = (this.state.finallyAcceptOCC) ?
            (<div className="d-flex flex-column">
                <T id="BankingAccountPay.inputPass" global={global}/>
                <TextField type="password" defaultValue="" label={global.t("BankingAccountPay.password")} />
                <ButtonOKCancel OK center global={global} onClick={(e) => this.props.payingFunc(this.state.overdraftAmmount)}/>
            </div>) : (null);

        const accountBalance = (this.state.showAB)?
            (<div><T id="BankingAccountPay.amountCurrenAccount1" global={global}/> {global.user.currentAccount.id} <T id="BankingAccountPay.amountCurrenAccount2" global={global}/> {global.user.currentAccount.currency} <F f="$0" a={global.user.currentAccount.ammount}/></div>):(null);

        return (
            <div className="Container-Empty">
                <div className={classes} >
                <T id="BankingAccountPay.amountHaveEnough" global={global}/> <spam className="d-inline btn-link" onClick={this.accountBalance}><T id="BankingAccountPay.amountHaveEnoughHere" global={global}/></spam>
                    {accountBalance}
                    {finallyAcceptOCC}
                    <ButtonOKCancel center OK global={global} onClick={(e) => payingFunc(ammountPay, "ACCOUNT")}/>    
                </div>
                <div className={classes2Phase} >
                <T id="BankingAccountPay.dontHaveAmount" global={global}/> <spam className="d-inline btn-link" onClick={this.accountBalance}><T id="BankingAccountPay.amountHaveEnoughHere" global={global}/></spam>
                    {accountBalance}
                </div>
                <div className={classes3Phase} >
                    <T id="BankingAccountPay.dontHaveAccount" global={global}/>
                </div>
            </div>
        );
    }
}

BankingAccountPay.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BankingAccountPay.defaultProps = {
    label: '',
    checked: false,
    tag: 'div'
};

export default BankingAccountPay;