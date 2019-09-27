import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams() {
    let streams = [];

    for (let key in this.props.streams) {
      const stream = this.props.streams[key];
      streams.push(<div key={stream.id}>{stream.title}</div>);
    }

    return streams;
  }

  render() {
    return <div>{this.renderStreams()}</div>;
  }
}

const mapStateToProps = state => {
  return { streams: state.streams };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
