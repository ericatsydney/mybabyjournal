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
      <li className="list-group-item">
        <div className="row">
	  <div className="col-xs-5">
	    <div className="moment-name">
              <MomentPhotosThumnail/> 
	    </div>
	  </div>
	  <div className="col-xs-5">
            <h3>
              <Link to={`/moments/${this.props.id}`}>{this.props.name}</Link>
            </h3>
	  </div>
	  <div className="col-xs-2">
            <Link 
              className="btn-floating red waves-effect waves-light modal-trigger" 
              data-target="momentEditModal"
              onClick={this.clickCallback}>
              <i className="fa fa-pencil"></i>
            </Link>
            <Link 
              className="btn-floating grey waves-effect waves-light" 
              data-toggle="modal" 
              data-target="#momentDeleteModal"
              onClick={this.clickCallback}>
              <i className="fa fa-trash"></i>
            </Link>
	  </div>
	</div>
      </li>
    );
  }
}

export default MomentListItem;
