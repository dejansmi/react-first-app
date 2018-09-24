import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import ReadHtmlDocument from './ReadHtmlDocument';
import F from './F';
import ButtonOKCancel from './ButtonOKCancel';
import T from './T';


class OneClickCredit extends Component {
    constructor(props) {
        super(props);
        var overd, endD, inter, ann, amm;
        if (props.global.user !== "" && props.global.user.overdraft !== undefined &&
            props.global.user.overdraft.active && props.global.user.overdraft.ammount > 0) {
            overd = props.global.user.overdraft.ammount;
            if (overd > props.ammount) {
                amm = (Number(props.ammount)).toFixed(2);
            } else {
                amm = (overd).toFixed(2);
            }
            endD = props.global.user.overdraft.endDate;
            inter = props.global.user.overdraft.interest;
            ann = this.calculate(amm, 12, inter);
        } else {
            overd = 0;
            endD = null;
            inter = 0;
        }
        this.state = {
            user: props.global.user,
            overdraftAmmount: amm,
            endDate: endD,
            mounth: 12,
            interest: inter,
            annuity: ann,
            startProcess: false,
            finallyAcceptOCC: false

        }
        this.readAllOneClickCredit = this.readAllOneClickCredit.bind(this);
    }

    calculate = (ammount, mounth, interest) => {
        return (ammount * (1 + interest / 100) / mounth).toFixed(2);
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


    render() {
        const {
            ammount,
            global,
            small
        } = this.props;

        if (this.state.user !== global.user) {
            var overd, endD, inter, ann, amm;
            if (global.user !== "" && global.user.overdraft !== undefined &&
                global.user.overdraft.active && global.user.overdraft.ammount > 0) {
                overd = global.user.overdraft.ammount;
                if (overd > ammount) {
                    amm = (Number(ammount)).toFixed(2);
                } else {
                    amm = (overd).toFixed(2);
                }
                endD = global.user.overdraft.endDate;
                inter = global.user.overdraft.interest;
                ann = this.calculate(amm, 12, inter);
            } else {
                overd = 0;
                endD = null;
                inter = 0;
            }
            this.setState({
                user: global.user,
                overdraftAmmount: amm,
                endDate: endD,
                interest: inter,
                mounth: 12,
                annuity: ann

            });
        }


        const classes = classNames(
            'Left-container',
            (global.user.overdraft !== undefined &&
                global.user.overdraft.active && !this.state.startProcess) ? ('d-flex') : ('d-none'),
            'flex-row',
            small ? 'Small-text' : ''
        );
        const classes2Phase = classNames(
            'Left-container',
            (global.user.overdraft !== undefined &&
                global.user.overdraft.active && this.state.startProcess) ? ('d-flex') : ('d-none'),
            'flex-row',
            small ? 'Small-text' : ''
        );

        const textLeftNumRight = (text, number, className, lastText) =>
            <div className="d-flex flex-row justify-content-between"> {text}<div className={"ml-auto" + (className === "bold") ? (className) : ("")}>{number}{lastText}</div> </div>;

        const finallyAcceptOCC = (this.state.finallyAcceptOCC) ?
            (<div className="d-flex flex-column">
                <T id="OneClickCredit.inputPassword" global={global}/>
                <TextField type="password" defaultValue="" label={global.t("OneClickCredit.password")} />
                <ButtonOKCancel OK className="ColorYellow w-100" global={global} onClick={(e) => this.props.payingFunc(this.state.overdraftAmmount, "ONECLICKCREDIT")}></ButtonOKCancel>
            </div>) : (null);


        return (
            <div className="Container-Empty">
                <div className={classes} >
                    <div className="d-flex flex-column width-exact-50 p-1">
                        {textLeftNumRight(global.t("OneClickCredit.loanAmount"), <F f="$0" a={this.state.overdraftAmmount} />, "", "")}
                        {textLeftNumRight(global.t("OneClickCredit.periodOfTime") + this.state.mounth + " meseci.", "", "")}
                        {textLeftNumRight(global.t("OneClickCredit.interest"), this.state.interest, "", "%")}
                        {textLeftNumRight(global.t("OneClickCredit.eir"), this.state.interest, "", "%")}
                        {textLeftNumRight(global.t("OneClickCredit.annuity:"), <F f="$0" a={this.state.annuity} />, "bold", "")}
                        <ButtonOKCancel OK className="ColorYellow w-100" global={global} onClick={() => this.oneClickMoze()}></ButtonOKCancel>
                    </div>
                    <div className="p-2">
                        <T id="OneClickCredit.twoOK" global={global}/>
                </div>
                </div>
                <div className={classes2Phase} >
                    <div className="w-100 border border-yellow">
                    <T id="OneClickCredit.readAgreement" global={global}/>:><br />
                        <ReadHtmlDocument readAll={this.readAllOneClickCredit} >
                            <h3 className="w-100 text-center"><T id="OneClickCredit.loanAgreement" global={global}/></h3>
                            <p><T id="OneClickCredit.between1" global={global}/>
                                1. {global.env.name}, {global.env.headOffice}, <T id="OneClickCredit.between2" global={global}/> {global.env.represent}, {global.env.representPosition}, <T id="OneClickCredit.hereinafter" global={global}/> <T id="OneClickCredit.between3" global={global}/><br />
                                2. {global.user.name},{global.user.address},{global.user.city}, <T id="OneClickCredit.hereinafter" global={global}/> <T id="OneClickCredit.between4" global={global}/>
                            </p>
                            <p><div className="w-100 text-center"><T id="OneClickCredit.article" global={global}/> 1</div><br />
                            <T id="OneClickCredit.article1.1" global={global}/> <F f="$0" a={this.state.overdraftAmmount} /> {this.state.basketCurrency} 
                            <T id="OneClickCredit.article1.2" global={global}/> {this.state.mounth} <T id="OneClickCredit.article1.3" global={global}/>
                            </p>
                            <p><div className="w-100 text-center"><T id="OneClickCredit.article" global={global}/> 2</div><br />
                            <T id="OneClickCredit.article2.1" global={global}/>
                            <T id="OneClickCredit.article2.2" global={global}/> <F f="$0" a={this.state.annuity} /> {this.state.basketCurrency}.
                            </p>
                            <p><div className="w-100 text-center"><T id="OneClickCredit.article" global={global}/> 3</div><br />
                            <T id="OneClickCredit.article3.1" global={global}/> {this.state.interest}, <T id="OneClickCredit.article3.2" global={global}/>
                            {this.state.interest}.
                            </p>
                            <p>
                                ...<br />
                                ...<br />
                                ...
                            </p>
                            <p><div className="w-100 text-center"><T id="OneClickCredit.article" global={global}/> 35</div><br />
                            <T id="OneClickCredit.article35.1" global={global}/>
                            </p>
                        </ReadHtmlDocument>
                    </div>
                    {finallyAcceptOCC}
                </div>
            </div>
        );
    }
}

OneClickCredit.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

OneClickCredit.defaultProps = {
    label: '',
    checked: false,
    tag: 'div'
};

export default OneClickCredit;