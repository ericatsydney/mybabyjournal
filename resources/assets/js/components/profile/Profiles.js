import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import Header from '../app/Header'

class Profiles extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch])}
        onFulfillment={([profiles]) => {
          return (
            <div>
              <Header/>
              <ul>
                {profiles.map((profile) => {
                  return (
                    <li key={profile.id}>
                      <Link to={`/profiles/${profile.id}`}>{profile.first_name}{profile.last_name}</Link>
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
  profilesFetch: '/api/profiles',
}))(Profiles)
