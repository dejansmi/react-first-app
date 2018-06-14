import React from 'react';
import classNames from 'classnames';
import Button from './Button';

const defaultProps = {
    tag: 'button',
    color: 'whiteLink',
    to: ""
};



class ButtonToggleDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {




        const {
            children,
            name
        } = this.props;




        const classes = classNames(
            'w-100',
            'd-flex',
            'flex-column'
        );

        console.log ({children})


        return (
            <div className={classes}>
                <Button className="ColorYellow w-100" onClick={(e) => this.toggle(e)}><b><i>{name}</i></b></Button>
                {(this.state.toggle) ?
                    (<span>{children}</span>
                    ) : (null)}
            </div>
        );
    }
}

ButtonToggleDiv.defaultProps = defaultProps;

export default ButtonToggleDiv;