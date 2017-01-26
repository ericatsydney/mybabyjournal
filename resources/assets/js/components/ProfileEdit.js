import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class ProfileEditForm extends Component {
  render() {
    return (
      <div className="profile-edit-form"> 
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
