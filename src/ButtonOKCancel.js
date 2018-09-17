import React from 'react';
import classNames from 'classnames';
import './ButtonOKCancel.css';
import Button from './Button';
import T from './T';

class ButtonOKCancel extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            both,
            cancel,
            OK,
            secondColor,
            continues,
            className,
            center,
            onClickOK,
            onClickCancel,
            onClickContinues,
            onClick,
            global,
            ...attributes
        } = this.props;

        const classes = classNames(
            className,
            'btn-OKCancel',
            (secondColor)?('secondColor-OKCancel'):(null)
        );

        const typeMessage = (OK) ? (<T id="Button.OK" tenant global={global}/>) : ((continues)?(<T id="Button.continue" global={global}/>):(<T id="Button.cancel" global={global}/>));

        const onClickOKFunc = (onClickOK !== undefined)?(onClickOK):(onClick);
        const onClickCancelFunc = (onClickCancel !== undefined)?(onClickCancel):(onClick);
        const onClickContinuesFunc = (onClickContinues !== undefined)?(onClickContinues):(onClick);
        const onClickFunc = (OK) ? (onClickOKFunc) : ((continues)?(onClickContinuesFunc):(onClickCancelFunc));


        if (center) {
            return (
                <div className="center-OKCancel">
                    {(both) ? (<span>
                        <Button className={classes} {...attributes} onClick={onClickOKFunc}><T id="Button.OK" tenant global={global}/></Button>
                        <Button className={classes} {...attributes} onClick={onClickCancelFunc}><T id="Button.cancel" global={global}/></Button></span>) :
                        (<Button className={classes} {...attributes} onClick={onClickFunc}>{typeMessage}</Button>)}
                </div>
            )

        } else {
            return (
                <span>
                    {(both) ?
                        (<span>
                            <Button className={classes} {...attributes} onClick={onClickOKFunc}>Može</Button>
                            <Button className={classes} {...attributes} onClick={onClickCancelFunc}>Odustani</Button>
                         </span>) :
                        (<Button className={classes} {...attributes} onClick={onClickFunc}>{typeMessage}</Button>)}
                </span>
            )
        }
    }
}
export default ButtonOKCancel;