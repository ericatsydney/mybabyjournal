import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import PromiseStateContainer from './PromiseStateContainer'

class Moment extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.momentsFetch])}
        onFulfillment={([moment]) => {
          return (
            <p>{moment.name}</p>
          )
        }}
      />
    )
  }

}

export default connect(props => ({
  momentsFetch: `/api/moments/${props.params.momentId}`,
}))(Moment)
