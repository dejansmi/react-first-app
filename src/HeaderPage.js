import React, { Component } from 'react';
import ListImg from './ListImg';
import CheckBox from './CheckBox';
import Login from './Login';


class HeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global
        }
    }



    render() {

        const {
            children,
            className,
            bankLogo,
            value,
            imgList,
            ...attributes
        } = this.props;

    

        return (
            <div className="col-12 fixed-top container-fluid" >
                <div className="col-12 fixed-top container-fluid" >
                    <div className="col-12 d-flex Color align-items-end Header-Size O-X" >
                        <img src={bankLogo} className=" Opacity " alt="Primer" />
                        <div id="BankRecomanded" className="col-2 d-flex align-items-end align-text-top">Preporučuje</div>
                        <ListImg list={imgList} from="HeaderPage" />
                    </div>
                    <div className="col-12 d-flex ColorGray align-items-end Header-Size" >
                        <div className="row col-12 H80 mt-0 pt-0 d-flex  align-self-center">
                            <div className="col-0 col-sm-1 col-md-2"> </div>
                            <div className="col-3 col-sm-1 h-100 pt-0 pb-0 d-flex flex-column">
                                <CheckBox label="Proizvodi" small checked />
                                <CheckBox label="Kompanije" small />
                            </div>


                            <div className="d-flex flex-row h-100 col-6 border border-primary mr-auto">
                                <i className="material-icons align-self-center">search</i>
                                <input className="form-control" type="text" value={value} onChange={this.handleChange} placeholder="Unesite želju da je ispunimo" />
                                <button className="btn h-100 col-4 border border-primary form-control ColorWhite align-self-center" type="button" >Primer
                </button>
                                <div className="h-100">Primer 1</div>
                            </div>

                            <div className="d-flex flex-column">
                                <Login user={this.state.global.user} {...this.props}/>
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