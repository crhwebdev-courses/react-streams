import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import credentials from '../credentials/';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: credentials.googleClientId,
          scope: 'email'
        })
        .then(() => {
          //get an instance of the auth2 client and set it to component property
          this.auth = window.gapi.auth2.getAuthInstance();
          //set auth state on redux store
          this.onAuthChange(this.auth.isSignedIn.get());

          //set a listener that fires when auth status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //Note: this callback gets called with a boolean indicating signed in status
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" /> Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
