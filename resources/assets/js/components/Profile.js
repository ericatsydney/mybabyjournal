import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class MomentEditModal extends Component {
  render() {
    let updateUri = `/api/moments`;
    return (
      <div className="modal fade" id="momentEditModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-body">
            <form action={updateUri} method="POST" encType="multipart/form-data">
              <input type="hidden" name="_method" value="PUT" />
              <div className="md-form">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" ref={(input) => this.input = input} defaultValue={this.props.name}/>
                <label for="name">First name</label>
              </div>
              <div className="md-form">
                <textarea type="text" className="form-control md-textarea" id="description" name="description" placeholder="Enter description" ref={(input) => this.input = input} defaultValue={this.props.description}/>
                <label for="name">Description</label>
              </div>
	      <div className="md-form">
                <div className="row">
	           <img src={this.props.avatar} className="img-circle pull-left" />
	           <input type="file" className="form-control-file" id="avatar" name="avatar" />
                </div>
	        <label for="avatar">Avatar</label>
	      </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
	  </div>
	  </div>
	</div>
      </div>
    );
  }
}

class ProfileList extends Component {
  render() {
    return (
      <div className="list-group"> 
        {
	  this.props.profiles.map(profile =>  
	    <ProfileListItem 
	      key={profile.id} 
	      firstName={profile.first_name} 
	      lastName={profile.last_name} 
	      gender={profile.gender} 
	      profileId={profile.id} 
	      avatar={profile.avatar} 
	      dateOfBirth={profile.date_of_birth} 
	      activeId={this.props.activeProfileId}
	      ></ProfileListItem> 
	  )
	}
      </div>);
  }
}
class ProfileListItem extends Component {
  render() {
    let classes = "list-group-item";
    classes += this.props.activeId === this.props.profileId ? ' active' : '';

    return (
      <Link to={`/profiles/${this.props.profileId}`} className={classes}>
        <div className="row">
	  <div className="col-xs-5">
            <ProfileAvatar avatar={this.props.avatar}/> 
	  </div>
	  <div className="col-xs-7">
            {this.props.firstName} {this.props.lastName}
	  </div>
	</div>
      </Link>
    );
  }
}
class ProfileAvatar extends Component {
  render() {
    return (
      <img src={this.props.avatar} className="img-circle" width="50" height="50" />
    );
  }
}
class MomentEmptyMessage extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Opps there is no moment yet</h4>
          <p className="card-text">Create a new one.</p>
          <a className="btn btn-primary">Create a Moment</a>
        </div>
      </div>
    );
  }
}
class MomentList extends Component {
  render() {
    return (
      this.props.moments.length ? (
      <ul className="list-group"> 
        {
	  this.props.moments.map(function(moment) { 
	    return ( <MomentListItem 
	      key={moment.id} 
	      id={moment.id} 
	      name={moment.name} 
	      description={moment.description} 
	      photos={moment.photos} 
	      ></MomentListItem>); 
	  })
	}
      </ul>) : <MomentEmptyMessage/>
    )
  }
}
class CreateMomentButton extends Component {
  render() {
    return (
      <div className="btn-wrapper">
	  <Link className="btn btn-default" to={`/profiles/${this.props.profileId}/edit`}>Edit Profile</Link>
          <a className="btn btn-default" role="button">
            Albumn Mode          
          </a>
	  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#momentEditModal">Add New Moment</button>
      </div>
    )
  }
}
class MomentListItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
	  <div className="col-xs-8">
	    <div className="moment-name">
	      <Link to={`/moments/${this.props.id}`}>{this.props.name}</Link>
	    </div>
	  </div>
	  <div className="col-xs-4">
            <MomentPhotosThumnail/> 
	  </div>
	  <Link className="btn-floating red waves-effect waves-light" to={`/moments/${this.props.id}/edit`}>
	    <i className="fa fa-pencil"></i>
	  </Link>
	</div>
      </li>
    );
  }
}
class MomentPhotosThumnail extends Component {
  render() {
    return (
      <div className="moment-photo-thunmnail">
        <img src="http://placehold.it/50x50" className="img-thumbnail"/>
        <img src="http://placehold.it/50x50" className="img-thumbnail"/>
      </div>
    );
  }
}
class Profile extends Component {
  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch, this.props.profileFetch, this.props.momentsFetch])}
        onFulfillment={([profiles, profile, moments]) => {
          return (
            <div className="profile__info">
              <div className="col-xs-2">
	        <ProfileList profiles={profiles} activeProfileId={profile.id}/>
	      </div>
              <div className="col-xs-10">
	        <MomentEditModal />
	        <CreateMomentButton profileId={profile.id}/>
	        <MomentList moments={moments} />
	      </div>
	    </div>
          )
        }}
      />
    )
  }
}

// @todo Modified react-refetch/lib/components/connect.js to add xsrf token in.
// @todo Need to rewrite it in custom components.
export default connect((props, context) => ({
  profilesFetch: {
    url: `/api/profiles`,
  },
  profileFetch: {
    url: `/api/profiles/${props.params.profileId}`,
  },
  momentsFetch: `/api/profiles/${props.params.profileId}/moments`,
}))(Profile)
