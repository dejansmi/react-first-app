import React from 'react';


class PripremaCarusel extends React.Component {
    constructor(props) {
        console.log("Tu sam");
        super(props);
        this.state = {
            broj: 0,
            period: 0
        };
        this.timerID = setInterval(
            () => this.tick(),
            this.props.period
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        if (this.props.period !== this.state.period) {
            this.setState({ period: this.props.period });
            clearInterval(this.timerID);
            this.timerID = setInterval(
                () => this.tick(),
                this.props.period
            );

        }
        if (this.state.broj >= this.props.listArray.length) {
            this.setState({ broj: 0 });
        } else {
            this.setState({
                broj: this.state.broj + 1
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.listArray[this.state.broj]}...{this.props.period}</h2>
            </div>
        );
    }
}

PripremaCarusel.defaultProps = {
    period: 500,
    listArray: []
};


export default PripremaCarusel;