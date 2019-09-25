import React, { Component } from 'react';
import credentials from '../credentials/';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

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
          //set auth state on component
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          //set a listener that fires when auth status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" /> Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignIn}>
          <i className="google icon" /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
