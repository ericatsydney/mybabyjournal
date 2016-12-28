import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class Moments extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.momentsFetch])}
        onFulfillment={([moments]) => {
          return (
            <ul>
              {moments.map((moment) => {
                return (
                  <li key={moment.id}>
                    <Link to={`/moments/${moment.id}`}>{moment.name}</Link>
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
  momentsFetch: '/api/moments',
}))(Moments)
