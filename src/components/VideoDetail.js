import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <iframe width="690" height="488" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video player" src={videoSrc} frameBorder="0"></iframe>
            <div className="card">
                <h4 className="card-header">{video.snippet.title}</h4>
                <div className="card-body">
                   <p className="card-text">{video.snippet.description}</p>
                </div>
           </div>
        </div>
    )
}

export default VideoDetail;