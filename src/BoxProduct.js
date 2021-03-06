import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from './Img';
import {Redirect } from "react-router-dom";
import F from './F';

class BoxProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            redirect: false
        }

        this.changeChecked = this.changeChecked.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    changeChecked = (event) => {
        this.setState({ checked: !this.state.checked });
    }

    handleOnClick = (event) => {
        this.props.global.product = this.props.product;
        this.setState({ redirect: true });
    }

    render() {



        if (this.state.redirect === true) {
            return (

                <Redirect to={{
                    pathname: '/product',
                    state: { product: this.props.product }
                }} />
        
            )
        }


        const {
            children,
            className,
            size,
            product,
            global,
            ...attributes
        } = this.props;

        const classes = classNames(
            'O-X',
            'O-Y',
            'w-100',
            'Container-Empty',
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


        const oldPrice = (product!== undefined && product.priceOld!==undefined)?(<del><F f="$" a={product.priceOld} /></del>):("");

        return (



            <div {...attributes} className={classes} onClick={this.handleOnClick}>
               {(product!==undefined)?(
                <div  id="pMarg" className="h-100 ColorWhite d-flex flex-column  p-marg">
                    <div className="d-flex h-50 w-100 O-X O-Y justify-content-center">
                        <Img className={imgClasses} src={product.image} />
                    </div >
                    <div className="h-40 w-100 O-X O-Y">
                        <b>{product.productName}</b><br />{product.description}
                    </div>
                    <div className="h-10 w-100 float-left pt-1">
                        <span className="float-left">{oldPrice} {product.priceCurrency}</span> <span className="float-right"><b><F f="$" a={product.price}/></b></span>
                    </div>
                </div>
               ):(null)}
            </div>
        );
    }
}

BoxProduct.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BoxProduct.defaultProps = {
    tag: 'div',
    size: 'big'
};

export default BoxProduct;