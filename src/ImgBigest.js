import React from 'react';
import { Button } from '@material-ui/core';

function ImgBigest(props) {
    const {
        src,
        show,
        hideOnClick
    } = props;

    const x = window.innerWidth;
    const y = window.innerHeight;

    const style = {
        position: 'fixed',
        left: 0,
        top: 0,
        minWidth: x,
        maxHeight: y,
        overflow: 'hidden',
        zIndex: 100000
    }
    const styleImg = {
        display: (show)?("block"):("none"),
        border: '5px solid yellow'
    }
    const styleButton = {
        display: (show)?("block"):("none"),
        position: 'fixed',
        left: 7,
        top: 7,
        backgroundColor: 'yellow'
    }


    return (
        <div style={style}>
            <img style={styleImg} src={src} className="img-fluid" alt="Book" />
            <Button  style={styleButton} onClick={hideOnClick}>Nazad</Button>
        </div>
    );
}

export default ImgBigest;