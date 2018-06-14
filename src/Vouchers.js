import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import F from './F';


class Vouchers extends React.Component {
    constructor(props) {
        let vouchersList;
        if (props.global.user === "") {
            vouchersList = undefined;
        } else if (props.global.user.vouchers === undefined) {
            vouchersList = undefined;
        } else {
            vouchersList = props.global.user.vouchers;
        }
        super(props);
        this.state = {
            global: props.global,
            username: "",
            password: "",
            vouchers: vouchersList,
            checked: false,
            exit: false
        }
    }

    handleCancel(e) {
        this.setState({
            password: "",
            exit: true
        });
    }

    handleCheckBox (e, voucerKey) {
        var vouchers = this.state.vouchers;
        if (vouchers[voucerKey].checked === undefined) {
            vouchers[voucerKey].checked = true;
        } else {
            vouchers[voucerKey].checked = !vouchers[voucerKey].checked;
        }
        if (vouchers[voucerKey].checked) {
            console.log ("Cekiran")
            this.props.changeVoucer(-vouchers[voucerKey].ammount);
        } else {
            console.log ("Nije Cekiran")
            this.props.changeVoucer(vouchers[voucerKey].ammount);
        }
     
        this.setState ({
            vouchers: vouchers
        });
    }

    /*  <CheckBox label={labelCheck} small checked={this.state.checkedBuyPayLess} disable d={true} />                  */
    /*
    const VouchersList = ()=> { <div>AAA</div>(global.user!=="" && global.user.vouchers!==undefined)?(
        Object.keys(this.props.global.user.vouchers).forEach (key => 
            <div className="border">
                A
            </div>
        )):(null);}
    */
    render() {



        const {
            global,
            numProduct
        } = this.props;




        const disabledFunc = () => {
            if (numProduct > 0) {
                return false;
            } else {
                return true;
            }
        }

        const checked = (key) => (this.state.vouchers[key]!==undefined &&
                                  this.state.vouchers[key].checked!==undefined)?
                                  (this.state.vouchers[key].checked):(false);

        const labelCheck = (voucher) => <spam>
            {(voucher.for === "ALL") ? ('Opsti vaucer') : ('Vaucer za ' + voucher.for)} {voucher.currency} <F f="$0" a={voucher.ammount} />
        </spam>;

        const VouchersList = () => (global.user !== "" && global.user.vouchers !== undefined) ? (
            Object.keys(this.props.global.user.vouchers).map((key) =>
                (global.user.vouchers[key].for === 'ALL' ||
                    global.user.vouchers[key].for === global.product.company) ? (
                        <div className="border">
                            <CheckBox  label={labelCheck(global.user.vouchers[key])} small checked={checked(key)} disabled={disabledFunc()} onChange={(e) => this.handleCheckBox(e, key)}  />
                        </div>
                    ) : (null)
            )) : (null);


        console.log((global.user !== "" && global.user.vouchers !== undefined) ? (global.user.vouchers) : ("Nema"));

        return (
            (false && global.user !== "" && global.user.vouchers !== undefined) ? (
                <div className="Container-Empty h-100 w-100 ">
                    {VouchersList()}
                </div>
            ) : (null)
        )
    }
}

Vouchers.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Vouchers.defaultProps = {
    tag: 'div'
};

export default Vouchers;