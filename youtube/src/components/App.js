import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.handleSubmit('buildings');
    }

    handleSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        const videos = response.data.items;

        this.setState({
            selectedVideo: videos[0],
            videos
        });

    };

    handleVideoSelect = (selectedVideo) => {
        this.setState({
            selectedVideo
        });
    };

    render() {
        return (
            <div className="ui container" >
                <SearchBar handleSubmit={this.handleSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}