import React from 'react';
import { Button } from '@material-ui/core';
import T from './T';

function ImgBigest(props) {
    const {
        src,
        show,
        hideOnClick,
        global
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
            <img style={styleImg} src={src} className="img-fluid ColorWhite" alt="Book" />
            <Button  style={styleButton} onClick={hideOnClick}><T id="ImgBigest.back" global={global}/></Button>
        </div>
    );
}

export default ImgBigest;