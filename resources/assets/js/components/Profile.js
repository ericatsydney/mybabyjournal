import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class ProfileList extends Component {
  render() {
    return (
      <ul className="profile-list"> 
        {
	  this.props.profiles.map(function(profile) { 
	    return ( <ProfileListItem 
	      key={profile.id} 
	      firstName={profile.first_name} 
	      lastName={profile.last_name} 
	      gender={profile.gender} 
	      profileId={profile.id} 
	      avatar={profile.avatar} 
	      dateOfBirth={profile.date_of_birth} 
	      ></ProfileListItem>); 
	  })
	}
      </ul>);
  }
}
class ProfileListItem extends Component {
  render() {
    return (
      <li className="profile-list-item">
        <ProfileAvatar/> 
	<div className="profile-name">
	  {this.props.firstName} {this.props.lastName}
	</div>
	<div className="profile-gender">
	  {this.props.gender}
	</div>
	<div className="profile-dob">
	  {this.props.dateOfBirth}
	</div>
      </li>
    );
  }
}
class ProfileAvatar extends Component {
  render() {
    return (
      <img src="http://placehold.it/90x90" />
    );
  }
}
class MomentList extends Component {
  render() {
    return (
      <ul className="moment-list"> 
        {
	  this.props.moments.map(function(moment) { 
	    return ( <MomentListItem 
	      key={moment.id} 
	      id={moment.id} 
	      name={moment.name} 
	      description={moment.description} 
	      photos={moment.photos} 
	      ></MomentListItem>); 
	  })
	}
      </ul>);
  }
}
class MomentListItem extends Component {
  render() {
    return (
      <li className="moment-list-item">
        <MomentPhotosThumnail/> 
	<div className="moment-name">
	  <Link to={`/moments/${this.props.id}`}>{this.props.name}</Link>
	</div>
      </li>
    );
  }
}
class MomentPhotosThumnail extends Component {
  render() {
    return (
      <div className="moment-photo-thunmnail">
        <img src="http://placehold.it/50x50" />
        <img src="http://placehold.it/50x50" />
      </div>
    );
  }
}
class Profile extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch, this.props.profileFetch, this.props.momentsFetch])}
        onFulfillment={([profiles, profile, moments]) => {
          return (
            <div className="profile__info">
	      <ProfileList profiles={profiles} activeProfileId={profile.id}/>
	      <MomentList moments={moments} />
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
  profilesFetch: {
    url: `/api/profiles`,
  },
  profileFetch: {
    url: `/api/profiles/${props.params.profileId}`,
  },
  momentsFetch: `/api/profiles/${props.params.profileId}/moments`,
}))(Profile)
