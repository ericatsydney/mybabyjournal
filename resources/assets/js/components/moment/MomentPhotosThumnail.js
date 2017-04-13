import React, { Component, PropTypes } from 'react'

class MomentPhotosThumnail extends Component {
  render() {
    const photos = JSON.parse(this.props.photos)
    let paths = [];
    for(var name in photos){
      paths.push('/' + photos[name]);
    }
    return (
      <div className="moment-photo-thunmnail">
        {
          paths.map(path => { 
            return ( 
              <img src={path} className="img-thumbnail" width="90" height="90" />
            )
          })
        }
      </div>
    );
  }
}

export default MomentPhotosThumnail;
