import React, { Component } from 'react'
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
              <ul>
                {moments.map((moment) => {
                  return (
                    <li key={moment.id}>
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

export default connect(props => ({
  profilesFetch: `/api/profiles/${props.params.profileId}`,
  momentsFetch: '/api/moments',
}))(Profile)
