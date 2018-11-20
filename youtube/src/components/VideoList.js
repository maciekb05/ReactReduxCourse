import React from 'react';
import Video from './Video';

export default class VideoList extends React.Component {
    renderVideos(videoList) {
        const renderedList = videoList.map((video) => {
            return (
                <Video 
                    key={video.id.videoId} 
                    video={video} 
                    handleVideoSelect={this.props.handleVideoSelect} 
                />
            );
        });

        return renderedList;
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderVideos(this.props.videos)}
            </div>
        );
    }
}