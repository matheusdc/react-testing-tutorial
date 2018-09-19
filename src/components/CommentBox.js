import React, { Component } from 'react';

class ComponentBox extends Component {

  state = {
    comment: ''
  }

  _handleChange = (evt)=>  {
    this.setState({ comment: evt.target.value });
  }

  _handleSubmit = (evt)=>  {
    evt.preventDefault();

    // TODO - Call an action creator to save the comment

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this._handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
};

export default ComponentBox;
