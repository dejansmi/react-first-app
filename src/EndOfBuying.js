import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderPage from './HeaderPage';
import Link from './Link';
import ping from './logo.png';
import Button from './Button';
import Basket from './Pictures/basket.jpg';
import OneClickCredit from './OneClickCredit';
import F from './F';


class EndOfBuying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            OneClickCreditClass: 'd-flex Container-Empty',
            exit: false
        }

    }

    exit (e) {
        this.setState ({
            exit: true
        });
    }

    endOfBuying(e) {
        if (this.state.OneClickCreditClass === 'd-flex Container-Empty') {
            this.setState({
                OneClickCreditClass: 'd-none Container-Empty'
            });
        } else {
            this.setState({
                OneClickCreditClass: 'd-flex Container-Empty'
            });

        }
    }

    styleSize(lId) {
        this.x = window.innerWidth;
        this.y = window.innerHeight;

        if (lId === "Basket") {
            var wB;
            if (this.x < 576) {
                wB = this.x
            } else {
                wB = 500;
            }
            return {
                width: wB,
                maxWidth: wB,
                minWidth: wB,
                height: 'auto'
            }
        } else if (lId === "Paying") {
            var wP;
            if (this.x < 576) {
                wP = this.x
            } else {
                wP = 500;
            }
            return {
                width: wP,
                maxWidth: wP,
                minWidth: wP,
                height: 'auto'
            }

        }

    }

    render() {


        if (this.state.exit === true) {
            return <Redirect to='/' />
        }

        const styleBasket = {
            maxWidth: '50px',
            maxHeight: '50px'
        }

        const styleBasketAmmount = {
            fontSize: '2em'
        }

        const rowBasket = this.props.global.basketList.map(one =>
            <div className="d-flex flex-row justify-content-between">
                <div className="width-exact-50 ">{one.product.productName}</div>
                <div className="width-exact-10 text-right">{one.numberOfProduct}</div>
                <div className="width-exact-40 text-right"> <F f="$" a={one.ammount}/></div>
            </div>);

        const PayingClass = classNames(
            (this.props.global.user !== "") ? ('d-flex') : ('d-none'),
            'flex-column'
        );

        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="Container-Empty d-flex flex-row flex-wrap">
                    <div style={this.styleSize("Basket")} className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between"><img style={styleBasket} className="img-fluid" src={Basket} alt="User" />
                            <div style={styleBasketAmmount}><F f='$' a={this.props.global.basket}/></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between ColorYellow">
                            <div>Naziv proizvoda</div><div>Komada</div><div>Iznos</div>
                        </div>
                        {rowBasket}
                        <Button className="ColorYellow " onClick={(e) => this.exit(e)}>Vrati se na kupovinu</Button>
                    </div>
                    <div style={this.styleSize("Paying")} classNames={PayingClass}>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>OneClickCredit</i></b></Button>
                        <div className={this.state.OneClickCreditClass}>
                            <OneClickCredit ammount={this.props.global.basket} global={this.props.global} />
                        </div>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>Sa tekućeg računa u Raiffeisen banci</i></b></Button>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>Platne kartice</i></b></Button>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>ePay Wallet</i></b></Button>
                        <Button className="ColorYellow w-100" onClick={(e) => this.endOfBuying(e)}><b><i>Virmanom</i></b></Button>
                    </div>
                </div>

                <Link className="Container-Empty" small to="/">Home</Link>
            </div>
        )
    }
}

EndOfBuying.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

EndOfBuying.defaultProps = {
    tag: 'div'
};

export default EndOfBuying;