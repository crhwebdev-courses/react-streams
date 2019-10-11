import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions/';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActionButtons() {
    //use of react fragments: renders an invisible element so you can
    // render multiple elements in an invisible element without needing to wrap them in
    // a container element
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    console.log(this.props.stream);
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Do you want to delete this stream?"
          actions={this.renderActionButtons()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamDelete);
