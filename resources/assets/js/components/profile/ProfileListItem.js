import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ProfileListItem extends Component {
  constructor (props) {
    super(props);
    this.clickCallback = this.clickCallback.bind(this);
  }

  clickCallback() {
    console.log('1111111111')
    console.log(this.props.profileId)
    this.props.onClickEvent(this.props.profileId)
  }

  render() {
    return (
      <tr>
        <td>
          <Link to={`/profiles/${this.props.profileId}`}>{this.props.profileFirstName} {this.props.profileLastName}</Link>
        </td>
        <td>
          <Link 
            className="btn-floating red waves-effect waves-light modal-trigger" 
            to={`/profiles/${this.props.profileId}/edit`}
          >
            <i className="material-icons">mode_edit</i>
          </Link>
          <Link 
            className="btn-floating grey waves-effect waves-light" 
            data-target="profileDeleteModal"
            onClick={this.clickCallback}
          >
            <i className="material-icons">delete</i>
          </Link>
        </td>
      </tr>
    )
  }
}

export default ProfileListItem; 
