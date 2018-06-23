import React, { Component } from 'react';
import BoxLoyalty from './BoxLoyalty';



class ListLoyalty extends Component {



    render() {

        const {
            list,
            size
        } = this.props;


        const ListLoyalty = list.map((loyaltyN, ind) =>
            <div  className="h-100 d-flex flex-row boxLoyalty O-Y O-X  Container-Empty">
                <BoxLoyalty loyalty={loyaltyN} size={size} ind={ind}/>
            </div>

        )


        return (
            ListLoyalty
        );

    };
}

ListLoyalty.defaultProps = {
    tag: 'div',
    size: 'small'
};


export default ListLoyalty;