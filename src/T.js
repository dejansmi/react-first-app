import React from 'react';
import PropTypes from 'prop-types';



class T extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            global: this.props.global
        }

    }

    render() {

        const {
            id,
            global,
            tenant
        } = this.props;



        return (
            <span className="Container-Empty">
            {global.tt(id, tenant)}
            </span>
        )
    }
}

T.propTypes = {
    children: PropTypes.node
};

T.defaultProps = {
};

export default T;