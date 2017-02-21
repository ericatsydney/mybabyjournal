import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import MomentEditModal from './MomentEditModal'
import MomentDeleteModal from './MomentDeleteModal'
import MomentList from './MomentList'

class ProfileList extends Component {
  render() {
    return (
      <div className="list-group"> 
        {
	  this.props.profiles.map(profile =>  
	    <ProfileListItem 
	      key={profile.id} 
	      firstName={profile.first_name} 
	      lastName={profile.last_name} 
	      gender={profile.gender} 
	      profileId={profile.id} 
	      avatar={profile.avatar} 
	      dateOfBirth={profile.date_of_birth} 
	      activeId={this.props.activeProfileId}
            ></ProfileListItem> 
	  )
	}
      </div>);
  }
}
class ProfileListItem extends Component {
  render() {
    let classes = "list-group-item";
    classes += this.props.activeId === this.props.profileId ? ' active' : '';

    return (
      <Link to={`/profiles/${this.props.profileId}`} className={classes}>
        <div className="row">
	  <div className="col-xs-5">
            <ProfileAvatar avatar={this.props.avatar}/> 
	  </div>
	  <div className="col-xs-7">
            {this.props.firstName} {this.props.lastName}
	  </div>
	</div>
      </Link>
    );
  }
}
class ProfileAvatar extends Component {
  render() {
    return (
      <img src={this.props.avatar} className="img-circle" width="50" height="50" />
    );
  }
}

class CreateMomentButton extends Component {
  constructor(props) {
    super(props);
    this.clickCallback = this.clickCallback.bind(this);
  }

  clickCallback() {
    this.props.onClickEvent(
      `/api/profiles/${this.props.profileId}/moments`,
      '',
      '' 
    );
  }

  render() {
    return (
      <div className="btn-wrapper">
	  <Link className="btn" to={`/profiles/${this.props.profileId}/edit`}>Edit Profile</Link>
          <a className="btn" role="button">
            Albumn Mode          
          </a>
	  <button 
	    className="waves-effect waves-light btn modal-trigger" 
            onClick={this.clickCallback}
            data-target="momentEditModal"
          >Add New Moment
	  </button>
      </div>
    )
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momentEditUrl: '',
      momentName: '',
      momentDescription: ''
    };

    this.prepopulateMomentModal = this.prepopulateMomentModal.bind(this);
  }

  prepopulateMomentModal(url, name, description) {
    this.setState({
      momentEditUrl: url,
      momentName: name,
      momentDescription: description
    }); 
  }

  updateMoment(name, description) {
    this.setState({
      momentName: name,
      momentDescription: description
    });
  }

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch, this.props.profileFetch, this.props.momentsFetch])}
        onFulfillment={([profiles, profile, moments]) => {
          return (
            <div className="profile__info">
              <div className="col-xs-10">
	        <CreateMomentButton 
		  profileId={profile.id} 
		  onClickEvent={this.prepopulateMomentModal} 
		/>
	        <MomentList 
		  moments={moments} 
		  profileId={profile.id} 
		  onClickEvent={this.prepopulateMomentModal} 
		/>
	      </div>
              <div className="col-xs-2">
	        <ProfileList 
                  profiles={profiles} 
                  activeProfileId={profile.id}
                />
	      </div>
              <div className="col-xs-12">
	        <MomentEditModal 
		  momentEditUrl={this.state.momentEditUrl}
		  momentName={this.state.momentName}
		  momentDescription={this.state.momentDescription}
                  onUserInput={this.updateMoment}
		/>
	        <MomentDeleteModal 
		  momentEditUrl={this.state.momentEditUrl}
		/>
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
  profilesFetch: {
    url: `/api/profiles`,
  },
  profileFetch: {
    url: `/api/profiles/${props.params.profileId}`,
  },
  momentsFetch: `/api/profiles/${props.params.profileId}/moments`,
}))(Profile)
