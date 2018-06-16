import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderCompanyPage from './HeaderCompanyPage';
import './AdminCompanyPage.css';
import ButtonToggleDiv from './ButtonToggleDiv';



class AdminCopmanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            username: "",
            password: "",
            exit: false
        }

    }




    render() {


        if (this.state.exit === true) {
            return <Redirect to='/' />
        }


        return (
            <div className="Container-Empty h-100 w-100 ">
                <HeaderCompanyPage imgList={this.props.global.imgList} {...this.props} value="" />
                <div className="Header-Size w-100"></div>
                <div className="d-flex flex-row Container-Empty h-100 w-100 O-X  ">
                    <div id="LeftCA" className=" d-flex flex-column Container-Empty O-X">
                    <ButtonToggleDiv secondColor name="Porudzba">
                        <div className="ml-3">Za pakovanje</div>
                        <div className="ml-3">Za isporuku</div>
                    </ButtonToggleDiv>
                    <ButtonToggleDiv secondColor name="Podesavanja">
                        <div className="ml-3">Korisnici</div>
                        <div className="ml-3">Parametri</div>
                    </ButtonToggleDiv>
                    </div>
                    <div id="RightCA" className="d-flex flex-row flex-wrap Container-Empty">
                        Primer 2
                        Primer 3
                    </div>

                </div>
            </div>
        )
    }
}

AdminCopmanyPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

AdminCopmanyPage.defaultProps = {
    tag: 'div'
};

export default AdminCopmanyPage;