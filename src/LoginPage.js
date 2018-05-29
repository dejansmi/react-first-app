import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavLink from './NavLink';
import HeaderPage from './HeaderPage';
import ping from './logo.png';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global
        }
    }


    render() {

        const {
            children,
            className,
            global,
            ...attributes
        } = this.props;



        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderPage bankLogo={ping} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="Header-Size w-100"></div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

LoginPage.defaultProps = {
    tag: 'div'
};

export default LoginPage;