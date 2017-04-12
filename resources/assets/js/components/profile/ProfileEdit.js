import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import Header from '../app/Header'

class ProfileEditForm extends Component {
  render() {
    let updateUri = `/api/profiles/${this.props.profile.id}`;
    return (
      <div className="profile-edit-form"> 
        <div className="container">
        <form action={updateUri} method="POST" encType="multipart/form-data">
          <div className="row">
            <input type="hidden" name="_method" value="PUT" />
            <div className="input-field">
              <input 
                type="text" 
                id="firstName" 
                name="first_name" 
                placeholder="Enter first name" 
                ref={(input) => this.input = input} 
                defaultValue={this.props.profile.first_name}
              />
              <label htmlFor="firstName" className="active">First name</label>
            </div>
            <div className="input-field">
              <input 
                type="text" 
                id="lastName"
                name="last_name"
                placeholder="Enter last name"
                ref={(input) => this.input = input} 
                defaultValue={this.props.profile.last_name}
              />
              <label htmlFor="lastName" className="active">Last name</label>
            </div>
            <div className="input-field">
              <input 
                type="text"
                id="dateOfBirth"
                name="date_of_birth"
                placeholder="yyyy-MM-dd"
                ref={(input) => this.input = input} 
                defaultValue={this.props.profile.date_of_birth}
              />
              <label htmlFor="dateOfBirth" className="active">Date of birth</label>
            </div>
            <div className="input-field">
              <label className="active">Gender</label>
              <p>
                <input 
                  name="gender"
                  type="radio"
                  id="genderBoy" 
                  value="boy" 
                  ref={(input) => this.input = input} 
                  defaultChecked={this.props.profile.gender === 'boy'} 
                />
                <label htmlFor="genderBoy">Boy</label>
              </p>
              <p>
                <input name="gender" 
                  type="radio" 
                  id="genderGirl" 
                  value="girl" 
                  ref={(input) => this.input = input}
                  defaultChecked={this.props.profile.gender === 'girl'} 
                />
                <label htmlFor="genderGirl">Girl</label>
              </p>
            </div>
          </div>
          <div className="row">
            <img src={this.props.profile.avatar} className="circle" width="100" height="100"/>
          </div>
          <div className="row">
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input id="avatar" name="avatar" type="file" />
              </div>
              <div className="file-path-wrapper">
                <input id="avatar" name="avatar" className="file-path validate" type="text" placeholder="Upload avatar"/>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
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
              <Header />
              <ProfileEditForm profile={profile}/>
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
