import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
  //use of react fragments: renders an invisible element so you can
  // render multiple elements in an invisible element without needing to wrap them in
  // a container element

  renderActionButtons() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
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

export default StreamDelete;
