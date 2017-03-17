import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ProfileList extends Component {
  render() {
    return (
      <div className="profile-information"> 
        <nav className="nav-extended">
          <div className="nav-background">
            <div className="ea k"></div>
          </div>
          <div className="container">
            <a className="brand-logo" href="#">My Baby Journal</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a ref="/profiles/1">Profiles</a>
              </li>
              <li>
                <a ref="/profiles/6">Albums</a>
              </li>
            </ul>

            <ul className="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
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
            <CreateMomentButton 
              profileId={this.props.activeProfileId} 
              onClickEvent={this.props.onClickEvent}
            />
          </div>
        </nav>
      </div>);
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
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light red"
           onClick={this.clickCallback}
           data-target="momentEditModal"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    )
  }
}

class ProfileListItem extends Component {
  render() {
    let classes = '';
    classes += this.props.activeId === this.props.profileId ? ' active' : '';
    if (this.props.activeId === this.props.profileId) {
    return (
      <div className="row profile-current">
        <Link to={`/profiles/${this.props.profileId}`} className={`profile-list__item ${classes}`}>
          <div className="profile-avatar col s12">
            <ProfileAvatar avatar={this.props.avatar}/> 
          </div>
          <div className={`profile-list__item-name col s12 ${classes}`}>
            {this.props.firstName} {this.props.lastName}
          </div>
        </Link>
      </div>
    );
    }
    else {
     return null;
    }
  }
}

class ProfileAvatar extends Component {
  render() {
    return (
      <img src={this.props.avatar} className="z-depth-3 circle" width="50" height="50" />
    );
  }
}

export default ProfileList;
