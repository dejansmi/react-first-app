import React from 'react';
import classNames from 'classnames';

const defaultProps = {
    tag: 'div'
};



class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {




        const {
            children,
            className,
            tag: Tag,
        } = this.props;




        const classes = classNames(
            'd-flex',
            className
        );

        console.log ({children})


        return (
            <Tag className={classes} >
                {children}
            </Tag>
        );
    }
}

Item.defaultProps = defaultProps;

export default Item;