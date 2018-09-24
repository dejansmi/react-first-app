import React, { Component } from 'react';
import BoxProduct from './BoxProduct';



class ListProduct extends Component {



    render() {

        const {
            list
        } = this.props;


        const listProduct = list.map((productN, ind) =>
            <div   className="d-flex boxProduct O-Y O-X  Container-Empty">
                <BoxProduct classname="h-100 w-100 O-Y O-X" product={productN} size="small" ind={ind} global={this.props.global}/>
            </div>

        )

        return (
            listProduct
        );

    };
}

export default ListProduct;