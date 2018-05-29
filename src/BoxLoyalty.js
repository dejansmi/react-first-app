import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from './Img';

class BoxLoyalty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }

        this.changeChecked = this.changeChecked.bind(this);

    }

    changeChecked = (event) => {
        this.setState({ checked: !this.state.checked });
    }

    fsize() {
        return {
            fontSize: "3em",
            wordWrap: "break-word"
        }
    };

    render() {

        const {
            children,
            className,
            size,
            loyalty,
            ...attributes
        } = this.props;

        const classes = classNames(
            'O-X',
            'O-Y',
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


        const imgDivTxt = loyalty.imageShow ? (
            <Img className={imgClasses} src={loyalty.image} />
        ) : (
                <div style={this.fsize()}>{loyalty.imageText}</div>
            );


        return (
            <div {...attributes} className={classes}>
                <div className="h-100 ColorWhite d-flex flex-row  mx-2 mt-1 mb-5">
                    <div className="d-flex flex-column Container-Empty border border-success h-100 w-50 O-X O-Y">
                        <div className="d-flex h-60 w-100 O-X O-Y">
                            {imgDivTxt}
                        </div >
                        <div className="h-40 w-100 O-X O-Y">
                            {loyalty.company}
                        </div>
                    </div>
                    <div className=" Container-Empty border border-success h-100 w-50 O-X O-Y">
                        {loyalty.description}
                    </div>
                </div>
            </div>
        );
    }
}

BoxLoyalty.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BoxLoyalty.defaultProps = {
    tag: 'div',
    size: 'big'
};

export default BoxLoyalty;