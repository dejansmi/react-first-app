import React, { Component } from 'react';
import ListImg from './ListImg';
import CheckBox from './CheckBox';
import Login from './Login';
import { Redirect } from "react-router-dom";


class HeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global,
            redirect: false,
            product: "",
            searchValue: "",
            inputValue: 1000,
            iPostition: 0
        }
        this.iCorrect= 1;
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
        this.timerID = setInterval(
            () => this.moveImgList(),
            this.state.inputValue
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    overMouse = (i) => {
        this.iCorrect = i;
    }

    moveImgList = () => {
        if (this.state.iCorrect > 0) { return };
        this.setState(prevStat => ({
            iPostition: prevStat.iPostition + this.iCorrect
        }));
        if (this.props.imgList.length <= this.state.iPostition) {
            this.setState({
                iPostition: 0
            });
        }
    }

    handleOnClick = (event, product) => {
        this.props.global.product = product;
        this.setState({ redirect: true });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    render() {

        const {
            bankLogo,
            imgList
        } = this.props;

        if (this.state.redirect === true) {
            return (

                <Redirect to={{
                    pathname: '/product',
                    state: { product: this.props.global.product }
                }} push />

            )
        }


        return (
            <div className="col-12 fixed-top container-fluid" >
                <div className="col-12 fixed-top container-fluid" >
                    <div onMouseOver={()=>this.overMouse(0)} onMouseOut={()=>this.overMouse(1)} className="col-12 d-flex Color align-items-end Header-Size O-X" >
                        <img src={bankLogo} className=" Opacity " alt="Primer" />
                        <div id="BankRecomanded" className="col-2 d-flex align-items-end align-text-top">Preporučuje</div>
                        <ListImg list={imgList.slice(this.state.iPostition, imgList.length).concat(imgList)} from="HeaderPage" global={this.props.global} onClick={this.handleOnClick} />
                    </div>
                    <div className="col-12 d-flex ColorGray align-items-end Header-Size" >
                        <div className="row col-12 H80 mt-0 pt-0 d-flex  align-self-center">
                            <div className="col-0 col-sm-1 col-md-2"> </div>
                            <div className="col-3 col-sm-1 h-100 pt-0 pb-0 d-flex flex-column">
                                <CheckBox label="Proizvodi" small checked />
                                <CheckBox label="Kompanije" small />
                            </div>


                            <div className="d-flex flex-row h-100 col-6  mr-auto">
                                <i className="material-icons align-self-center">search</i>
                                <input className="form-control" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Unesite želju da je ispunimo" />
                            </div>

                            <div className="d-flex flex-column">
                                <Login user={this.state.global.user} {...this.props} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

HeaderPage.defaultProps = {
    from: "None",
    tag: 'div'
};


export default HeaderPage;