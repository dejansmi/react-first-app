import React, { Component } from 'react';
import BoxProduct from './BoxProduct';



class ListProduct extends Component {



    render() {

        const {
            list,
            style,
            global
        } = this.props;


        const listProduct = list.map((productN, ind) =>
            <div style={style} className="h-100 d-flex flex-row O-Y O-X  Container-Empty">
                <BoxProduct product={productN} size="small" ind={ind} global={this.props.global}/>
            </div>

        )

        return (
            listProduct
        );

    };
}

export default ListProduct;