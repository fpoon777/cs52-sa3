/* eslint-disable linebreak-style */
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';

// google api key:AIzaSyCmh2SeHbt2vpqIrFVIIyzImcmEYCX_3so
class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

    search = (text) => {
      youtubeSearch(text).then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
    };

    render() {
      return (
        <div>
          <SearchBar onSearchChange={this.search} />
          <div id="video-section">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
          </div>
        </div>
      );
    }
}

export default Youtube;
