import React, { Component } from 'react';
import { connect } from 'react-redux';

class StreamEdit extends Component {
  render() {
    if (this.props.stream) {
      return <div>{this.props.stream.title}</div>;
    }

    return <div>Loading stream...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
