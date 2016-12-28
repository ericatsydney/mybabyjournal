import React, { Profile } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class Profiles extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch])}
        onFulfillment={([profiles]) => {
          return (
            <ul>
              {profiles.map((profile) => {
                return (
                  <li key={profile.id}>
                    <Link to={`/moments/${profile.id}`}>{profile.first_name}{profile.last_name}</Link>
                  </li>
                )
              })}
            </ul>
          )
        }}
      />
    )
  }

}

export default connect(props => ({
  profilesFetch: '/api/profiles',
}))(Moments)
