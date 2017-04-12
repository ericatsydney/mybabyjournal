import React, { Component, PropTypes } from 'react'

class ProfileDeleteModal extends Component {
  componentDidMount() {
    // componentDidMount is the ready event for react
    $('.modal').modal();
  }

  render() {
    return (
      <div className="modal fade" id="profileDeleteModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-body">
            <form action={`/api/profiles/${this.props.profileId}`} method="POST" encType="multipart/form-data">
              <p>You are going to delete the data in this profile. The action cannot be reverted.</p>
              <input type="hidden" name="_method" value="DELETE"></input>
              <button type="submit" className="btn btn-danger">Delete</button>
              <button className="btn btn-grey">Cancel</button>
            </form>
	  </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default ProfileDeleteModal;
