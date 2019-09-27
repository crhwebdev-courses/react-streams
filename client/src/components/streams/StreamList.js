import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = props => {
  console.log(props.streams);
  return <div>StreamList</div>;
};

const mapStateToProps = state => {
  return { streams: state.streams };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
