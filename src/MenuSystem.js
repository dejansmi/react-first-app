import React from 'react';
import { Redirect } from "react-router-dom";
import ButtonToggleDiv from './ButtonToggleDiv';
import Button from './Button';


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
                    <ButtonToggleDiv secondColor name="Host banke">
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/system/bankslist')}>Default banka</div>
                    </ButtonToggleDiv>
                    <ButtonToggleDiv secondColor name="Distribucija">
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/fordistribution')}>Za distribuciju</div>
                    </ButtonToggleDiv>
 
                <ButtonToggleDiv secondColor name="Podesavanja">
                    <div className="ml-3">Korisnici</div>
                    <div className="ml-3">Parametri</div>
                </ButtonToggleDiv>
                <Button secondColor onClick={(e) => this.handleOnClickMenu(e, this.props.exitForm)}>Izlaz</Button>
            </React.Fragment>
        )
    }
}


MenuSystem.defaultProps = {
    tag: 'div',
    exitForm: "/"
};

export default MenuSystem;