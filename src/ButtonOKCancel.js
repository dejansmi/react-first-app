import React from 'react';
import classNames from 'classnames';
import './ButtonOKCancel.css';
import Button from './Button';

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
            className,
            center,
            ...attributes
        } = this.props;

        const classes = classNames(
            className,
            'btn-OKCancel'
        );

        if (center) {
            return (
                <div className="center-OKCancel">
                    {(both) ? (<span>
                        <Button className={classes} {...attributes}>Može</Button>
                        <Button className={classes} {...attributes}>Odustani</Button></span>) :
                        (<Button className={classes} {...attributes}>{(OK) ? ("Može") : ("Odustani")}</Button>)}
                </div>
            )

        } else {
            return (
                <span>
                    {(both) ?
                        (<span>
                            <Button className={classes} {...attributes}>Može</Button>
                            <Button className={classes} {...attributes}>Odustani</Button>
                         </span>) :
                        (<Button className={classes} {...attributes}>{(OK) ? ("Može") : ("Odustani")}</Button>)}
                </span>
            )
        }
    }
}
export default ButtonOKCancel;