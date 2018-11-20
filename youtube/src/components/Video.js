import './Video.css';
import React from 'react';

export default class Video extends React.Component {
    video = this.props.video;

    render() {
        return (
            <div 
                onClick={() => this.props.handleVideoSelect(this.video)} 
                className="video-item item" 
            >
                <img 
                    className="ui image" 
                    src={this.video.snippet.thumbnails.medium.url} 
                    alt={this.video.snippet.title}
                />
                <div className="content">
                    <div className="header">
                        {this.video.snippet.title} 
                    </div>
                </div>
            </div>
        );
    }
}