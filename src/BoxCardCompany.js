import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './BoxCardCompany.css';



class BoxCardCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            exit: false
        }

    }




    render() {

        const {
            children,
            title,
            textSize,
            textBody,
            onClick
         } = this.props;


         // bi
         const classForBody = classNames(
            'centerBox',
            (textSize==='big')?('font-big'):(null),
            (textSize==='medium')?('font-medium'):(null),
            (textSize==='normal')?('font-normal'):(null),
            (textSize==='small')?('font-small'):(null)
         )

         const textBodyFinal = (children===undefined)?(textBody):(children);

         
        return (
            <div className="Box-Card-Company d-flex flex-column" onClick={onClick}>
                <div className="Box-Card-Company-Title ColorGray">
                    {title}
                </div>
                <div className={classForBody}>
                    {textBodyFinal}
                </div>
            </div>
        )
    }
}

BoxCardCompany.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BoxCardCompany.defaultProps = {
    tag: 'div'
};

export default BoxCardCompany;