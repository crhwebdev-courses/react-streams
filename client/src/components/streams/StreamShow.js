import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  render() {
    return <div>ShowStream</div>;
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamShow);
