import React, { useContext } from "react";
import { MainContext } from "./Context";

const Video = ({ videoSourceMp4, isAutoPlay }) => {
    const store = useContext(MainContext);
    return (
        <div style={{ filter: `hue-rotate(-${store.hueRotate}deg)` }}>
            <video height="240" width="320" preload="auto" autoPlay={isAutoPlay} controls="controls" muted>
                <source src={videoSourceMp4} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
