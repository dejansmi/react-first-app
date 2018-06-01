import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from "react-router-dom";
import { mapToCssModules } from './utils';

const propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
};

const defaultProps = {
    color: 'link',
    tag: 'button',
    to: ""
};

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exit: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }
        if (this.props.onClick) {
            this.props.onClick(e);
        } else {
            this.setState({ exit: true });
        }
    }

    render() {
        let {
            to,
            active,
            block,
            className,
            cssModule,
            color,
            outline,
            size,
            small,
            tag: Tag,
            innerRef,
            ...attributes
        } = this.props;

        if (this.state.exit === true) {
            return <Redirect to={to} />
        }


        const classes = mapToCssModules(classNames(
            className,
            'btn',
            `btn${outline ? '-outline' : ''}-${color}`,
            small ? 'Small-text' : '',
            size ? `btn-${size}` : false,
            block ? 'btn-block' : false,
            { active, disabled: this.props.disabled }
        ), cssModule);

        if (attributes.href && Tag === 'button') {
            Tag = 'a';
        }


        return (
            <Tag
                type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
                {...attributes}
                className={classes}
                ref={innerRef}
                onClick={this.onClick}
            />
        );
    }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;