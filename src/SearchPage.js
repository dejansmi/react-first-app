import React from 'react';
import classNames from 'classnames';
import { Redirect } from "react-router-dom";
import ImgBox from './ImgBox';
import F from './F';
import Rate from './Rate';
import T from './T';

const defaultProps = {
    tag: 'button',
    color: 'whiteLink',
    to: ""
};

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    handleOnClick = (event, product) => {
        this.props.global.product = product;
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



        let {
            global,
            to
        } = this.props;

        if (this.state.exit === true) {
            return <Redirect to={to} />
        }




        const classes = classNames(
            'w-100'
        );

        const listProduct = global.searchResult.map((productR, ind) =>
            <div className="w-100 d-flex flex-row O-Y O-X  Container-Empty border border-yellow" onClick={(e)=> (this.handleOnClick(e,productR))}>
                <ImgBox src={productR.image} width='100px' />
                <div className="d-flex flex-column m-2 text-left">
                    <spam><T id="SearchPage.productName" global={global}/> {productR.productName}</spam>
                    <spam><T id="SearchPage.category" global={global}/> {productR.productType}</spam>
                    <spam><T id="SearchPage.description" global={global}/> {productR.description}</spam>
                </div>
                <div className="d-flex flex-column m-2 ml-auto ">
                    <div className="d-flex flex-row justify-content-between">
                    <spam>{productR.priceCurrency}</spam>&emsp; <spam><b><F f="$0" a={productR.price}/></b></spam>
                    </div >  
                    <div className="d-flex flex-row justify-content-between mb-auto">
                        <spam className="ml-auto" />{(productR.priceOld!==undefined)?(<spam><del><F f="$" a={productR.priceOld}/></del></spam>):
                        (null)}
                    </div>
                    {(productR.rate!==undefined)?(<Rate rate={productR.rate} global={global}/>):
                    (null)}
                </div>
            </div>

        )


        return (
            <div className={classes}>
                {listProduct}
            </div>
        );
    }
}

SearchPage.defaultProps = defaultProps;

export default SearchPage;