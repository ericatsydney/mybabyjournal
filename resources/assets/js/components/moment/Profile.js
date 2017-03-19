import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import MomentEditModal from './MomentEditModal'
import MomentDeleteModal from './MomentDeleteModal'
import MomentList from './MomentList'
import ProfileHeader from './ProfileHeader'


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
              <div className="col s12">
	        <ProfileHeader 
                  profiles={profiles} 
                  activeProfileId={profile.id}
                  onClickEvent={this.prepopulateMomentModal} 
                />
	      </div>
              <div className="timeline-wrapper container">
                <div className="row z-depth-3">
                  <div className="col s12">
                    <MomentList 
                      moments={moments} 
                      profileId={profile.id} 
                      onClickEvent={this.prepopulateMomentModal} 
                    />
                  </div>
                </div>
              </div>
              <div className="col s12">
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
