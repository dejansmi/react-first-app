import React from 'react';
import VideoAdd from './Pictures/addvideo.mp4';

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
            <div class="embed-responsive embed-responsive-16by9">
                //<iframe class="embed-responsive-item" src={VideoAdd} allowfullscreen></iframe>
                <video ref="vidRef" src={VideoAdd} type="video/mp4" autoplay="autoplay" loop="loop" w-100></video>
            </div>
            /*
             <div>
                <video ref="vidRef" src={VideoAdd} type="video/mp4" autoplay="autoplay" loop="loop" w-100></video>

            </div>
            */
      );
    }
}


export default Video;
