import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component { 
    state = {videos: [], selectedVideo: null};

    componentDidMount () {
        this.onTermSubmit('baloglan')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render () {
        return (
            <div>
                <div className="container border ml-5 my-4">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                </div>
                <div className="d-flex">
                    <div className="container m-4">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="container mt-1 mr-5">
                        <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;