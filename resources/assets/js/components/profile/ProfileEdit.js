import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'

class ProfileEditForm extends Component {
  render() {
    let updateUri = `/api/profiles/${this.props.profile.id}`;
    return (
      <div className="profile-edit-form"> 
        <form action={updateUri} method="POST" encType="multipart/form-data">
          <input type="hidden" name="_method" value="PUT" />
          <div className="form-group">
            <label for="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" name="first_name" placeholder="Enter first name" ref={(input) => this.input = input} defaultValue={this.props.profile.first_name}/>
          </div>
          <div className="form-group">
            <label for="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" name="last_name" placeholder="Enter last name" ref={(input) => this.input = input} defaultValue={this.props.profile.last_name}/>
          </div>
          <div className="form-group">
            <label for="dateOfBirth">Date of birth</label>
            <input type="text" className="form-control" id="dateOfBirth" name="date_of_birth" placeholder="yyyy-MM-dd" ref={(input) => this.input = input} defaultValue={this.props.profile.date_of_birth}/>
          </div>
	  <div className="form-group">
	    <label for="avatar">Avatar</label>
            <div className="row">
	       <img src={this.props.profile.avatar} className="img-circle pull-left" />
	       <input type="file" className="form-control-file" id="avatar" name="avatar" />
            </div>
	  </div>
	  <fieldset className="form-group">
	    <legend>Gender</legend>
	    <div className="form-check">
	      <label className="form-check-label">
		<input type="radio" className="form-check-input" name="gender" id="genderBoy" value="boy" ref={(input) => this.input = input} defaultChecked={this.props.profile.gender === 'boy'}/>Boy
	      </label>
	    </div>
	    <div className="form-check">
	      <label className="form-check-label">
		<input type="radio" className="form-check-input" name="gender" id="genderGirl" value="girl" ref={(input) => this.input = input} defaultChecked={this.props.profile.gender === 'girl'}/>Girl
	      </label>
	    </div>
          </fieldset>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

class ProfileEdit extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profileFetch])}
        onFulfillment={([profile]) => {
          return (
            <div className="profile__info">
              <div className="col-xs-12">
	        <ProfileEditForm profile={profile}/>
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
  profileFetch: {
    url: `/api/profiles/${props.params.profileId}`,
  }
}))(ProfileEdit)
