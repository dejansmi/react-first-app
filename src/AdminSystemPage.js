import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderSystemPage from './HeaderSystemPage';
import './AdminCompanyPage.css';
import BoxCardCompany from './BoxCardCompany';
import MenuSystem from './MenuSystem';




class AdminSystemPage extends React.Component {
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
        this.setState ({
            to: url,
            exit: true
        });
    }




    render() {


        if (this.state.exit === true) {
            console.log("REDIRECT "+ this.to)
            return <Redirect to={this.to} />
        }

        const {
            global
        } = this.props;


        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderSystemPage title={global.t("AdminSystemPage.systemSetup")} global={global} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="d-flex flex-row Container-Empty h-100 w-100 O-X border border-primary ">
                    <div id="LeftCA" className=" d-flex flex-column Container-Empty O-X">
                        <MenuSystem global={global} exitForm="/"/>
                    </div>
                    <div id="RightCA" className="d-flex flex-row flex-wrap Container-Empty">
                        <BoxCardCompany textSize="big" title="KPI 1" 
                             onClick={(e) => this.handleOnClickMenu(e, "/company/forpackaging")}>2</BoxCardCompany>
                        <BoxCardCompany textSize="big" title="KPI 2" textBody="25"/>
                        <BoxCardCompany textSize="big" title="KPI 3" textBody="45"/>
                        <BoxCardCompany textSize="medium" title="KPI 4" textBody="123.322,23">143.532,23</BoxCardCompany>
                        <BoxCardCompany textSize="big" title="KPI 5" textBody="0"/>
                    </div>

                </div>
            </div>
        )
    }
}

AdminSystemPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

AdminSystemPage.defaultProps = {
    tag: 'div'
};

export default AdminSystemPage;