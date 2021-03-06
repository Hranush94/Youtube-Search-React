import React from 'react';

const VideoListItem = (props) => {
   const  video=props.video;
   const onVideoSelect=props.onVideoSelect;
    const imageURL=video.snippet.thumbnails.default.url;
    return <li className="list-group-item" onClick={()=>onVideoSelect(video)}>
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageURL}/>
            </div>

            <div className="media-body">
                <div classNema="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    </li>;
};
export default VideoListItem;