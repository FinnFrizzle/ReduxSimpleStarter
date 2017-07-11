import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_Bar.js';
import VideoList from './components/Video_List';
import VideoDetail from './components/video_Detail';

const API_KEY = 'AIzaSyBfAAWqYA-v86rBDCpTTHXL1MLdiXvVX4Q';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Das beer boot');
  }

// search in youtube for videos
videoSearch(term) {
  YTSearch({key: API_KEY, term: 'das beer boot'}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}



// create new component - produces HTML
  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// output generated HTML
ReactDOM.render(<App />, document.querySelector('.container'));
