import React, { Component } from 'react';

class TextDisplay extends Component {

  state = {
    votes: 0
  }

  upVote = (event) => {
    const voteCount = this.state.votes + 1
    this.setState({
      votes: voteCount
    })
  }

  render() {
    const { text } = this.props;
    return (
      <>
        <p><strong>{text}</strong> Votes: {this.state.votes}</p>
        <button onClick={this.upVote}>Upvote</button>
      </>
    );
  }

};

export default TextDisplay;
