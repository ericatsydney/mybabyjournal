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
              <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => {
                  return (
                    <tr>
                      <td>
                        <Link to={`/profiles/${profile.id}`}>{profile.first_name}{profile.last_name}</Link>
                      </td>
                      <td>button goes here</td>
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
