import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';


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
            annuity: ann

        }
    }

    calculate = (ammount, mounth, interest) => {
        return (ammount * (1 + interest / 100) / mounth).toFixed(2);
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
                global.user.overdraft.active)?('d-flex'):('d-none'),
            'flex-row',
            small ? 'Small-text' : ''
        );

        const textLeftNumRight = (text, number, className, lastText) =>
            <div className="d-flex flex-row justify-content-between"> {text}<div className={"ml-auto"+(className==="bold")?(className):("")}>{number}{lastText}</div> </div>;

        return (
            <div className={classes} >
                <div className="d-flex flex-column width-exact-50 p-1">
                    {textLeftNumRight("Iznos kredita:", this.state.overdraftAmmount, "","")}
                    {textLeftNumRight("Period: " + this.state.mounth + " meseci.", "", "")}
                    {textLeftNumRight("Kamata:", this.state.interest, "","%")}
                    {textLeftNumRight("EKS:", this.state.interest, "", "%")}
                    {textLeftNumRight("Anuitet:", this.state.annuity, "bold","")}
                    <Button className="ColorYellow w-100" onClick={() => this.handleConnect()}>Može</Button>
                </div>
                <div className="p-2">
                    Dva <span className="ColorYellow">Može</span> vas deli od dobijanja kredita bez dolaska u banku. Kredit se dobija iz dozvoljenog minusa, ali kamatna stopa je specijalna.
                    Ukoliko dostavite sledecu dokumentaciju: potvrdu o primanjima,... mozete vratiti nivo dozvoljenog minusa na sadasnji nivo, pri cemu
                    nema promene kamatne stope.
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