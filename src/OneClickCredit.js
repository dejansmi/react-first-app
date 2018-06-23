import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import TextField from '@material-ui/core/TextField';
import ReadHtmlDocument from './ReadHtmlDocument';
import F from './F';


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
                Unesite lozinku i potvrdom na Može izvršite plaćanje OneClickCredit
                <TextField type="password" defaultValue="" label="Lozinka" />
                <Button className="ColorYellow w-100" onClick={(e) => this.props.payingFunc(this.state.overdraftAmmount)}>Može</Button>
            </div>) : (null);

        return (
            <div className="Container-Empty">
                <div className={classes} >
                    <div className="d-flex flex-column width-exact-50 p-1">
                        {textLeftNumRight("Iznos kredita:", <F f="$0" a={this.state.overdraftAmmount} />, "", "")}
                        {textLeftNumRight("Period: " + this.state.mounth + " meseci.", "", "")}
                        {textLeftNumRight("Kamata:", this.state.interest, "", "%")}
                        {textLeftNumRight("EKS:", this.state.interest, "", "%")}
                        {textLeftNumRight("Anuitet:", <F f="$0" a={this.state.annuity} />, "bold", "")}
                        <Button className="ColorYellow w-100" onClick={() => this.oneClickMoze()}>Može</Button>
                    </div>
                    <div className="p-2">
                        Dva <span className="ColorYellow">Može</span> vas deli od dobijanja kredita bez dolaska u banku. Kredit se dobija iz dozvoljenog minusa, ali kamatna stopa je specijalna.
                        Ukoliko dostavite sledecu dokumentaciju: potvrdu o primanjima,... mozete vratiti nivo dozvoljenog minusa na sadasnji nivo, pri cemu
                        nema promene kamatne stope.
                </div>
                </div>
                <div className={classes2Phase} >
                    <div className="w-100 border border-yellow">
                        Molimo pročitajte ovaj ugovor pažljlivo, prolaskom kroz sve članove:><br />
                        <ReadHtmlDocument readAll={this.readAllOneClickCredit} >
                            <h3 className="w-100 text-center">Ugovor o pozajmici</h3>
                            <p>Između:
                                1. Raiffeisen banke, Beograd, koju zastupa Miloš Milutinović, regionalni menadžer, u daljem tekstu Bankai<br />
                                2. {global.user.name},{global.user.address},{global.user.city}, u daljem tekstu Korisnik
                            </p>
                            <p><div className="w-100 text-center">Član 1</div><br />
                                Ugovorne strane su se dogovorile da Banka da pozajmicu Korisniku u iznosu <F f="$0" a={this.state.overdraftAmmount} /> {this.state.basketCurrency} na
                            period od {this.state.mounth} meseci.
                            </p>
                            <p><div className="w-100 text-center">Član 2</div><br />
                                Korisnik će svakog meseca, do poslednjeg radnog dana u mesecu, vraćati Anuitet
                            u iznosu od <F f="$0" a={this.state.annuity} /> {this.state.basketCurrency}.
                            </p>
                            <p><div className="w-100 text-center">Član 3</div><br />
                                Nominalna kamatna stopa iznosi {this.state.interest}, a Efektivna kamatna stopa je
                            {this.state.interest}.
                            </p>
                            <p>
                                ...<br />
                                ...<br />
                                ...
                            </p>
                            <p><div className="w-100 text-center">Član 35</div><br />
                                Korisnik prihvata ovaj ugovor elektronski unosom lozinke za ROL. Korisnik će dobiti ugovor u elektronskom
                                formatu na mail a biće sačuvan i evidenciji banke a Korisnik će moći da mu pristupi kroz ROL nalog.
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