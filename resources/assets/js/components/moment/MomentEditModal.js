import React, { Component, PropTypes } from 'react'

class MomentEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.momentName.value,
      this.momentDescription.value
    );
  }

  componentDidMount() {
    // componentDidMount is the ready event for react
    $('.modal').modal();
  }

  render() {
    let pattern = /^\/api\/profiles\/(\d+)\/moments$/;
    let hiddenMethod = <input type="hidden" name="_method" value="PUT"></input>;
    // For create moment action, we don't need this hidden field.
    if (pattern.test(this.props.momentEditUrl)) {
      hiddenMethod = null;
    }
    return (
      <div className="modal" id="momentEditModal">
        <div className="modal-content">
          <form action={this.props.momentEditUrl} method="POST" encType="multipart/form-data">
            {hiddenMethod}
            <div className="input-field">
              <input 
                type="text" 
                id="moment-name" 
                name="name" 
                placeholder="Enter name" 
                value={this.props.momentName}
                ref={(input) => this.momentName = input}
                onChange={this.handleChange}
              />
              <label htmlFor="moment-name" className="active">Name of the moment</label>
            </div>
            <div className="input-field">
              <textarea 
                type="text" 
                className="materialize-textarea" 
                id="description" 
                name="description" 
                placeholder="Enter description" 
                value={this.props.momentDescription}
                ref={(input) => this.momentDescription = input}
                onChange={this.handleChange}
              />
              <label htmlFor="descrption" className="active">Description</label>
            </div>
            <img src={this.props.avatar} className="img-circle pull-left" />
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input id="photos" name="photos[]" type="file" multiple/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MomentEditModal;
