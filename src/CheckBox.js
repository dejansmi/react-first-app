import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CheckBox extends Component {
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

    render() {

        const {
            children,
            className,
            label,
            small,
            checked,
            ...attributes
        } = this.props;

        const classes = classNames(
            'Left-container',
            small ? 'Small-text' : '',
            className
        );

        return (
            <div {...attributes} className={classes} ><input type="checkbox" autoComplete="off" checked={this.state.checked} onClick={this.changeChecked}/> {label}</div>
        );
    }
}

CheckBox.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CheckBox.defaultProps = {
    label: '',
    checked: false,
    tag: 'div'
};

export default CheckBox;