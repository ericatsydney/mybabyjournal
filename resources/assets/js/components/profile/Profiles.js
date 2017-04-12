import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import Header from '../app/Header'
import ProfileDeleteModal from './ProfileDeleteModal'
import ProfileListItem from './ProfileListItem'

class Profiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteProfileId: null
    }
    this.updateProfileId = this.updateProfileId.bind(this)
  }

  updateProfileId(profileId) {
    this.setState({
      deleteProfileId: profileId
    })
  }

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch])}
        onFulfillment={([profiles]) => {
          return (
            <div>
              <Header />
              <ProfileDeleteModal 
                profileId={this.state.deleteProfileId}
              />
              <table className='container'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => {
                  return (<ProfileListItem 
                    profileId = {profile.id}
                    profileFirstName = {profile.first_name}
                    profileLastName = {profile.last_name}
                    onClickEvent = {this.updateProfileId}
                  />
                  )
                })}
              </tbody>
              </table>
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
