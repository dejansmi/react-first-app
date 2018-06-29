import React from 'react';
import classNames from 'classnames';
import Button from './Button';

const defaultProps = {
    tag: 'button',
    color: 'whiteLink',
    toggle: false,
    to: ""
};


class ButtonToggleDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: this.props.toggle
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {




        const {
            children,
            name,
            className,
            secondColor
        } = this.props;




        const classes = classNames(
            'w-100',
            'd-flex',
            'flex-column',
            className
        );

        const classesButton = classNames(
            (secondColor)?('ColorGray'):('ColorYellow'),
            'w-100'
        )


        return (
            <div className={classes}>
                <Button className={classesButton} onClick={(e) => this.toggle(e)}><b><i>{name}</i></b></Button>
                {(this.state.toggle) ?
                    (<span>{children}</span>
                    ) : (null)}
            </div>
        );
    }
}

ButtonToggleDiv.defaultProps = defaultProps;

export default ButtonToggleDiv;