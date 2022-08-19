import React from "react";

const Video = ({ videoSourceMp4, isAutoPlay }) => {
    return (
        <div>
            <video height="240" width="320" preload="auto" autoPlay={isAutoPlay} controls="controls" muted>
                <source src={videoSourceMp4} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
