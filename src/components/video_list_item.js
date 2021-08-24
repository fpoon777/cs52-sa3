import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { selectVideo } from '../actions';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.selectVideo(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
  );
};

// export default VideoListItem;

export default connect(null, { selectVideo })(VideoListItem);
