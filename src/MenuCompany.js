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
        console.log ("PROC "+ this.to)
        this.setState({
            to: url,
            exit: true
        });
    }


    render() {

        

        if (this.state.exit === true) {
            console.log ("MENU "+this.to)
            return <Redirect to={this.to} />
        }


        return (
            <React.Fragment>
                <ButtonToggleDiv secondColor name="Porudzba">
                    <div className="ml-3" onClick={(e) => this.handleOnClickMenu(e, '/company/forpackaging')}>Za pakovanje</div>
                    <div className="ml-3">Za isporuku</div>
                </ButtonToggleDiv>
                <ButtonToggleDiv secondColor name="Podesavanja">
                    <div className="ml-3">Korisnici</div>
                    <div className="ml-3">Parametri</div>
                </ButtonToggleDiv>
                <Button secondColor  onClick={(e) => this.handleOnClickMenu(e, this.props.exitForm)}>Izlaz</Button>
            </React.Fragment>
        )
    }
}


MenuCompany.defaultProps = {
    tag: 'div',
    exitForm: "/"
};

export default MenuCompany;