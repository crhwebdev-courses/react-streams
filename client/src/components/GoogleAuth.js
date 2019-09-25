import React, { Component } from 'react';
import credentials from '../credentials/';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: credentials.googleClientId,
        scope: 'email'
      });
    });
  }

  render() {
    return <div className="item">Google Auth</div>;
  }
}

export default GoogleAuth;
