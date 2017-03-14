import React, { Component, PropTypes } from 'react'
import MomentPhotosThumnail from './MomentPhotosThumnail'
import { Link } from 'react-router'

class MomentListItem extends Component {
  constructor(props) {
    super(props);
    this.clickCallback = this.clickCallback.bind(this);
  }

  clickCallback() {
    this.props.onClickEvent(
      `/api/profiles/${this.props.profileId}/moments/${this.props.id}`,
      `${this.props.name}`,
      `${this.props.description}`
    );
  }

  render() {
    return (
      <li className="item">
        <div className="moment-meta">
          <div className="moment-title">
            <Link to={`/moments/${this.props.id}`}>{this.props.name}</Link>
          </div>
            <Link 
              className="btn-floating red waves-effect waves-light modal-trigger" 
              data-target="momentEditModal"
              onClick={this.clickCallback}>
              <i className="material-icons">mode_edit</i>
            </Link>
            <Link 
              className="btn-floating grey waves-effect waves-light" 
              data-toggle="modal" 
              data-target="#momentDeleteModal"
              onClick={this.clickCallback}>
              <i className="material-icons">delete</i>
            </Link>
        </div>
        <div className="moment-desc">
          <div className="location">
            <i className="tiny material-icons">place</i>
            Brisbane
          </div>
	  <div className="col-xs-5">
            <MomentPhotosThumnail/> 
	  </div>
	</div>
      </li>
    );
  }
}

export default MomentListItem;
