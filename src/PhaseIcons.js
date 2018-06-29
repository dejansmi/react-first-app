import React from 'react';
import OrderedOnLine from './Pictures/Phases/orderedonline.png';
import Packiging from './Pictures/Phases/packiging.png';
import ToCourier from './Pictures/Phases/tocourier.png';
import Client from './Pictures/Phases/client.png';
import Enjoy from './Pictures/Phases/enjoy.png';
import Img from './Img';
import classNames from 'classnames';


class PhaseIcons extends React.Component {

    render() {

        const {
            phase,
            className
        } = this.props;

        const classes = classNames(
            'h-100',
            'w-100',
            'O-Y',
            'Container-Empty',
            className
        );


        return (
            (phase === 0) ?
                (<div className={classes}><Img src={OrderedOnLine} alt="Naruceno" /></div>
                ) : ((phase === 1) ? (<div className={classes}><Img src={Packiging} alt="Packiging" /></div>
                ) : ((phase === 2) ? (<div className={classes}><Img src={ToCourier} alt="Delivery" /></div>
                ) : ((phase === 3) ? (<div className={classes}><Img src={Client} alt="To Client" /></div>
                ) : ((phase === 4) ? (<div className={classes}><Img src={Enjoy} alt="Enjoy" /></div>
                ) : (<spam>{phase}</spam>)
                    ))))
                );
    }

}

export default PhaseIcons;