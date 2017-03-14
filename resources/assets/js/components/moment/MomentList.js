import React, { Component, PropTypes } from 'react'
import MomentListItem from './MomentListItem'
import MomentEmptyMessage from './MomentEmptyMessage'

class MomentList extends Component {
  render() {
    return (
      this.props.moments.length ? (
      <ul className="timeline browser-default"> 
        {
	  this.props.moments.map(moment => { 
	    return ( <MomentListItem 
	      key={moment.id} 
	      id={moment.id} 
	      name={moment.name} 
	      description={moment.description} 
	      photos={moment.photos} 
              profileId={this.props.profileId} 
	      onClickEvent={this.props.onClickEvent}
	      ></MomentListItem>); 
	  })
	}
      </ul>) : <MomentEmptyMessage/>
    )
  }
}

export default MomentList;
