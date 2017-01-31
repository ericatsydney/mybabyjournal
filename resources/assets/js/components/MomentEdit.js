import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class MomentEditForm extends Component {
  render() {
    let updateUri = `/api/moments/${this.props.moment.id}`;
    return (
      <div className="moment-edit-form"> 
        <form action={updateUri} method="POST" encType="multipart/form-data">
          <input type="hidden" name="_method" value="PUT" />
          <div className="md-form">
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" ref={(input) => this.input = input} defaultValue={this.props.moment.name}/>
            <label for="name">First name</label>
          </div>
          <div className="md-form">
            <textarea type="text" className="form-control md-textarea" id="description" name="description" placeholder="Enter description" ref={(input) => this.input = input} defaultValue={this.props.moment.description}/>
            <label for="name">Description</label>
          </div>
	  <div className="md-form">
            <div className="row">
	       <img src={this.props.moment.avatar} className="img-circle pull-left" />
	       <input type="file" className="form-control-file" id="avatar" name="avatar" />
            </div>
	    <label for="avatar">Avatar</label>
	  </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

class MomentEdit extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.momentFetch])}
        onFulfillment={([moment]) => {
          return (
            <div className="moment__info">
              <div className="col-xs-12">
	        <MomentEditForm moment={moment}/>
	      </div>
	    </div>
          )
        }}
      />
    )
  }
}

// @todo Modified react-refetch/lib/components/connect.js to add xsrf token in.
// @todo Need to rewrite it in custom components.
export default connect((props, context) => ({
  momentFetch: {
    url: `/api/moments/${props.params.momentId}`,
  }
}))(MomentEdit)
