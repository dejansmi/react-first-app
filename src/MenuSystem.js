import React from 'react';
import { Redirect } from "react-router-dom";
import ButtonToggleDiv from './ButtonToggleDiv';
import Button from './Button';
import T from './T';


class MenuSystem extends React.Component {
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





        return (
            <React.Fragment>
                    <ButtonToggleDiv secondColor name={global.t("MenuSystem.hostBank")}>
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/system/bankslist')}><T id="MenuSystem.defaultBank" global={global}/></div>
                    </ButtonToggleDiv>
 
                <ButtonToggleDiv secondColor name={global.t("MenuSystem.setup")}>
                    <div className="ml-3"><T id="MenuSystem.users" global={global}/></div>
                    <div className="ml-3"><T id="MenuSystem.parameters" global={global}/></div>
                </ButtonToggleDiv>
                <Button secondColor onClick={(e) => this.handleOnClickMenu(e, this.props.exitForm)}>{global.t("MenuSystem.exit")}</Button>
            </React.Fragment>
        )
    }
}


MenuSystem.defaultProps = {
    tag: 'div',
    exitForm: "/"
};

export default MenuSystem;