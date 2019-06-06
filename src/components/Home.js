import React, { Component } from 'react';
import TextsList from './TextsList';

class Home extends Component {

  state = {
    text: '',
    texts: []
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      texts: [...this.state.texts, this.state.text],
      text: ''
    })
  }

  render() {
    return(
      <>
        <div>
          <h2>Hungry?</h2>
          <p>Click above to start your order.</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.text} onChange={this.handleOnChange} />
            <button type="submit">Submit</button>
          </form>
          <TextsList texts={this.state.texts} />
        </div>
      </>
    )
  }

}

export default Home;
