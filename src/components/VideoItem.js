import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={()=>onVideoSelect(video)} className="group my-3">
            <img className="mx-3" src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
            <p className="mx-3">{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem;