import React from 'react';
import { Button } from '@material-ui/core';
import T from './T';

class ReadHtmlDocument extends React.Component {
    constructor(props) {
        super(props);
        this.x = 0;
        this.lastRef = React.createRef();
        this.state = {
            endText: "."
        }
    }



    render() {

        const {
            children,
            global,
            readAll
        } = this.props;


        return (
            <div className="w-100 readHtmlDocument"  >{children}
                <Button className="ColorYellow w-100 small" global={global} onClick={readAll}><T id="OneClickCredit.acceptRead" global={global}/></Button>
            </div>
        )
    }
}

export default ReadHtmlDocument;