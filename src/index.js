import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyATQwkMI-DSD1ROaxCPampE8tvPSILsu1k';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};


		// var that = this;
		// YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) { //Why doesn't work?
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container')); // Why do we do it like this?

/* And not like this?
var myApp = new App();
ReactDOM.render(myApp, document.querySelector('.container'));


<VideoList 
	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	videos={this.state.videos}/>
*/