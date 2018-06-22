import React from 'react';
import { Redirect } from "react-router-dom";
import ButtonToggleDiv from './ButtonToggleDiv';
import Button from './Button';


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
                    <ButtonToggleDiv secondColor name="Porudžba">
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/forpackaging')}>Za pakovanje</div>
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/fordelivery')}>Za isporuku</div>
                    </ButtonToggleDiv>
                ) : (null)}
                {(global.company[company].courier) ? (
                    <ButtonToggleDiv secondColor name="Distribucija">
                        <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/forpackaging')}>Za isporuku</div>
                    </ButtonToggleDiv>
                ) : (null)}

                <ButtonToggleDiv secondColor name="Podesavanja">
                    <div className="ml-3">Korisnici</div>
                    <div className="ml-3">Parametri</div>
                </ButtonToggleDiv>
                <Button secondColor onClick={(e) => this.handleOnClickMenu(e, this.props.exitForm)}>Izlaz</Button>
            </React.Fragment>
        )
    }
}


MenuCompany.defaultProps = {
    tag: 'div',
    exitForm: "/"
};

export default MenuCompany;