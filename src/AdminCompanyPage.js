import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderCompanyPage from './HeaderCompanyPage';
import './AdminCompanyPage.css';
import BoxCardCompany from './BoxCardCompany';
import MenuCompany from './MenuCompany';



class AdminCompanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.to = "/";
        this.state = {
            global: this.props.global,
            to: "/",
            exit: false
        }
        this.nameCompany = this.nameCompany.bind(this);

    }

    handleOnClickMenu = (e, url) => {
        this.to = url;
        this.setState ({
            to: url,
            exit: true
        });
    }

    nameCompany = () => {
        let company;
        if (this.props.global.user !== "" && this.props.global.user.company !== undefined) {
            company = this.props.global.user.company;
            return this.props.global.company[company].name;
        }
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
                <HeaderCompanyPage title={this.nameCompany()} imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="d-flex flex-row Container-Empty h-100 w-100 O-X border border-primary ">
                    <div id="LeftCA" className=" d-flex flex-column Container-Empty O-X">
                        <MenuCompany global={global} exitForm="/"/>
                    </div>
                    <div id="RightCA" className="d-flex flex-row flex-wrap Container-Empty">
                        <BoxCardCompany textSize="big" title="Za pakovanje" 
                             onClick={(e) => this.handleOnClickMenu(e, "/company/forpackaging")}>2</BoxCardCompany>
                        <BoxCardCompany textSize="big" title="Za isporuku" textBody="25"/>
                        <BoxCardCompany textSize="big" title="Kod distributera" textBody="45"/>
                        <BoxCardCompany textSize="medium" title="Danas prodato" textBody="123.322,23">143.532,23</BoxCardCompany>
                        <BoxCardCompany textSize="big" title="Danas reklamacija" textBody="0"/>
                    </div>

                </div>
            </div>
        )
    }
}

AdminCompanyPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

AdminCompanyPage.defaultProps = {
    tag: 'div'
};

export default AdminCompanyPage;