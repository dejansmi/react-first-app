import React, { Component } from 'react';


class BayerCommentShow extends Component {

    constructor(props) {
        console.log("U CONSTRU")
        super(props);
        const bayersSayLen = 6;
        this.iSize = props.global.bayersSay.length;
        console.log("ISize:", this.iSize);
        this.state = {
            bayersSayLen: bayersSayLen,
            bayerPosition: bayersSayLen,
            bayersSay: props.global.bayersSay.slice(0, bayersSayLen).reverse(),
            interval: 3000
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.commentsShow(),
            this.state.interval
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    commentsShow() {
        let iLen, iPosition;
        iLen = this.state.bayerPosition + 1;
        if (iLen > this.iSize) {
            iLen = iLen - 1;
        }
        iPosition = iLen - this.state.bayersSayLen;
        if (iPosition < 0) {
            iPosition = this.iSize + iPosition;
            this.setState({
                bayerPosition: iLen,
                bayersSay: [...this.props.global.bayersSay.slice(iPosition, this.iSize),
                ...this.props.global.bayersSay.slice(0, iLen)].reverse()
            });
        } else {
            this.setState({
                bayerPosition: iLen,
                bayersSay: this.props.global.bayersSay.slice(iPosition, iLen).reverse()
            });
        }
    }

    render() {

        /* 
         const {
             global
         } = this.props;
         */

        const BayerComments = this.state.bayersSay.map((comment, ind) =>
            <div className="border">{comment.user} <b>{comment.city}</b>:{comment.comment}</div>
        );

        return (
            <div className="Container-Empty">
                {BayerComments}
            </div>
        )
    }
}

export default BayerCommentShow;