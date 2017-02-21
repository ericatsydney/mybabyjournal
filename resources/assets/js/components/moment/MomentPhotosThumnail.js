import React, { Component, PropTypes } from 'react'

class MomentPhotosThumnail extends Component {
  render() {
    return (
      <div className="moment-photo-thunmnail">
        <img src="http://placehold.it/50x50" className="img-thumbnail"/>
        <img src="http://placehold.it/50x50" className="img-thumbnail"/>
      </div>
    );
  }
}

export default MomentPhotosThumnail;
