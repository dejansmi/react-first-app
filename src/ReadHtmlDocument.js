import React from 'react';
import { Button } from '@material-ui/core';

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
            readAll
        } = this.props;


        return (
            <div className="w-100 readHtmlDocument"  >{children}
                <Button className="ColorYellow w-100 small" onClick={readAll}>Potvrdjujem da je pročitano</Button>
            </div>
        )
    }
}

export default ReadHtmlDocument;