import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OrderForm from './containers/OrderForm';
import Dishes from './components/Dishes';
import DishService from './services/DishService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      dishes: [],
      cart: []
    }
  }

  componentDidMount() {
    this.loadStateWithLocalStorage();

    DishService.fetchDishes().then(dishes => this.setState({ dishes }))

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  loadStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string into a JS object and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  handleClick = (dish) => {
    this.setState({
        cart: this.state.cart.concat(dish)
      });
  }

  removeCartItem = (id) => {
    const cart = [...this.state.cart];
    const updatedCart = cart.filter(cartItem => cartItem.id !== id);
    this.setState({ cart: updatedCart })
  }

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" render={() => <Dishes dishes={this.state.dishes} handleClick={this.handleClick.bind(this)} /> } />
            <Route exact path="/order/new" render={() => <OrderForm cart={this.state.cart} removeCartItem={this.removeCartItem.bind(this)} /> }  />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
