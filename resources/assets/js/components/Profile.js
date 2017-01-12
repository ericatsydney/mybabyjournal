import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class Profile extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch, this.props.momentsFetch])}
        onFulfillment={([profile, moments]) => {
          return (
            <div className="profile__info">
              <p>{profile.first_name}</p>
              <p>{profile.last_name}</p>
              <p>{profile.date_of_birth}</p>
              <ul className="list-group">
                {moments.map((moment) => {
                  return (
                    <li key={moment.id} className="list-item">
                      <Link to={`/moments/${moment.id}`}>{moment.name}</Link>
                    </li>
                  )
                })}
              </ul>
	    </div>
          )
        }}
      />
    )
  }

}

export default connect((props, context) => ({
  profilesFetch: {
    url: `/api/profiles/${props.params.profileId}`,
    headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  },
  momentsFetch: `/api/profiles/${props.params.profileId}/moments`,
}))(Profile)
