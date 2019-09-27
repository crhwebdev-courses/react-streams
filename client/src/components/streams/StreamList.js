import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams() {
    return this.props.streams.map(stream => {
      return <div key={stream.id}>{stream.title}</div>;
    });
  }

  render() {
    return <div>{this.renderStreams()}</div>;
  }
}

const mapStateToProps = state => {
  //return an array of the values in the streams object
  // to convert streams into an array for display
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
