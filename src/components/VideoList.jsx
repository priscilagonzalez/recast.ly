// a component for generating a list of videos
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} />
    )}
  </div>
);

//VideoListEntry is instantiated like this:  <VideoListEntry video={window.fakeVideoData[0]} />

// var VideoList = (props) => (
//   <div className="video-list">

//   </div>
// );


//What do we want to do with exampleVideoData?

//instantiate VideoList component with dummy data
//<VideoList videos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//app.jsx comparing ap

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
//how do  we pass videos props ? Do we do it here?
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
