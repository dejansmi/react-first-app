import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from './Button';

const defaultProps = {
    tag: 'button',
    color: 'whiteLink',
    to: ""
};



class PayByCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: "",
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

    render() {








        const classes = classNames(
            'w-100',
            (this.state.showCard)?('d-flex'):('d-none'),
            'flex-column'
        );




        return (
            <div className={classes}>
                <TextField value={this.state.cardNumber} onChange={this.handleCardNumber} defaultValue="" label="Broj kartice" />
                <TextField value={this.state.cardName} onChange={this.handleCardName} defaultValue="" label="Ima ne kartici" />
                <div className="Container-Empty d-flex flex-row">
                    <TextField value={this.state.cardMonth} onChange={this.handleCardMonth} defaultValue="" label="Mesec" />
                    <TextField value={this.state.cardYear} onChange={this.handleCardYear} defaultValue="" label="Godina" />
                </div>
                <TextField value={this.state.cardSecCode} onChange={this.handleCardSecCode} defaultValue="" label="Security code" />
                <div className="d-flex flex-row">
                    <Button className="ColorYellow w-50" onClick={() => this.handlePayByCard()}>Može</Button>
                    <div className="W-SS"></div>
                    <Button className="ColorYellow w-50" onClick={() => this.handleCancel()}>Odustani</Button>
                </div>
            </div>
        );
    }
}

PayByCard.defaultProps = defaultProps;

export default PayByCard;