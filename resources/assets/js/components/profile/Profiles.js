import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from '../app/PromiseStateContainer'
import Header from '../app/Header'
import ProfileDeleteModal from './ProfileDeleteModal'

class Profiles extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch])}
        onFulfillment={([profiles]) => {
          return (
            <div>
              <Header />
              <ProfileDeleteModal 
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
                  return (
                    <tr>
                      <td>
                        <Link to={`/profiles/${profile.id}`}>{profile.first_name} {profile.last_name}</Link>
                      </td>
                      <td>
                        <Link 
                          className="btn-floating red waves-effect waves-light modal-trigger" 
                          to={`/profiles/${profile.id}/edit`}
                        >
                          <i className="material-icons">mode_edit</i>
                        </Link>
                        <Link 
                          className="btn-floating grey waves-effect waves-light" 
                          data-target="profileDeleteModal"
                        >
                          <i className="material-icons">delete</i>
                        </Link>
                      </td>
                    </tr>
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
