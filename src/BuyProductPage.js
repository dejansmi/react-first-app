import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ping from './logo.png';
import HeaderPage from './HeaderPage';
import Link from './Link';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import CheckBox from './CheckBox';
import { setGlobalCssModule } from './utils';


class BuyProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.global.product.image,
            otherImages: this.props.global.product.otherImages,
            numProduct: 0,
            totalPrice: 0,
            checkedMoreThan: false,
            exit: false
        }
        if (this.props.global.product != "" && !this.props.global.product.otherImages === undefined) {
            this.state = {
                otherImages: this.props.global.product.otherImages
            }
        }
        this.handleOnClickLeft = this.handleOnClickLeft.bind(this);
        this.handleOnClickRight = this.handleOnClickRight.bind(this);
        this.styleSize = this.styleSize.bind(this);
        this.numProductOnChange = this.numProductOnChange.bind(this);
        this.numProductOnClick = this.numProductOnClick.bind(this);
        this.onCheckedMoreThan = this.onCheckedMoreThan.bind(this);
    }


    handleOnClickLeft = (event) => {
        this.setState(prevState => ({
            image: prevState.otherImages.slice(prevState.otherImages.length - 1),
            otherImages: [prevState.image, ...prevState.otherImages.slice(0, prevState.otherImages.length - 1)]
        }));
    }
    handleOnClickRight = (event) => {
        this.setState(prevState => ({
            image: prevState.otherImages.slice(0, 1),
            otherImages: [...prevState.otherImages.slice(1), prevState.image]
        }));
    }
    numProductOnChange = (event) => {
        var eTV, gPP, cMT;
        eTV = event.target.value;
        if (eTV < 0) {
            eTV = 0;
        }
        cMT = false;
        if (this.props.global.product.discount !== undefined && this.props.global.product.discount.moreThen !== undefined) {
            if (this.props.global.product.discount.moreThen < eTV) {
                cMT = true;
                gPP = (eTV * this.props.global.product.price) * (1 - this.props.global.product.discount.value / 100);
            } else {
                gPP = eTV * this.props.global.product.price;
            }
        } else {
            gPP = eTV * this.props.global.product.price;
        }
        this.setState({
            numProduct: eTV,
            totalPrice: gPP,
            checkedMoreThan: cMT

        });
    }
    numProductOnClick = (event) => {
        console.log("On click")
    }

    onCheckedMoreThan = (event) => {
        this.setState({
            checkedMoreThan: !this.state.checkedMoreThan
        });

    }

    handleCancel(e) {
        this.setState({ exit: true});
    }

    handleInBasket(e) {
        this.props.global.addInBasketList (this.props.global.product, this.state.numProduct, this.state.totalPrice);
        this.setState({ exit: true});
    }


    styleSize(lId) {
        this.x = window.innerWidth;
        this.y = window.innerHeight;

        if (lId == "Pictures" || lId == "Details") {
            if (this.x <= 600) {
                this.yA = (this.x * 9 / 16);
                this.xA = this.x;
            } else {
                this.xA = 600;
                this.yA = (600 * 9 / 16);
            }
            return {
                height: this.yA,
                minHeight: this.yA,
                width: this.xA,
                minWidth: this.xA
            }
        } else if (lId == "Basket" || lId == "Company") {
            this.xB = this.x - this.xA;
            if (this.xB <= 300) {
                this.xB = this.xA;
                this.yB = this.xB * 9 / 16;
            } else if (this.xB <= 600) {
                this.yB = this.yA;
            } else {
                this.xB = 600;
                this.yB = this.yA;
            }
            return {
                height: this.yB,
                minHeight: this.yB,
                width: this.xB,
                minWidth: this.xB
            }
        } else if (lId == "PictureMain") {
            this.xP = this.xA / 2;
            this.yP = this.yA / 2;
            return {
                height: this.yP,
                minHeight: this.yP,
                width: this.xP,
                minWidth: this.xP,
                position: 'relative',
                left: this.xP / 2,
                top: 0
            }
        } else if (lId == "PictureLittle0") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 2.5,
                top: -this.yL / 1.15
                //left: -100,
                //top: 150
            }
        } else if (lId == "PictureLittle1") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 3,
                top: -this.yL * 1.25
            }
        } else if (lId == "PictureLittle2") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 2.5,
                top: -this.yL * 1.5
            }
        } else if (lId == "PictureLittle3") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 1.65,
                top: -this.yL * 2.4
            }
        } else if (lId == "PictureLittle4") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 0.75,
                top: -this.yL * 3.5
            }
        } else if (lId == "PictureLittle5") {
            this.xL = this.xA / 4;
            this.yL = this.yA / 4;
            return {
                height: this.yL,
                minHeight: this.yL,
                width: this.xL,
                minWidth: this.xL,
                position: 'relative',
                left: this.xL * 0.1,
                top: -this.yL * 5
            }
        } else if (lId == "ButtonLeft") {
            this.xB = this.xA / 4;
            this.yB = this.yA / 4;
            this.zB = this.xB / 5;
            return {
                height: this.zB,
                minHeight: this.zB,
                width: this.zB,
                minWidth: this.zB,
                position: 'relative',
                left: this.xB * 1.6,
                top: this.zB
            }
        } else if (lId == "ButtonRight") {
            this.xB = this.xA / 4;
            this.yB = this.yA / 4;
            this.zB = this.xB / 5;
            return {
                height: this.zB,
                minHeight: this.zB,
                width: this.zB,
                minWidth: this.zB,
                position: 'relative',
                left: this.xB * 2,
                top: this.zB
            }
        }


    }


    render() {

        const {
            children,
            className,
            product,
            size,
            global,
            ...attributes
        } = this.props;

        if (this.state.exit === true) {
            return <Redirect to='/' />
        }


        const classes = classNames(
            (size === "big") ? 'font-normal' : '',
            (size === "small") ? 'font-small' : '',

            className
        );

        const imgClasses = classNames(
            'Container-Empty',
            (size === "big") ? 'font-normal' : '',
            (size === "small") ? 'font-small' : '',

            className
        );

        const pictureLittle = (styleIn, numImage) => (this.state.otherImages === undefined) ? ("") : (
            (this.state.otherImages[numImage] === undefined) ? ("") :
                <div style={styleIn} className="Container-Empty  O-X O-Y" >
                    <img src={this.state.otherImages[numImage]} className="img-fluid mx-auto d-block" alt="Book" />
                </div>)

        const inBasket = global.basket + this.state.totalPrice;

        const labelDiscount = (global.product.discount !== undefined && global.product.discount.moreThen !== undefined) ? ("više od " + global.product.discount.moreThen + " komada popust je " + global.product.discount.value + "%") : ("");
        var discountMoreThen = (global.product.discount !== undefined && global.product.discount.moreThen !== undefined) ? (<CheckBox label={labelDiscount} small checked={this.state.checkedMoreThan} disabled />) : ("");

        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
                <div className="Container-Empty h-100 w-100 d-flex flex-row flex-wrap ">
                    <div style={this.styleSize("Pictures")} className="Container-Empty border border-danger " >
                        <div style={this.styleSize("PictureMain")} className="Container-Empty  O-X O-Y" >
                            <img src={this.state.image} className="img-fluid mx-auto d-block" alt="Book" />
                        </div>
                        <Button style={this.styleSize("ButtonLeft")} className="Container-Empty" color="yellow"
                            onClick={this.handleOnClickLeft}>&#10096;</Button>
                        <Button style={this.styleSize("ButtonRight")} className="Container-Empty" color="yellow"
                            onClick={this.handleOnClickRight}>&#10097;</Button>
                        {pictureLittle(this.styleSize("PictureLittle0"), 0)}
                        {pictureLittle(this.styleSize("PictureLittle1"), 1)}
                        {pictureLittle(this.styleSize("PictureLittle2"), 2)}
                        {pictureLittle(this.styleSize("PictureLittle3"), 3)}
                        {pictureLittle(this.styleSize("PictureLittle4"), 4)}
                        {pictureLittle(this.styleSize("PictureLittle5"), 5)}
                    </div>
                    <div style={this.styleSize("Basket")} className="Container-Empty border border-danger d-inline-block" >
                        <div className="Container-Empty w-100 d-flex flex-row">
                            <h2 className="d-flex flex-row">
                                Cena:&ensp;
                            <div>
                                    {(global.product.priceOld === undefined ? ("") : (<del>{global.product.priceOld}</del>))}
                                </div>&ensp;
                            <div>
                                    {(global.product.price === undefined ? ("") : (global.product.price))}&ensp;
                                {(global.product.priceCurrency === undefined ? ("") : (global.product.priceCurrency))}
                                </div>
                            </h2>
                        </div>
                        <div className="Container-Empty w-100 d-flex flex-column">
                            <div className="d-flex flex-row  h-100 align-items-center">Ubaci u korpu
                                    <Input className="col-3  align-self-end" type="number" id="numProduct" placeholder="" value={this.state.numProduct} onChange={this.numProductOnChange} />&ensp;
                                 komada
                                Ukupan iznos &ensp;
                                <b>{this.state.totalPrice}</b>&ensp;
                                {global.product.priceCurrency}
                            </div>
                            <div>Popusti:</div>
                            <div>
                                {discountMoreThen}
                            </div>
                            <div className="d-flex flex-row  h-100 align-items-center">U korpi je {global.basket} {global.basketCurrency}&ensp;
                                    Ako dodate {this.state.numProduct} komada ovog proizvoda u korpu, u korpi ce biti {inBasket} {global.basketCurrency}
                            </div>
                            <div className="d-flex flex-row">
                                <Button className="ColorYellow col-4 col-sm-2" onClick={() => this.handleInBasket()}>Može</Button>
                                <div className="W-SS"></div>
                                <Button className="ColorYellow col-4 col-sm-2" onClick={() => this.handleCancel()}>Odustani</Button>
                            </div>

                        </div>


                    </div>
                    <div style={this.styleSize("Details")} className="Container-Empty border border-danger" >
                        C: {this.xA}
                        x: {this.x}
                        y: {this.y}
                    </div>
                    <div style={this.styleSize("Company")} className="Container-Empty border border-danger" >
                        D: {this.xB}
                    </div>
                </div>
                <Link className="Container-Empty" small to="/">Home</Link>

            </div>
        );
    }
}

BuyProductPage.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BuyProductPage.defaultProps = {
    tag: 'div',
    size: 'big'
};

export default BuyProductPage;