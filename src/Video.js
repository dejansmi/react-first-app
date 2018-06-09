import React from 'react';
import RaiffeisenVisaFIFA from './Pictures/RaiffeisenVisaFIFA.mp4';


class Video extends React.Component {
    constructor(props) {
        super(props);
        this.playVideo = this.playVideo.bind(this)
    }


    playVideo() {
        // You can use the play method as normal on your video ref
        //this.refs.vidRef.play();
    }

    pauseVideo() {
        // Pause as well
        this.refs.vidRef.pause();
    }

    componentDidMount() {
        this.playVideo();
    }

    // You can pass your function references to your child components as props (here passing down to the Buttons component)
    render() {
        return (
            <div className="w-100 embed-responsive embed-responsive-16by9 O-X O-Y">
                <video ref="vidRef" src={RaiffeisenVisaFIFA} type="video/mp4" autoPlay="autoplay" loop="loop"></video>
            </div>
      );
    }
}


export default Video;
