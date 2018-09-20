import React from 'react';
import { Redirect } from "react-router-dom";
import ButtonToggleDiv from './ButtonToggleDiv';
import Button from './Button';
import T from './T';


class MenuCompany extends React.Component {
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
        if (url==="/") {
            this.props.global.setUser("", "", "LogOut");
        }

        this.setState({
            to: url,
            exit: true
        });
    }


    render() {

        const {
            global
        } = this.props;

        if (global.user === "") {
            this.to = "/"
        }

        if (global.user === "" || this.state.exit === true) {
            return <Redirect to={this.to} />
        }



        const company = global.user.company;


        return (
            <React.Fragment>
                {(global.company[company].delivery) ? (
                    <ButtonToggleDiv secondColor name={global.t("MenuCompany.order")}>
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/forpackaging')}><T id="MenuCompany.forPacking" global={global}/></div>
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/fordelivery')}><T id="MenuCompany.forDelivery" global={global}/></div>
                    </ButtonToggleDiv>
                ) : (null)}
                {(global.company[company].courier) ? (
                    <ButtonToggleDiv secondColor name={global.t("MenuCompany.distribution")}>
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/fordistribution')}><T id="MenuCompany.forDistribution" global={global}/></div>
                    </ButtonToggleDiv>
                ) : (null)}

                <ButtonToggleDiv secondColor name={global.t("MenuCompany.setup")}>
                    <div className="ml-3"><T id="MenuCompany.users" global={global}/></div>
                    <div className="ml-3"><T id="MenuCompany.parameters" global={global}/></div>
                </ButtonToggleDiv>
                <Button secondColor onClick={(e) => this.handleOnClickMenu(e, this.props.exitForm)}><T id="MenuCompany.exit" global={global}/></Button>
            </React.Fragment>
        )
    }
}


MenuCompany.defaultProps = {
    tag: 'div',
    exitForm: "/"
};

export default MenuCompany;