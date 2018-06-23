import React, { Component } from 'react';
import BoxProduct from './BoxProduct';



class ListProduct extends Component {



    render() {

        const {
            list
        } = this.props;


        const listProduct = list.map((productN, ind) =>
            <div   className="d-flex boxProduct O-Y O-X  Container-Empty">
                <BoxProduct product={productN} size="small" ind={ind} global={this.props.global}/>
            </div>

        )

        return (
            listProduct
        );

    };
}

export default ListProduct;