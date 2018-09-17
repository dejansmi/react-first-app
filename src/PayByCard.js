import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import ButtonOKCancel from './ButtonOKCancel';

const defaultProps = {
    tag: 'button',
    color: 'whiteLink',
    to: ""
};



class PayByCard extends React.Component {
    constructor(props) {
        super(props);
        let cardNumber = "";
        let defCard = false;
        if (this.props.global.user !== "" &&
            this.props.global.user.paymentCard !== undefined) {
            cardNumber = this.props.global.user.paymentCard;
            defCard = true;
        }
        this.state = {
            defualtCard: defCard,
            cardNumber: cardNumber,
            cardName: "",
            cardMonth: '',
            cardYear: '',
            cardSecCode: '',
            showCard: true
        }
        this.handleCardNumber = this.handleCardNumber.bind(this);
        this.handleCardName = this.handleCardName.bind(this);
        this.handleCardMonth = this.handleCardMonth.bind(this);
        this.handleCardYear = this.handleCardYear.bind(this);
        this.handleCardSecCode = this.handleCardSecCode.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    handleCardNumber(e) {
        if (e.target.value.length <= 16) {
            this.setState({ cardNumber: e.target.value });
        }
    }
    handleCardName(e) {
        this.setState({ cardName: e.target.value });
    }
    handleCardMonth(e) {
        if (e.target.value.length <= 2) {
            this.setState({ cardMonth: e.target.value });
        }
    }
    handleCardYear(e) {
        if (e.target.value.length <= 2) {
            this.setState({ cardYear: e.target.value });
        }
    }
    handleCardSecCode(e) {
        if (e.target.value.length <= 3) {
            this.setState({ cardSecCode: e.target.value });
        }
    }
    handleCancel(e) {
        this.setState({ showCard: false });
    }
    handlePaying(e, ammountPay, payingFunc) {
        if (!this.state.defualtCard) {
            if (this.state.cardNumber.length !== 16) return;
            if (this.state.cardMonth < 1 || this.state.cardMonth > 12) return;
            if (this.state.cardYear < 18) return;
        }
        if (this.state.cardSecCode < 100 || this.state.cardSecCode > 999) return;
        payingFunc(ammountPay, "CARD")
    }

    render() {


        const {
            global
        } = this.props;


        const {
            payingFunc,
            ammountPay
        } = this.props;




        const classes = classNames(
            'w-100',
            (this.state.showCard) ? ('d-flex') : ('d-none'),
            'flex-column'
        );



        return (
            <div className={classes}>
                <TextField value={this.state.cardNumber} onChange={this.handleCardNumber} label={global.t("PayByCard.cardNumber")} />
                {(!this.state.defualtCard) ?
                    (
                        <React.Fragment>
                            <TextField value={this.state.cardName} onChange={this.handleCardName} label={global.t("PayByCard.cardHolder")} />
                            <div className="Container-Empty d-flex flex-row">
                                <TextField value={this.state.cardMonth} onChange={this.handleCardMonth} label={global.t("PayByCard.cardMonth")} />
                                <TextField value={this.state.cardYear} onChange={this.handleCardYear} label={global.t("PayByCard.cardYear")} />
                            </div>
                        </React.Fragment>

                    ) : (null)
                }
                <TextField value={this.state.cardSecCode} onChange={this.handleCardSecCode} label={global.t("PayByCard.securityCode")} />
                <div className="d-flex flex-row">
                    <ButtonOKCancel center both global={global} onClick={(e) => this.handlePaying(e, ammountPay, payingFunc)} onClickCancel={() => this.handleCancel()} />
                </div>
            </div>
        );
    }
}

PayByCard.defaultProps = defaultProps;

export default PayByCard;