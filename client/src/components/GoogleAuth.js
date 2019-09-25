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

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
