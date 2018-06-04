import React from 'react';
import numeral from 'numeral';

class F extends React.Component {


    // You can pass your function references to your child components as props (here passing down to the Buttons component)
    render() {
        let s;
        let {
            f,
            format,
            a,
            ammount
        } = this.props;

        if (f===undefined && format!==undefined) {
            f = format;
        }
        if (a===undefined && ammount!==undefined) {
            a = ammount;
        }
        if (f==="$" || f==="$0") {
            s = numeral(a).format('0,0,0,0,0.00')
        } else {
            s = a.toString();
        }
        if (a === undefined || a === 0.00) {
            if (f==="$") {
                s = "";
            }
        }  

        return (<spam>{s}</spam>
      );
    }
}


export default F;