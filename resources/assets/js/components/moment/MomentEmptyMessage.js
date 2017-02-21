import React, { Component, PropTypes } from 'react'

class MomentEmptyMessage extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Opps there is no moment yet</h4>
          <p className="card-text">Create a new one.</p>
          <a className="btn btn-primary">Create a Moment</a>
        </div>
      </div>
    );
  }
}

export default MomentEmptyMessage;
