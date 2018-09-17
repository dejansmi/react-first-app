import React from 'react';
import ButtonOKCancel from './ButtonOKCancel';
import './ScreenMessage.css';

function ScreenMessage(props) {
    const {
        global,
    } = props;


    return (
        <div className="screen-message" >
            <div className="d-flex screen-window">
                <div className="screen-border d-flex flex-column justify-content-between">
                    <div>{global.screenMessage}</div>
                    <ButtonOKCancel continues center global={global} onClick={(e)=> global.ShowScreenMessage("")}/>
                </div>
            </div>
        </div>
    );
}


export default ScreenMessage;