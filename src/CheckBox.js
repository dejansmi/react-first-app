import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CheckBox extends Component {

    render() {

        const {
            children,
            className,
            label,
            small,
            checked,
            onClick,
            disabled,
            defaultChecked,
            ...attributes
        } = this.props;

        const classes = classNames(
            'Left-container',
            small ? 'Small-text' : '',
            className
        );


        return (
            <div {...attributes}  className={classes} ><input type="checkbox" autoComplete="off" defaultChecked={defaultChecked} checked={checked} disabled={disabled} onClick={this.props.onClick}/> {label}</div>
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