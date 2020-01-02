// a component for generating a list of videos
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoChange}) => (
  <div className="video-list">
    {videos.map(video =>
      <VideoListEntry video={video} key={video.id.videoId} handleVideoChange={handleVideoChange}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
//how do  we pass videos props ? Do we do it here?
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
