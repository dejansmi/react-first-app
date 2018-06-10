import React from 'react';
import classNames from 'classnames';

function ImgBox(props) {
    const {
        src,
        width,
        height,
        size,
        className,
        ...attributes
    } = props;

    const classes = classNames(
        'O-X',
        'O-Y',
        'Container-Empty',
        (size === "big") ? 'font-normal' : '',
        (size === "small") ? 'font-small' : '',

        className
    );

    const styleWH = {
        width: width,
        height: height
    }

    return (
        <div style={styleWH} className={classes} {...attributes} >
            <img src={src} className="img-fluid" alt="Book" />
        </div>
    );
}

ImgBox.defaultProps = {
    width: '100%',
    height: 'auto'
};


export default ImgBox;