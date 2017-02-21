import React, { Component, PropTypes } from 'react'

class MomentDeleteModal extends Component {
  render() {
    return (
      <div className="modal fade" id="momentDeleteModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-body">
            <form action={this.props.momentEditUrl} method="POST" encType="multipart/form-data">
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

export default MomentDeleteModal;
