import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderSystemPage from './HeaderSystemPage';
import MenuSystem from './MenuSystem';



class ProtoFormSystem extends React.Component {
    constructor(props) {
        super(props);
        this.to = "/";
        this.state = {
            global: this.props.global,
            to: "/",
            exit: false
        }

    }

    handleOnClickMenu = (e, url) => {
        this.to = url;
        this.setState({
            to: url,
            exit: true
        });
    }


    render() {

        const {
            children,
            className,
            title,
            global
        } = this.props;

        if (this.state.exit === true) {
            return <Redirect to={this.to} />
        }


        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderSystemPage title={title} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="d-flex flex-row Container-Empty h-100 w-100 O-X  ">
                    <div id="LeftCA" className=" d-flex flex-column Container-Empty O-X">
                        <MenuSystem global={global} exitForm="/company/admin" />
                    </div>
                    <div id="RightCA" className={className}>
                        {children}
                    </div>

                </div>
            </div>
        )
    }
}

ProtoFormSystem.propTypes = {
    children: PropTypes.node,
    className: "d-flex flex-row flex-wrap Container-Empty"
};

ProtoFormSystem.defaultProps = {
};

export default ProtoFormSystem;