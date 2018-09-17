import React from 'react';
import PropTypes from 'prop-types';
import starYellow from './Pictures/star-yellow.jpg';
import T from './T';



class Rate extends React.Component {


    render() {

        const {
            global
        } = this.props;


        const styleStar = {
            maxHeigth: '40px',
            overflow: 'hidden'
        }

        const styleImg = {
            width: 40,
            height: 40,
            maxWidth: 40, 
            maxHeigth: 40,
            overflow: 'hidden'
        }


        return (
            <div style={styleStar} className="d-flex flex-row">
            <spam><T id='Rate.rate' global={global}/></spam>
            {(this.props.rate >= 1)?(<div style={styleImg}><img  src={starYellow} className="img-fluid" alt="Rate 1" /></div>):(null)}
            {(this.props.rate >= 2)?(<div style={styleImg}><img  src={starYellow} className="img-fluid" alt="Rate 1" /></div>):(null)}
            {(this.props.rate >= 3)?(<div style={styleImg}><img  src={starYellow} className="img-fluid" alt="Rate 1" /></div>):(null)}
            {(this.props.rate >= 4)?(<div style={styleImg}><img  src={starYellow} className="img-fluid" alt="Rate 1" /></div>):(null)}
            {(this.props.rate >= 5)?(<div style={styleImg}><img  src={starYellow} className="img-fluid" alt="Rate 1" /></div>):(null)}
            </div>
        )
    }
}

Rate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Rate.defaultProps = {
    tag: 'spam'
};

export default Rate