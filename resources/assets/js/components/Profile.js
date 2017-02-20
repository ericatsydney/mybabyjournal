import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class MomentDeleteModal extends Component {
  render() {
    return (
      <div className="modal fade" id="momentDeleteModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-body">
            <form action={this.props.momentEditUrl} method="POST" encType="multipart/form-data">
              <p>You are going to delete the data in this profile. The action cannot be reverted.</p>
              <input type="hidden" name="_method" value="DELETE"></input>
              <button type="submit" className="btn btn-danger">Delete</button>
              <button className="btn btn-grey">Cancel</button>
            </form>
	  </div>
	  </div>
	</div>
      </div>
    );
  }
}

class MomentEditModal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.momentName.value,
      this.momentDescription.value
    );
  }

  render() {
    let pattern = /^\/api\/profiles\/(\d+)\/moments$/;
    let hiddenMethod = <input type="hidden" name="_method" value="PUT"></input>;
    // For create moment action, we don't need this hidden field.
    if (pattern.test(this.props.momentEditUrl)) {
      hiddenMethod = null;
    }
    return (
      <div className="modal fade" id="momentEditModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-body">
            <form action={this.props.momentEditUrl} method="POST" encType="multipart/form-data">
              {hiddenMethod}
              <div className="md-form">
                <input 
		  type="text" 
		  className="form-control" 
		  id="name" 
		  name="name" 
		  placeholder="Enter name" 
		  value={this.props.momentName}
                  ref={(input) => this.momentName = input}
                  onChange={this.handleChange}
                />
                <label for="name" className="active">First name</label>
              </div>
              <div className="md-form">
                <textarea 
		  type="text" 
		  className="form-control md-textarea" 
		  id="description" 
		  name="description" 
		  placeholder="Enter description" 
		  value={this.props.momentDescription}
                  ref={(input) => this.momentDescription = input}
                  onChange={this.handleChange}
                />
                <label for="descrption" className="active">Description</label>
              </div>
	      <div className="form-group">
                <label for="photos">Avatar</label>
	        <input type="file" className="form-control-file" id="photos" name="photos" />
	        <img src={this.props.avatar} className="img-circle pull-left" />
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

class CreateMomentButton extends Component {
  constructor(props) {
    super(props);
    this.clickCallback = this.clickCallback.bind(this);
  }

  clickCallback() {
    this.props.onClickEvent(
      `/api/profiles/${this.props.profileId}/moments`,
      '',
      '' 
    );
  }

  render() {
    return (
      <div className="btn-wrapper">
	  <Link className="btn" to={`/profiles/${this.props.profileId}/edit`}>Edit Profile</Link>
          <a className="btn" role="button">
            Albumn Mode          
          </a>
	  <button 
	    type="button" 
	    className="btn success" 
	    data-toggle="modal" 
	    data-target="#momentEditModal"
	    onClick={this.clickCallback}
          >Add New Moment
	  </button>
      </div>
    )
  }
}

class MomentListItem extends Component {
  constructor(props) {
    super(props);
    this.clickCallback = this.clickCallback.bind(this);
  }

  clickCallback() {
    this.props.onClickEvent(
      `/api/profiles/${this.props.profileId}/moments/${this.props.id}`,
      `${this.props.name}`,
      `${this.props.description}`
    );
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
	  <div className="col-xs-5">
	    <div className="moment-name">
              <MomentPhotosThumnail/> 
	    </div>
	  </div>
	  <div className="col-xs-5">
            <h3>
              <Link to={`/moments/${this.props.id}`}>{this.props.name}</Link>
            </h3>
	  </div>
	  <div className="col-xs-2">
            <Link 
              className="btn-floating btn-cyan waves-effect waves-light" 
              data-toggle="modal" 
              data-target="#momentEditModal"
              onClick={this.clickCallback}>
              <i className="fa fa-pencil"></i>
            </Link>
            <Link 
              className="btn-floating grey waves-effect waves-light" 
              data-toggle="modal" 
              data-target="#momentDeleteModal"
              onClick={this.clickCallback}>
              <i className="fa fa-trash"></i>
            </Link>
	  </div>
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
  constructor(props) {
    super(props);

    this.state = {
      momentEditUrl: '',
      momentName: '',
      momentDescription: ''
    };

    this.prepopulateMomentModal = this.prepopulateMomentModal.bind(this);
  }

  prepopulateMomentModal(url, name, description) {
    this.setState({
      momentEditUrl: url,
      momentName: name,
      momentDescription: description
    }); 
  }

  updateMoment(name, description) {
    this.setState({
      momentName: name,
      momentDescription: description
    });
  }

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.profilesFetch, this.props.profileFetch, this.props.momentsFetch])}
        onFulfillment={([profiles, profile, moments]) => {
          return (
            <div className="profile__info">
              <div className="col-xs-10">
	        <MomentEditModal 
		  momentEditUrl={this.state.momentEditUrl}
		  momentName={this.state.momentName}
		  momentDescription={this.state.momentDescription}
                  onUserInput={this.updateMoment}
		/>
	        <MomentDeleteModal 
		  momentEditUrl={this.state.momentEditUrl}
		/>
	        <CreateMomentButton 
		  profileId={profile.id} 
		  onClickEvent={this.prepopulateMomentModal} 
		/>
	        <MomentList 
		  moments={moments} 
		  profileId={profile.id} 
		  onClickEvent={this.prepopulateMomentModal} 
		/>
	      </div>
              <div className="col-xs-2">
	        <ProfileList 
                  profiles={profiles} 
                  activeProfileId={profile.id}
                />
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
